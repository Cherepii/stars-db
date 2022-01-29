import React from "react";
import { StarshipList } from "../sw-components"
import { StarshipDetails } from "../sw-components";
import Row from "../row";

const StarshipsPage = () => {
  const [id, setId] = React.useState(2);

  return (
    <Row 
      left={
        <StarshipList onItemSelected={(id) => setId(id)}/>
      }
      right={
        <StarshipDetails itemId={id}/>
      }
    />
    
  )
}

export default StarshipsPage;


