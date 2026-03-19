const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pkg = require('../package.json');

const repoMatch = pkg.repository.url.match(/github\.com[/:]([^/]+)\/([^/.]+)/);
if (!repoMatch) {
  console.error('Could not parse repository owner/repo from package.json');
  process.exit(1);
}

const repo = repoMatch[2];
const version = pkg.version;
const platform = process.platform;
const arch = process.arch;

const rootDir = path.join(__dirname, '..');
const buildDir = path.join(rootDir, 'build', 'Release');
const distDir = path.join(rootDir, 'dist');

const nodeFile = `${repo}.node`;
const nodePath = path.join(buildDir, nodeFile);

console.log('Building native addon and TypeScript...');
execSync('npx node-gyp rebuild', { stdio: 'inherit', cwd: rootDir });
execSync('npx tsc', { stdio: 'inherit', cwd: rootDir });

if (!fs.existsSync(nodePath)) {
  console.error(`Native addon not found at ${nodePath}`);
  process.exit(1);
}

const assetName = `${repo}-v${version}-${platform}-${arch}.tar.gz`;
const assetPath = path.join(distDir, assetName);

fs.mkdirSync(distDir, { recursive: true });

execSync(`tar -czf "${assetPath}" -C "${buildDir}" "${nodeFile}"`, {
  stdio: 'inherit',
});

console.log(`Release asset created: ${assetPath}`);
console.log(`Upload it to GitHub Releases v${version}`);
