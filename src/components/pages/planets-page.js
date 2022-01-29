import { Component } from "react"

import Row from "../row";
import { PlanetList, PlanetDetails } from "../sw-components"


export default class PlanetsPage extends Component {

  state = {
    selectedPlanet: 1
  }

  onItemSelected = (selectedPlanet) => {
    this.setState({
      selectedPlanet
    })
  }

  render() {
    const { selectedPlanet } = this.state;

    return (
      <Row
        left={
          <PlanetList 
            onItemSelected={this.onItemSelected}
          />
        }
        right={
          <PlanetDetails itemId={selectedPlanet} />
        }
      />
    )
  }
}