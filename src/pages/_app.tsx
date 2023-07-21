import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../theme";
import { RequestProvider } from "@/contexts/requestContext";
import { ColorProvider } from "@/contexts/colorContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RequestProvider>
        <ColorProvider>
          <Component {...pageProps} />
        </ColorProvider>
      </RequestProvider>
    </ChakraProvider>
  );
};

export default App;
