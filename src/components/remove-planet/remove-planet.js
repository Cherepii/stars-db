import "./remove-planet.css"

const RemovePlanet = ({ propClick, butText }) => {
  return(
    <button 
      type="button" 
      className="toggle-button"
      onClick={propClick}>
      {butText}
    </button>
  )
}

export default RemovePlanet;