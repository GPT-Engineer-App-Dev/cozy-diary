import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, CSSReset, ColorModeProvider, useColorMode } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, config });

const Main = () => {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeProvider options={{ initialColorMode: "light", useSystemColorMode: false }}>
          <CSSReset />
          <App />
        </ColorModeProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
