import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import ErrorBoundry from "../error-boundry"
import ErrorMessage from '../error-message';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, 
         PlanetsPage, 
         StarshipPage,
         LoginPage,
         SecretPage } from '../pages';

import './app.css';

export default class App extends React.Component {

  state = {
    hasError: false,
    onLoggedIn: false
  }

  swapiService = new SwapiService();

  onLogin = () => {
    this.setState({
      onLoggedIn: true
    })
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    const { onLoggedIn } = this.state;

    if(this.state.hasError){
      return <ErrorMessage />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
            <div className="wrapper">
              <Header />
              <RandomPlanet />

                <Routes>
                  <Route path="/" element={<h2>Welcome to Star DB</h2>}/>
                  <Route path="/people" element={<PeoplePage />} />
                  <Route path="/planets" element={<PlanetsPage />} />
                  <Route path="/starships" element={<StarshipPage />} />
                  <Route path="/login" element={
                    <LoginPage 
                      onLogin={this.onLogin}
                      onLoggedIn={onLoggedIn}/>
                  }/>
                  <Route path="/secret" element={
                    <SecretPage onLoggedIn={onLoggedIn}/>
                  }/>

                  <Route path="*" element={<h2>Page not found</h2>} />
                </Routes>
                
            </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
