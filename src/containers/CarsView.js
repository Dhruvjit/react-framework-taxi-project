import React, { Component } from "react";
import { RoutesConstants } from "../constants/RoutesConstants";
import { MapsView } from "./MapsView";
import { utilServer } from "../utils/utilServer";

export class CarsView extends Component {
  state = {
    cars: {
      car2go: [],
      mytaxi: []
    }
  };

  componentDidMount() {
    utilServer
      .getApi(RoutesConstants.MyTaxi)
      .then(data =>
        this.setState({ cars: { ...this.state.cars, mytaxi: data.poiList } })
      );

    utilServer
      .getApi(RoutesConstants.Car2Go)
      .then(data =>
        this.setState({ cars: { ...this.state.cars, car2go: data.placemarks } })
      );
  }

  render() {
    const {
      cars: { car2go, mytaxi }
    } = this.state;

    return <MapsView car2go={car2go} mytaxi={mytaxi} />;
  }
}
