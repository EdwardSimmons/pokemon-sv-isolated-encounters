import { Box, Link, Typography } from "@mui/material"

export default function Kudos() {
  return (
    <Box>
      <Typography sx={{ mt: { xs: 3, md: 2 } }}>
        The term "isloated encounter shiny hunting" was coined by{" "}
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=y9zO9LiFF2Y&t=804s&ab_channel=AustinJohnPlays"
        >
          AustinJohnPlays
        </Link>
        . You should definitely check out their channel.
      </Typography>
      <Typography sx={{ mt: { xs: 2, md: 1 } }}>
        This project was inspired by the one created by{" "}
        <Link
          target="_blank"
          href="https://alexis-matuk.github.io/shinyHuntingOptimizer/"
        >
          Alexis Matuk
        </Link>
        .
      </Typography>
      <Typography sx={{ mt: { xs: 2, md: 1 } }}>
        All of the necessary data was obtained from{" "}
        <Link target="_blank" href="https://www.serebii.net">
          Serebii.net
        </Link>
        .
      </Typography>
      <Typography sx={{ mt: { xs: 2, md: 1 } }}>
        I recommend using{" "}
        <Link target="_blank" href="https://birbzone.com/sandwich/">
          this tool
        </Link>{" "}
        for finding sandwich recipes.
      </Typography>
    </Box>
  )
}
