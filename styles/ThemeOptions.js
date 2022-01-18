import { createTheme } from "@mui/material/styles";

export const themePallete = (mode) => (
  {
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary:{main:"hsl(0, 0%, 100%)"},
          text: { primary: "hsl(200, 15%, 8%)" },
          background: {
            default: "hsl(0, 0%, 98%)",
            paper: "hsl(0, 0%, 100%)",
          },
        }
      : {
          primary: {main:"hsl(209, 23%, 22%)"},
          text: { primary: "hsl(0, 0%, 100%)" },
          background: {
            default: "hsl(207, 26%, 17%)",
            paper: "hsl(209, 23%, 22%)",
          },
        }),
  },
});
