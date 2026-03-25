import { KeyCode, isExtendedKey } from './key-codes';
const vKeyboard = require('bindings')('v-keyboard.node');

export function keyDown(keyCode: number, isExtended: boolean = false) {
    if (isExtended) {
        return vKeyboard.keyDownExtended(keyCode);
    }

    return vKeyboard.keyDown(keyCode);
}

export function keyUp(keyCode: number, isExtended: boolean = false) {
    if (isExtended) {
        return vKeyboard.keyUpExtended(keyCode);
    }

    return vKeyboard.keyUp(keyCode);
}

export { KeyCode, isExtendedKey };