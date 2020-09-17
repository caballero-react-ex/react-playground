import React from 'react';
import PropTypes from 'prop-types'; 
import './Item.css';

function Item({ item, children }) {
  return(
    <div className="Item">
      <div className="left">
        <div className="Item-img">
          <img src={item.image} alt={item.name}></img>
        </div>
        <div className="Item-content">
          <div className="Item-title">
            {item.name}
          </div>
          <div className="Item-desc">
            {item.description}
          </div>
        </div>
      </div>

      <div className="right">
        <div className="Item-price">
          {item.price}€
        </div>
        {children}
      </div>
    </div>
  )
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Item;