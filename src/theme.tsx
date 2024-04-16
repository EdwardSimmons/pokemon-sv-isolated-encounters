import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#e3efdc",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 560, // Custom sm breakpoint such that the map is full-width
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 48,
        },
      },
    },
  },
})

export default theme
