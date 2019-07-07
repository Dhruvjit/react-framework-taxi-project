import React from "react";

export const MyTaxiPopup = ({ info }) => {
  const { state, type } = info;

  return (
    <div>
      <div>
        <b>State:</b> {state}
      </div>
      <div>
        <b>Type:</b> {type}
      </div>
    </div>
  );
};
