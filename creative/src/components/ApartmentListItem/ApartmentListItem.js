import React, { useState } from 'react';
import './ApartmentListItem.css'


const ApartmentListItem = ({ apartment }) => {
  const { attributes, relationships } = apartment;
  return (
      <div className="apartment-item">
        <div className="apartment-item__discription">
          <div className="attributes">
            <span>{attributes.title}</span>
            <span>Количество комнат: {attributes.rooms}</span>
            <span>Город: {attributes.address.city}</span>
          </div>
          <div className="relationships">
            <div>Владелец:</div>
            <span>{relationships.attributes.first_name}</span>
            <span>{relationships.attributes.middle_name}</span>
            <span>{relationships.attributes.last_name}</span>
          </div>
        </div>
        <Favorites/>
      </div>
  )
}

const Favorites = () => {
  const [ heart, setFillHeart ] = useState('#f5f5f5')

  const handleChangeColor = () => {
    setFillHeart(heart === '#f5f5f5' ? 'red' : '#f5f5f5')
  }
  return (
    
    <div className="favorites" >
      <img src="../../../img/heart.svg" onClick={handleChangeColor} style={{ backgroundColor: heart}}></img>
    </div>
  )
}

export default ApartmentListItem;