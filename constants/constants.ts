const GLOBAL_CONSTANTS = {
  COLORS: {
    PRIMARY: "#42C83C",
    TEXT_GRAY: "#DADADA",
    AUTH_BACKGROUND: "#1C1B1B",
  },
  BUTTON_PRESSED_OPACITY: 0.9
} as const

export type GlobalConstants = typeof GLOBAL_CONSTANTS[keyof typeof GLOBAL_CONSTANTS]

export default GLOBAL_CONSTANTS
