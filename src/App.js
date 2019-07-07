import React, { Component } from "react";
import "./App.css";
import { CarsView } from "./containers/CarsView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarsView />
      </div>
    );
  }
}

export default App;
