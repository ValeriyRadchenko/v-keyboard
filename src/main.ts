import { KeyCode, isExtendedKey } from './key-codes';
const vKeyboard = require('bindings')('v-keyboard.node');

export function keyDown(keyCode: KeyCode) {
    if (isExtendedKey(keyCode)) {
        return vKeyboard.keyDownExtended(keyCode);
    }

    return vKeyboard.keyDown(keyCode);
}

export function keyUp(keyCode: KeyCode) {
    if (isExtendedKey(keyCode)) {
        return vKeyboard.keyUpExtended(keyCode);
    }

    return vKeyboard.keyUp(keyCode);
}

export { KeyCode, isExtendedKey };