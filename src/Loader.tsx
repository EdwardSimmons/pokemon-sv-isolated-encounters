import { Backdrop, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppSelector } from "./app/hooks"
import { fetchTypeStatus } from "./features/pokemon/pokemonTypeSlice"

export const Loader = () => {
  const [open, setOpen] = useState(false)

  const isLoadingTypeStatus = useAppSelector(fetchTypeStatus)

  useEffect(() => {
    setOpen(isLoadingTypeStatus === "loading")
  }, [isLoadingTypeStatus])

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
