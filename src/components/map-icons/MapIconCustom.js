import L from "leaflet";

export const MapIconCustom = new L.Icon({
  iconUrl: require("../../assets/icons/yellow_vehicle.svg"),
  iconRetinaUrl: require("../../assets/icons/yellow_vehicle.svg"),
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
