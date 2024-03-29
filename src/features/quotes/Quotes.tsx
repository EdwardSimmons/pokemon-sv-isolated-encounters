import { useState } from "react"
import { useGetQuotesQuery } from "./quotesApiSlice"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"

const options = [5, 10, 20, 30]

export const Quotes = () => {
  const [numberOfQuotes, setNumberOfQuotes] = useState(10)
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } =
    useGetQuotesQuery(numberOfQuotes)

  if (isError) {
    return <Typography variant="h5">There was an error!!!</Typography>
  }

  if (isLoading) {
    return <Typography variant="h5">Loading...</Typography>
  }

  if (isSuccess) {
    return (
      <>
        <Typography variant="h5">
          Select the Quantity of Quotes to Fetch:
        </Typography>

        <FormControl
          fullWidth
          sx={{
            my: 4,
          }}
        >
          <InputLabel id="demo-simple-select-label">
            Number of Quotes
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={numberOfQuotes}
            label="Number of quotes"
            onChange={e => {
              setNumberOfQuotes(Number(e.target.value))
            }}
          >
            {options.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {data.quotes.map(({ author, quote, id }) => (
          <Box key={id} mb={2}>
            <Typography variant="h6">{quote}</Typography>
            <Typography variant="subtitle1">{author}</Typography>
          </Box>
        ))}
      </>
    )
  }

  return null
}
