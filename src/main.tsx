import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
