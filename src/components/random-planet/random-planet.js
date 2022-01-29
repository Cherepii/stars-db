import React from "react";
import PropTypes from "prop-types"

import SwapiService from "../../services/swapi-service"
import Spinner from "../spinner";
import ErrorMessage from "../error-message"

import "./random-planet.css"

export default class RandomPlanet extends React.Component {

  static defaultProps = {
    updateInterval: 6000
  }

  static propTypes = {
    updateInterval: PropTypes.number
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  }

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render(){
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);
    
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ?  <PlanetView planet={planet} /> : null;

    return (
      <div className="planet-wrapper">
        <div className="planet-card card bg-secondary">
          {errorMessage}
          {spinner}
          {content}
        </div>
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {

  const {id, name, population, rotationPeriod, diameter} = planet;
  return(
    <React.Fragment>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="planet" alt="planet" />
      <div className="card-items card text-white bg-secondary mb-3">
        <h4 className="card-title">{name}</h4>
        <div className="card-header">
          Population <span>{population}</span>
        </div>
        <div className="card-header">
          Rotation period <span>{rotationPeriod}</span>
        </div>
        <div className="card-header">
          Diameter <span>{diameter}</span>
        </div>
      </div>
    </React.Fragment>
  )
}