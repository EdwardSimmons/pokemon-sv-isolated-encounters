import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import ProTip from "./ProTip"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import Divider from "@mui/material/Divider"
import { useEffect, useState } from "react"
import Map from "./Map"
import { Pokedex } from "./features/pokemon/Pokemon"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Pokedex />
      {/* <Map /> */}
    </Container>
  )
}
