import React from "react";
import PropTypes from "prop-types"
import "./item-list.css"

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const clazz = 'd-flex justify-content-between align-items-center bg-secondary';
    const label = renderLabel(item);
    const { id } = item;

    if (id > 5 && id < 10 ){
      return null
    }
    else {
      return (
        <li className={clazz} key={id}>
          <a
            className={'list-group-item'}
            onClick={() => onItemSelected(id)}>
              {label}
          </a>
        </li>
          
      )
    }
  });

  return (
    <div className="list-wrapper">
      <ul className="list-group">
        {items}
      </ul>
    </div>
  )
};

ItemList.defaultProps = {
  onItemSelected: () => {}
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList;
