import React from "react";

const withChildrenFun = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped { ...props }>
        {fn}
      </Wrapped>
    )
  }
}

export default withChildrenFun;