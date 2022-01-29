import React from "react"

import "./ErrorButton.css"

export default class ErrorButton extends React.Component {

  state = {
    renderError: false
  }

  render() {
    if(this.state.renderError){
      this.too.bar = 0;
    }

    return (
      <button
        type="button"
        className="error-but"
        onClick={() => this.setState({renderError:true})}>
        Throw Error
      </button>
    )
  }
}