import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    green: {
      25: "#C1FFDA",
      50: "#06E938",
      75: "#37C256",
    },
    red: {
      25: "#FFC1C1",
      50: "#E90606",
      75: "#C23737",
    },
    black: {
      25: "#F0F2F5",
      50: "#505050",
    },
    gray: {
      50: "#7A7A7A",
    },
  },
  styles: {
    global: (props: ChakraProps) => ({
      body: {
        bg: mode("white", "gray.900")(props),
      },
    }),
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
