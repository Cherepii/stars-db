import "./error-message.css"

const ErrorMessage = () => {
  return (
    <div className="error-wrapper">
      <h4 className="error-title">Boom!</h4>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids for fix it)</span>
    </div>
  )
}

export default ErrorMessage;