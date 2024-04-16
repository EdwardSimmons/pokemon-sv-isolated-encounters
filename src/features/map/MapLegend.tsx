import { ExpandLess, ExpandMore } from "@mui/icons-material"
import {
  Avatar,
  Collapse,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import { useState } from "react"

export default function MapLegend() {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control leaflet-bar">
        <List
          sx={{
            width: "100%",
            maxWidth: 264,
            bgcolor: "background.paper",
          }}
          component="div"
          disablePadding
        >
          <ListItemButton onClick={handleClick} sx={{ px: 1 }}>
            <ListItemText
              primary="Legend"
              sx={{ mr: !open ? 1 : 0, display: !open ? "none" : "block" }}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    variant="square"
                    src="./pokeball.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Spawn Location" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    variant="square"
                    src="./pokeball_highlight.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Best Spawn Location" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    variant="square"
                    src="./pokeball_selected.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Selected Tile" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    variant="square"
                    src="./scarletpokeball.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Scarlet Exclusive" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    variant="square"
                    src="./violetpokeball.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Violet Exclusive" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  )
}
