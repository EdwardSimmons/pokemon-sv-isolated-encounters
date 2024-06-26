import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { Provider } from "react-redux"
import { store } from "./app/store"
import theme from "./theme"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
