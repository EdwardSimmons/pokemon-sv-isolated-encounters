import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import Str from "./utilities/Str"
import { useAppDispatch } from "./app/hooks"
import { setMapRegion } from "./features/pokemon/pokedexSlice"
import { clearPokeFilterId } from "./features/pokemon/pokeFilterIdSlice"
import { useState } from "react"
import { clearMapMarker } from "./features/map/mapSlice"

export enum MapRegion {
  PALDEA = "paldea",
  KITIKAMI = "kitakami",
  TERARIUM = "terarium",
}

export default function RegionSelect() {
  const [mapRegion, setLocalMapRegion] = useState<MapRegion>(MapRegion.PALDEA)

  const dispatch = useAppDispatch()

  const handleOnChangeMap = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMapRegion = (event.target as HTMLInputElement).value as MapRegion
    // Local State
    setLocalMapRegion(newMapRegion)

    // App State
    dispatch(setMapRegion(newMapRegion))
    dispatch(clearPokeFilterId())
    dispatch(clearMapMarker())
  }
  return (
    <FormControl fullWidth>
      <FormLabel id="region-select">Select a Region</FormLabel>
      <RadioGroup
        row
        aria-labelledby="region-select"
        name="region-select-radio-buttons-group"
        value={mapRegion}
        onChange={handleOnChangeMap}
      >
        {Object.values(MapRegion).map(region => (
          <FormControlLabel
            value={region}
            control={<Radio />}
            label={new Str(region).toTitleCase()}
            key={region}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
