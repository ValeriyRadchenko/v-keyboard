export enum KeyCode {
  // Mouse buttons & Control-break
  LBUTTON = 0x01,
  RBUTTON = 0x02,
  CANCEL = 0x03,
  MBUTTON = 0x04,
  XBUTTON1 = 0x05,
  XBUTTON2 = 0x06,

  // Standard keys
  BACK = 0x08,
  TAB = 0x09,
  CLEAR = 0x0C,
  RETURN = 0x0D,
  SHIFT = 0x10,
  CONTROL = 0x11,
  MENU = 0x12, // Alt key
  PAUSE = 0x13,
  CAPITAL = 0x14, // Caps lock

  // IME keys
  KANA = 0x15,
  HANGUL = 0x15,
  IME_ON = 0x16,
  JUNJA = 0x17,
  FINAL = 0x18,
  HANJA = 0x19,
  KANJI = 0x19,
  IME_OFF = 0x1A,

  // Navigation & UI
  ESCAPE = 0x1B,
  CONVERT = 0x1C,
  NONCONVERT = 0x1D,
  ACCEPT = 0x1E,
  MODECHANGE = 0x1F,
  SPACE = 0x20,
  PRIOR = 0x21, // Page up
  NEXT = 0x22,  // Page down
  END = 0x23,
  HOME = 0x24,
  LEFT = 0x25,
  UP = 0x26,
  RIGHT = 0x27,
  DOWN = 0x28,
  SELECT = 0x29,
  PRINT = 0x2A,
  EXECUTE = 0x2B,
  SNAPSHOT = 0x2C, // Print screen
  INSERT = 0x2D,
  DELETE = 0x2E,
  HELP = 0x2F,

  // Number keys 0-9
  KEY_0 = 0x30,
  KEY_1 = 0x31,
  KEY_2 = 0x32,
  KEY_3 = 0x33,
  KEY_4 = 0x34,
  KEY_5 = 0x35,
  KEY_6 = 0x36,
  KEY_7 = 0x37,
  KEY_8 = 0x38,
  KEY_9 = 0x39,

  // Alphabet keys A-Z
  KEY_A = 0x41,
  KEY_B = 0x42,
  KEY_C = 0x43,
  KEY_D = 0x44,
  KEY_E = 0x45,
  KEY_F = 0x46,
  KEY_G = 0x47,
  KEY_H = 0x48,
  KEY_I = 0x49,
  KEY_J = 0x4A,
  KEY_K = 0x4B,
  KEY_L = 0x4C,
  KEY_M = 0x4D,
  KEY_N = 0x4E,
  KEY_O = 0x4F,
  KEY_P = 0x50,
  KEY_Q = 0x51,
  KEY_R = 0x52,
  KEY_S = 0x53,
  KEY_T = 0x54,
  KEY_U = 0x55,
  KEY_V = 0x56,
  KEY_W = 0x57,
  KEY_X = 0x58,
  KEY_Y = 0x59,
  KEY_Z = 0x5A,

  // Windows keys & Numpad
  LWIN = 0x5B,
  RWIN = 0x5C,
  APPS = 0x5D,
  SLEEP = 0x5F,
  NUMPAD0 = 0x60,
  NUMPAD1 = 0x61,
  NUMPAD2 = 0x62,
  NUMPAD3 = 0x63,
  NUMPAD4 = 0x64,
  NUMPAD5 = 0x65,
  NUMPAD6 = 0x66,
  NUMPAD7 = 0x67,
  NUMPAD8 = 0x68,
  NUMPAD9 = 0x69,
  MULTIPLY = 0x6A,
  ADD = 0x6B,
  SEPARATOR = 0x6C,
  SUBTRACT = 0x6D,
  DECIMAL = 0x6E,
  DIVIDE = 0x6F,

  // Function keys
  F1 = 0x70,
  F2 = 0x71,
  F3 = 0x72,
  F4 = 0x73,
  F5 = 0x74,
  F6 = 0x75,
  F7 = 0x76,
  F8 = 0x77,
  F9 = 0x78,
  F10 = 0x79,
  F11 = 0x7A,
  F12 = 0x7B,
  F13 = 0x7C,
  F14 = 0x7D,
  F15 = 0x7E,
  F16 = 0x7F,
  F17 = 0x80,
  F18 = 0x81,
  F19 = 0x82,
  F20 = 0x83,
  F21 = 0x84,
  F22 = 0x85,
  F23 = 0x86,
  F24 = 0x87,

  // Lock keys & Modifiers
  NUMLOCK = 0x90,
  SCROLL = 0x91,
  LSHIFT = 0xA0,
  RSHIFT = 0xA1,
  LCONTROL = 0xA2,
  RCONTROL = 0xA3,
  LMENU = 0xA4,
  RMENU = 0xA5,

  // Browser keys
  BROWSER_BACK = 0xA6,
  BROWSER_FORWARD = 0xA7,
  BROWSER_REFRESH = 0xA8,
  BROWSER_STOP = 0xA9,
  BROWSER_SEARCH = 0xAA,
  BROWSER_FAVORITES = 0xAB,
  BROWSER_HOME = 0xAC,

  // Media keys
  VOLUME_MUTE = 0xAD,
  VOLUME_DOWN = 0xAE,
  VOLUME_UP = 0xAF,
  MEDIA_NEXT_TRACK = 0xB0,
  MEDIA_PREV_TRACK = 0xB1,
  MEDIA_STOP = 0xB2,
  MEDIA_PLAY_PAUSE = 0xB3,
  LAUNCH_MAIL = 0xB4,
  LAUNCH_MEDIA_SELECT = 0xB5,
  LAUNCH_APP1 = 0xB6,
  LAUNCH_APP2 = 0xB7,

  // OEM keys
  OEM_1 = 0xBA,      // ';:' for US
  OEM_PLUS = 0xBB,   // '+'
  OEM_COMMA = 0xBC,  // ','
  OEM_MINUS = 0xBD,  // '-'
  OEM_PERIOD = 0xBE, // '.'
  OEM_2 = 0xBF,      // '/?' for US
  OEM_3 = 0xC0,      // '`~' for US
  
  // Gamepad
  GAMEPAD_A = 0xC3,
  GAMEPAD_B = 0xC4,
  GAMEPAD_X = 0xC5,
  GAMEPAD_Y = 0xC6,
  GAMEPAD_RIGHT_SHOULDER = 0xC7,
  GAMEPAD_LEFT_SHOULDER = 0xC8,
  GAMEPAD_LEFT_TRIGGER = 0xC9,
  GAMEPAD_RIGHT_TRIGGER = 0xCA,
  GAMEPAD_DPAD_UP = 0xCB,
  GAMEPAD_DPAD_DOWN = 0xCC,
  GAMEPAD_DPAD_LEFT = 0xCD,
  GAMEPAD_DPAD_RIGHT = 0xCE,
  GAMEPAD_MENU = 0xCF,
  GAMEPAD_VIEW = 0xD0,
  GAMEPAD_LEFT_THUMBSTICK_BUTTON = 0xD1,
  GAMEPAD_RIGHT_THUMBSTICK_BUTTON = 0xD2,
  GAMEPAD_LEFT_THUMBSTICK_UP = 0xD3,
  GAMEPAD_LEFT_THUMBSTICK_DOWN = 0xD4,
  GAMEPAD_LEFT_THUMBSTICK_RIGHT = 0xD5,
  GAMEPAD_LEFT_THUMBSTICK_LEFT = 0xD6,
  GAMEPAD_RIGHT_THUMBSTICK_UP = 0xD7,
  GAMEPAD_RIGHT_THUMBSTICK_DOWN = 0xD8,
  GAMEPAD_RIGHT_THUMBSTICK_RIGHT = 0xD9,
  GAMEPAD_RIGHT_THUMBSTICK_LEFT = 0xDA,

  // Additional OEM keys
  OEM_4 = 0xDB, // '[{' for US
  OEM_5 = 0xDC, // '\|' for US
  OEM_6 = 0xDD, // ']}' for US
  OEM_7 = 0xDE, // ''"' for US
  OEM_8 = 0xDF,
  OEM_102 = 0xE2, // angle bracket or backslash on RT 102-key keyboard

  // Special processing
  PROCESSKEY = 0xE5,
  PACKET = 0xE7,
  ATTN = 0xF6,
  CRSEL = 0xF7,
  EXSEL = 0xF8,
  EREOF = 0xF9,
  PLAY = 0xFA,
  ZOOM = 0xFB,
  NONAME = 0xFC,
  PA1 = 0xFD,
  OEM_CLEAR = 0xFE
}

export function isExtendedKey(vk: KeyCode): boolean {
  return [
    KeyCode.INSERT,
    KeyCode.DELETE,
    KeyCode.HOME,
    KeyCode.END,
    KeyCode.PRIOR,
    KeyCode.NEXT,
    KeyCode.LEFT,
    KeyCode.RIGHT,
    KeyCode.UP,
    KeyCode.DOWN,
    KeyCode.RCONTROL,
    KeyCode.RMENU,
    KeyCode.LWIN,
    KeyCode.RWIN,
    KeyCode.APPS,
    KeyCode.DIVIDE,
    KeyCode.NUMLOCK,
  ].includes(vk);
}