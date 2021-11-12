import * as React from "react";
import LoginContainer from "./screens/login-container/login-container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StoreContext, {
  ProviderStateInterface
} from "./state/agent-studio-context";
import reducer, { initialState } from "./state/agent-studio-state";
import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import shadows, { Shadows } from "@mui/material/styles/shadows";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    button: {
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: "#20B283",
      contrastText: "#fff"
    },
    secondary: {
      main: "#223E80"
    },
    text: {
      secondary: "#8692A6"
    },
    background: {
      paper: "#f2f2f2"
    }
  },
  shadows: shadows.map((v, index) =>
    index === 1 ? "0px 2px 20px rgba(0, 0, 0, 0.15)" : v
  ) as Shadows
});

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState: ProviderStateInterface = {
    state,
    dispatch
  };

  return (
    <ThemeProvider theme={theme}>
      <StoreContext.Provider value={providerState}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<LoginContainer />} />
          </Routes>
        </BrowserRouter>
      </StoreContext.Provider>
    </ThemeProvider>
  );
}
