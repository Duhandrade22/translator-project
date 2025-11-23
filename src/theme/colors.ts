export const colors = {
  // Cores neutras
  slate: {
    600: "#4D5562",
    400: "#D2D5DA",
    900: "#394150",
    950: "#212936CC",
  },

  // Cores de fundo
  background: {
    light: "#F9FAFB",
    dark: "#040711",
    overlay: "#121826CC",
  },

  // Cores primárias (azul)
  primary: {
    DEFAULT: "#263FA9",
    light: "#7CA9F3",
  },
} as const;

export type ThemeColors = typeof colors;
