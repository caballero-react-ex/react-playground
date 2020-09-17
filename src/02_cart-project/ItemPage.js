import React from 'react';
import PropTypes from 'prop-types'; 
import './ItemPage.css';
import Item from './Item';


function ItemPage({items, onAddToCart}) {
  return (
    <ul className="item-list">
      {items.map(item => 
        <li key={item.id} className="item">
          <Item 
            item={item}
            //onAddToCart={() => onAddToCart(item)}
          >  
            <button
              className="Item-addToCart"
              onClick={() => onAddToCart(item)} 
            >
              Add to Cart
            </button>
        </Item>
        </li>
      )}
    </ul>
  )
};

ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemPage;