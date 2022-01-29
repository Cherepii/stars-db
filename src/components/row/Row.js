import "./Row.css"
import PropTypes from "prop-types"

const Row = ({left, right}) => {
  return (
    <div className="details-wrapper">
      {left}
      {right}
    </div>
  )
}

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
}

export default Row;