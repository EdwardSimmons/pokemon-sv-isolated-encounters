import { Avatar, Box, Button } from "@mui/material"

export default function Kofi() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Button
        variant="contained"
        size="small"
        startIcon={<Avatar src="./kofi_logo.webp" />}
        sx={{ textTransform: "none", backgroundColor: "#29abe0" }}
        href="https://ko-fi.com/ed112"
        target="_blank"
      >
        Support me on Ko-fi
      </Button>
    </Box>
  )
}
