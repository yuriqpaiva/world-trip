import { extendTheme, Theme, DeepPartial } from "@chakra-ui/react";

const customTheme = {
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.400",
      },
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    gray: {
      "100": "#F5F8FA",
      "200": "#DADADA",
      "400": "#47585B",
    },
  },
} as DeepPartial<Theme>;

export const theme = extendTheme(customTheme);
