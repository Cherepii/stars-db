import RemovePlanet from "../remove-planet"
import "./common-styles.css"

const LoginPage = ({onLoggedIn, onLogin}) => {
  return (
    <div className="jumbotron">
      <p className="login-text">Login to see secret page</p>
      <RemovePlanet
        className="toggle-button"
        propClick={onLogin} 
        butText="Login"/>
    </div>
  )
}

export default LoginPage;