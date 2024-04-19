import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import { useState } from "react"
import { useAppDispatch } from "./app/hooks"
import { setGameVersion } from "./features/pokemon/pokedexSlice"
import { clearMapMarker } from "./features/map/mapSlice"

export enum GameVersion {
  SCARLET = "Scarlet",
  VIOLET = "Violet",
}

export default function VersionSelect() {
  const [gameVersion, setLocalGameVersion] = useState<GameVersion>(
    GameVersion.SCARLET
  )

  const dispatch = useAppDispatch()

  const handleGameVersionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newVersion = (event.target as HTMLInputElement).value as GameVersion
    setLocalGameVersion(newVersion)

    dispatch(setGameVersion(newVersion))
    dispatch(clearMapMarker())
  }

  return (
    <FormControl fullWidth>
      <FormLabel id="version-select">Select a Game Version</FormLabel>
      <RadioGroup
        row
        aria-labelledby="version-select"
        name="version-select-radio-buttons-group"
        value={gameVersion}
        onChange={handleGameVersionChange}
      >
        <FormControlLabel
          value={GameVersion.SCARLET}
          control={<Radio />}
          label={GameVersion.SCARLET}
        />
        <FormControlLabel
          value={GameVersion.VIOLET}
          control={<Radio />}
          label={GameVersion.VIOLET}
        />
      </RadioGroup>
    </FormControl>
  )
}
