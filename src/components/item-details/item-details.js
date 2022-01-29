import React from "react";
import ErrorButton from "../error-button";
import ErrorMessage from "../error-message";
import Spinner from "../spinner";
import "./item-details.css"


const Record = ({item, label, field}) => {
  return (
    <div 
      className="card-header">
      <span style={{fontWeight: '700'}}>{label} </span>
      <span>{item[field]}</span> 
    </div>
  )
}

export {
  Record
};

export default class ItemDetails extends React.Component {

  state = {
    item: null,
    loading: true,
    error: false,
    image: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if( this.props.itemId !== prevProps.itemId){
      this.updateItem();
    }
  }

  updateItem() {
    this.setState({
      loading: true,
      error: false,
      item: null
    })

    const {itemId, getData, getImageUrl} = this.props;
    if(!itemId){
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false,
          error: false
        });
      })
      .catch(this.setState({
        loading: false,
        error: true
      }))
  } 

  render () {

    const { item, image, error, loading } = this.state;

    if(loading){
      return <Spinner />
    }
    if(error){
      return <ErrorMessage />
    }

    const { name } = item;

    return (
      <div className="item-wrapper">
        <div className="item-card card bg-secondary">
          <img src={image} alt="item" className="item_img"/>

          <div className="card-items card text-white bg-secondary">
            <h4 className="card-title item_title">{name}</h4>
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
            <ErrorButton />
          </div>
        </div>
      </div>
    )
  }
}