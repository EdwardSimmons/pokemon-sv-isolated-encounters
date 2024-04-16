import { CRS } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"
import MapController from "./features/map/MapController"
import MapLegend from "./features/map/MapLegend"
import { useEffect, useState } from "react"
import { useAppSelector } from "./app/hooks"
import { selectMapRegion } from "./features/pokemon/pokedexSlice"

export default function Map() {
  // App State
  const mapRegion = useAppSelector(selectMapRegion)

  // Local State
  const [mapUrl, setMapUrl] = useState(
    `https://www.serebii.net/pokearth/${mapRegion}/map/tile_{z}-{x}-{y}.png`
  )

  useEffect(() => {
    setMapUrl(
      `https://www.serebii.net/pokearth/${mapRegion}/map/tile_{z}-{x}-{y}.png`
    )
  }, [mapRegion])

  return (
    <MapContainer
      style={{ height: "512px", maxWidth: "512px" }}
      zoom={0}
      center={[0, 0]}
      minZoom={0}
      maxZoom={3}
      scrollWheelZoom={false}
      crs={CRS.Simple}
    >
      <TileLayer
        attribution="<a href='https://www.serebii.net'>Serebii.net</a>"
        noWrap
        url={mapUrl}
      />
      <MapController />
      <MapLegend />
    </MapContainer>
  )
}
