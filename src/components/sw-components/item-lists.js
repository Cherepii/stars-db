import ItemList from "../item-list";
import { withData, 
         withSwapiService, 
         withChildrenFun,
         compose } from "../hoc-helper";

const RenderName = (
  ({name}) => <span>{name}</span>
)

const RenderModelAndName = (
  ({name, model}) => <span>{name} ({model})</span>
)

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = compose(
                      withSwapiService(mapPersonMethodToProps),
                      withData,
                      withChildrenFun(RenderName)
                    )(ItemList);

const PlanetList = compose(
                      withSwapiService(mapPlanetMethodToProps),
                      withData,
                      withChildrenFun(RenderName)
                    )(ItemList);
const StarshipList = compose(
                      withSwapiService(mapStarshipMethodToProps),
                      withData,
                      withChildrenFun(RenderModelAndName)
                    )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
}