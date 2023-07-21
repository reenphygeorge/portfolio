import { useColorMode } from "@chakra-ui/react";
import { FC, PropsWithChildren, createContext, useMemo } from "react";

type GlobalColors = {
  navBg: string;
  green50: string;
  red50: string;
  black50: string;
  menuItem: string;
  black25: string;
  white: string;
  gray50: string;
  unselectedRouteBg: string;
};

const ColorContext = createContext<GlobalColors>({
  navBg: "string",
  green50: "string",
  red50: "string",
  black50: "string",
  menuItem: "string",
  black25: "string",
  white: "string",
  gray50: "string",
  unselectedRouteBg: "string",
});

const ColorProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { colorMode } = useColorMode();

  const globalColors = useMemo(() => {
    return colorMode === "light"
      ? {
          navBg: "rgba(255, 255, 255, 0.15)",
          green50: "green.50",
          red50: "red.50",
          black50: "black.50",
          menuItem: "black.50",
          black25: "black.25",
          white: "white",
          gray50: "gray.50",
          unselectedRouteBg: "black.25",
        }
      : {
          navBg: "rgba(23, 25, 35, 0.15)",
          green50: "green.75",
          red50: "red.75",
          black50: "gray.300",
          menuItem: "gray.200",
          black25: "gray.700",
          white: "gray.800",
          gray50: "gray.400",
          unselectedRouteBg: "gray.700",
        };
  }, [colorMode]);

  return (
    <ColorContext.Provider value={globalColors}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
