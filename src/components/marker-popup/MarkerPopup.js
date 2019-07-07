import React from "react";
import { Marker, Popup } from "react-leaflet";

export const MarkerPopup = ({
  renderComponent: CustomComponent,
  cars,
  customIcon
}) => {
  return cars.map((car, index) => {
    const { coordinates, info } = car;

    let markerProps = {
      key: index,
      position: coordinates
    };

    if (customIcon) {
      markerProps = { ...markerProps, icon: customIcon };
    }

    return (
      <Marker {...markerProps}>
        <Popup>
          <CustomComponent info={info} />
        </Popup>
      </Marker>
    );
  });
};
