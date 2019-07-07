import React from "react";

export const Car2GoPopup = ({ info }) => {
  const { address, engineType, fuel, exterior, interior, name, vin } = info;

  return (
    <div>
      <div>
        <b>Address:</b> {address}
      </div>
      <div>
        <b>EngineType:</b> {engineType}
      </div>
      <div>
        <b>Fuel:</b> {fuel}
      </div>
      <div>
        <b>Exterior:</b> {exterior}
      </div>
      <div>
        <b>Interior:</b> {interior}
      </div>
      <div>
        <b>Name:</b> {name}
      </div>
      <div>
        <b>Vin:</b> {vin}
      </div>
    </div>
  );
};
