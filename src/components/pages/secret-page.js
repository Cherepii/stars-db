import { useNavigate } from "react-router-dom"
import "./common-styles.css"

const SecretPage = ({onLoggedIn}) => {
  const navigate = useNavigate();

  if(onLoggedIn){
    return (
      <div className="login-text">At now, you`re can see this page, because you have logged</div>
    )
  }
  return (
    <>
      <h1 className="login-text">Please, Login for learn this page...</h1>
      <button 
        className="toggle-button"
        onClick={() => navigate("/login")}>
        Login
      </button>
    </>
  )
}

export default SecretPage;