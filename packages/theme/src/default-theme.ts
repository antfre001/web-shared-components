import { colors } from "./colors";
import { GuiTheme, ColorScheme } from "./types";

// light theme
export const lightScheme: ColorScheme = {
  id: "light",
  type: "light",
  colors: {
    bg: {
      base: "#ffffff",
      fill: colors.background.one,
    },
    text: {
      foreground: "#000000",
      muted: "#E4E4E5",
    },
    primary: colors.vattjom,
    secondary: colors.gronsta,
    neutral: colors.svartvik,
    success: colors.gronsta,
    info: colors.vattjom,
    warning: colors.warning,
    error: colors.error,
  },
};

// dark theme
export const darkScheme: ColorScheme = {
  id: "light",
  type: "dark",
  colors: {
    bg: {
      base: colors.gray[2],
      fill: colors.gray[1],
    },
    text: {
      foreground: colors.svartvik["100"],
      muted: colors.svartvik["300"],
    },
    primary: colors.vattjom,
    secondary: colors.gronsta,
    neutral: colors.svartvik,
    success: colors.gronsta,
    info: colors.vattjom,
    warning: colors.warning,
    error: colors.error,
  },
};

export const defaultTheme: GuiTheme = {
  cursor: "pointer",
  rounded: "0.375rem", // md
  colorSchemes: {
    light: lightScheme,
    dark: darkScheme,
  },
  config: {},
};
