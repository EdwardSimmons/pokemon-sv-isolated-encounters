import { Box, Typography, useMediaQuery } from "@mui/material"
import theme from "./theme"

export default function Title() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Box>
      <Typography variant={isDesktop ? "h4" : "h5"}>
        Pokémon Scarlet & Violet
      </Typography>
      <Typography variant={isDesktop ? "h5" : "h6"} sx={{ mb: 2 }}>
        Isolated Encounter Optimisation Tool
      </Typography>
    </Box>
  )
}
