// src/theme/theme.ts
"use client";
import { createTheme } from "@mui/material/styles";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const theme = createTheme({
  palette: {
    primary: { main: "#0F2040" }, // Deep Navy
    secondary: { main: "#C9A84C" }, // Gold Accent
    background: {
      default: "#FFFFFF",
      paper: "#F7F5F0", // Warm Paper Texture
    },
    text: {
      primary: "#1A1A2E",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: dmSans.style.fontFamily,
    h1: { fontFamily: playfair.style.fontFamily, fontWeight: 700 },
    h2: { fontFamily: playfair.style.fontFamily, fontWeight: 700 },
    h3: { fontFamily: playfair.style.fontFamily, fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", padding: "10px 24px", fontWeight: 500 },
      },
    },
  },
});
