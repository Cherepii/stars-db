import { SwapiServiceConsumer } from "../swapi-service-context"
import ErrorBoundry from "../error-boundry"

const withSwapiService = (mapMethodToProps) => (Wrapped) => {
  return (props) => {
    return (
      <ErrorBoundry>
        <SwapiServiceConsumer>
          {(swapiService) => {
            const serviceProps = mapMethodToProps(swapiService);

            return (
              <Wrapped {...props} {...serviceProps}/>
            )
          }}
        </SwapiServiceConsumer>
      </ErrorBoundry>
    )
  }
}

export default withSwapiService;