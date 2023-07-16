import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../../extend";
import { RequestProvider } from "@/contexts/requestContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <RequestProvider>
        <Component {...pageProps} />
      </RequestProvider>
    </ChakraProvider>
  );
};

export default App;
