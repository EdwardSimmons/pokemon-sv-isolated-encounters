import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"

export enum GameVersion {
  SCARLET = "Scarlet",
  VIOLET = "Violet",
}

export interface VersionSelectProps {
  version: GameVersion
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export default function VersionSelect(props: VersionSelectProps) {
  return (
    <FormControl fullWidth>
      <FormLabel id="version-select">Select a Game Version</FormLabel>
      <RadioGroup
        row
        aria-labelledby="version-select"
        name="version-select-radio-buttons-group"
        value={props.version}
        onChange={props.onChange}
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
