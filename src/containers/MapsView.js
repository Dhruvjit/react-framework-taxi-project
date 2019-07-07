import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { MapsConstants } from "../constants/MapsConstants";
import { MyTaxiPopup } from "../components/info-popups/MyTaxiPopup";
import { Car2GoPopup } from "../components/info-popups/Car2GoPopup";
import { MarkerPopup } from "../components/marker-popup/MarkerPopup";
import { MapIconCustom } from "../components/map-icons/MapIconCustom";
import { utilMaths } from "../utils/utilMaths";

export const MapsView = ({ car2go, mytaxi }) => {
  const car2goInfo = car2go.map(car => ({
    coordinates: [car.coordinates[1], car.coordinates[0]],
    info: car
  }));

  const mytaxiInfo = mytaxi.map(car => ({
    coordinates: [car.coordinate.latitude, car.coordinate.longitude],
    info: car
  }));

  let position = [0, 0];
  const cars = car2goInfo.concat(mytaxiInfo);

  if (cars.length) {
    position = utilMaths.calculateMeanCoordinates(cars);
  }

  return (
    <Map center={position} zoom={MapsConstants.Zoom}>
      <TileLayer
        attribution={MapsConstants.TileLayerAttribution}
        url={MapsConstants.Url}
      />
      <MarkerPopup
        cars={car2goInfo}
        renderComponent={Car2GoPopup}
        customIcon={MapIconCustom}
      />
      <MarkerPopup cars={mytaxiInfo} renderComponent={MyTaxiPopup} />
    </Map>
  );
};
