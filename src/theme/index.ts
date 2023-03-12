const baseTheme = {
  typography: {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "1rem",
  },
};

export const lightTheme = {
  ...baseTheme,
  palette: {
    primary: "#c92a2a",
    secondary: "#f03e3e",
    terciary: "#ff8787",
    background: {
      primary: "#FAFAFA",
      secondary: "#FAFAFA",
    },
    text: {
      primary: "#000",
      secondary: "#C4C4C4",
    },
  },
};

export const darkTheme = {
  ...baseTheme,
  palette: {
    primary: "#ff8787",
    secondary: "#c92a2a",
    terciary: "#A71D00 ",
    background: {
      primary: "#383A47",
      secondary: "#4D4F61",
    },
    text: {
      primary: "#fff",
      secondary: "",
    },
  },
};
