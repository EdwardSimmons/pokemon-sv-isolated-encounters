import { Backdrop, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppSelector } from "./app/hooks"
import { fetchTypeStatus } from "./features/pokemon/pokemonTypeSlice"
import { useGetPokemonState } from "./features/pokemon/pokemonApiSlice"
import { selectPokemonName } from "./features/pokemon/pokemonNameSlice"

export const Loader = () => {
  const [open, setOpen] = useState(false)

  const isLoadingTypeStatus = useAppSelector(fetchTypeStatus)
  const selectedPokemon = useAppSelector(selectPokemonName)
  const isFetchingPokemon = useGetPokemonState(selectedPokemon).isFetching

  useEffect(() => {
    // console.log("[ Loader ]")
    // console.log("    isLoadingTypeStatus = ", isLoadingTypeStatus === "loading")
    // console.log("    isLoadingPokemon = ", isFetchingPokemon)
    setOpen(isLoadingTypeStatus === "loading" || isFetchingPokemon)
  }, [isLoadingTypeStatus, isFetchingPokemon])

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
