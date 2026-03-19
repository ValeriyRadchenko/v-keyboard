const https = require('https');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const pkg = require('../package.json');

const repoMatch = pkg.repository.url.match(/github\.com[/:]([^/]+)\/([^/.]+)/);
if (!repoMatch) {
  console.error('Could not parse repository owner/repo from package.json');
  process.exit(1);
}

const owner = repoMatch[1];
const repo = repoMatch[2];
const version = pkg.version;
const platform = process.platform;
const arch = process.arch;

const assetName = `${repo}-v${version}-${platform}-${arch}.tar.gz`;
const releaseUrl = `https://github.com/${owner}/${repo}/releases/download/v${version}/${assetName}`;

const buildDir = path.join(__dirname, '..', 'build', 'Release');

function download(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) {
      return reject(new Error('Too many redirects'));
    }

    https.get(url, { headers: { 'User-Agent': 'node' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location, maxRedirects - 1));
      }

      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`Download failed: HTTP ${res.statusCode}`));
      }

      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function extractTarGz(buffer, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  const tmpFile = path.join(os.tmpdir(), `${repo}-${Date.now()}.tar.gz`);
  fs.writeFileSync(tmpFile, buffer);
  try {
    execSync(`tar -xzf "${tmpFile}" -C "${destDir}"`, { stdio: 'inherit' });
  } finally {
    fs.unlinkSync(tmpFile);
  }
}

function buildFromSource() {
  console.log('Building from source...');

  console.log('Building native addon with node-gyp...');
  execSync('npx node-gyp rebuild', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  });

  console.log('Compiling TypeScript...');
  execSync('npx tsc', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  });

  console.log('Build from source completed successfully.');
}

async function install() {
  console.log(`Attempting to download prebuilt binary from:`);
  console.log(`  ${releaseUrl}`);

  try {
    const buffer = await download(releaseUrl);
    extractTarGz(buffer, buildDir);
    console.log('Prebuilt binary installed successfully.');
  } catch (err) {
    console.warn(`Prebuilt binary download failed: ${err.message}`);
    console.log('Falling back to building from source...');
    buildFromSource();
  }
}

install().catch((err) => {
  console.error('Installation failed:', err.message);
  process.exit(1);
});
