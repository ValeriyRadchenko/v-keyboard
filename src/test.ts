// Load the compiled .node file from the build/Release folder
import addon from './build/Release/v-keyboard';
import { uIOhook, UiohookKey } from 'uiohook-napi';

console.log('Testing Addon...');
const input = 5;
const output = addon.addTen(input);


uIOhook.on('keydown', (e: any) => {
    if (e.keycode === UiohookKey.Q) {
        addon.keyDown(UiohookKey.F24);
    }
});

uIOhook.on('keyup', (e: any) => {
    if (e.keycode === UiohookKey.Q) {
        console.log(UiohookKey.NumpadAdd, parseInt('0x6B', 16));
        addon.keyUp(UiohookKey.F24);
    }
});

uIOhook.start();
