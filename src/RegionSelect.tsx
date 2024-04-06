import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import Str from "./utilities/Str"
import { MapRegion } from "./Map"

export interface RegionSelectProps {
  region: MapRegion
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export default function RegionSelect(props: RegionSelectProps) {
  return (
    <FormControl fullWidth>
      <FormLabel id="region-select">Select a Region</FormLabel>
      <RadioGroup
        row
        aria-labelledby="region-select"
        name="region-select-radio-buttons-group"
        value={props.region}
        onChange={props.onChange}
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
