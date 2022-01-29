import React from "react";
import Row from "../row";
import { PersonList, PersonDetails } from "../sw-components"

const PeoplePage = () => {
  const [id, setId] = React.useState(1);

  return (
    
      <Row
        left={
          <PersonList 
            onItemSelected={(id) => setId(id)}
          />
        }
        right={
          <PersonDetails itemId={id} />
        }
      />
    
  )
}

export default PeoplePage;