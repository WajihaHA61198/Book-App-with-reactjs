import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "rgb(224 242 254)",
  secondary: "rgb(2 132 199)",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  error: "#890F0D",
  grey: "#F7F8F8",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    black: {
      main: Colors.black,
    },
    error: {
      main: Colors.error,
    },
    grey: {
      main: Colors.grey,
    },
  },
});

export default theme;
