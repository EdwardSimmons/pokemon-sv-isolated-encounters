import { Box, Container, Divider, Grid, useMediaQuery } from "@mui/material"
import { useEffect, useRef } from "react"
import { PokemonInfo } from "./features/pokemon/Pokemon"
import VersionSelect from "./VersionSelect"
import RegionSelect from "./RegionSelect"
import Map from "./Map"
import ShinyHuntSelect from "./ShinyHuntSelect"
import { useAppSelector } from "./app/hooks"
import { selectPokeFilterId } from "./features/pokemon/pokeFilterIdSlice"
import { selectMapMarker } from "./features/map/mapSlice"
import Title from "./Title"
import KofiBtn from "./utilities/KofiBtn"
import theme from "./theme"
import Kudos from "./Kudos"

export default function App() {
  const selectedPokeFilterId = useAppSelector(selectPokeFilterId)
  const selectedMapMarker = useAppSelector(selectMapMarker)
  const pokemonInfoRef = useRef<HTMLDivElement>(null)

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  useEffect(() => {
    if (
      selectedPokeFilterId &&
      pokemonInfoRef.current &&
      !(isDesktop && selectedMapMarker.tableId === 0)
    ) {
      pokemonInfoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [selectedPokeFilterId, selectedMapMarker])

  const MobileLayout = (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      <Title />
      <VersionSelect />
      <RegionSelect />
      <ShinyHuntSelect />
      <Map />
      <PokemonInfo ref={pokemonInfoRef} />
      <Divider sx={{ mt: 3 }}>{/* <KofiBtn /> */}</Divider>
      <Kudos />
    </Container>
  )

  const DesktopLayout = (
    <Container maxWidth="md" sx={{ minHeight: "100dvh", py: 3 }}>
      <Grid container spacing={3}>
        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          xs={6}
        >
          <Box>
            <Title />
            <VersionSelect />
            <RegionSelect />
            <ShinyHuntSelect />
          </Box>

          <Kudos />
        </Grid>
        <Grid item xs={6}>
          <Map />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mb: 2 }}>{/* <KofiBtn /> */}</Divider>
          <PokemonInfo ref={pokemonInfoRef} />
        </Grid>
      </Grid>
    </Container>
  )

  return isDesktop ? DesktopLayout : MobileLayout
}
