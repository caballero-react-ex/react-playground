import React from 'react';
import PropTypes from 'prop-types';
import './CartPage.css';
import './ItemPage.css'
import Item from './Item'; 

function CartPage({ items, onAddOne, onRemoveOne, onSumPrice, totalItems }) {
  return(
    <>
    <ul className="item-list"> 
      {items.map(item =>
        <li key={item.id} className="item"> 
          <Item 
            item={item} 
          >
            <div className="add-remove-container">
              <button 
              className="CartItem-btn"
              onClick={() => onRemoveOne(item)}
              >
                &ndash;
              </button> 
              <span className="CartItem-count">{item.count}</span> 
              <button
                className="CartItembtn"
                onClick={() => onAddOne(item)}
              >
                +
              </button>
            </div>
          </Item>
        </li>
      )}
    </ul>
    
      {(onSumPrice > 0) 
        ? 
          <p className="total-price">
            Total <span className="total-items">({totalItems.length} items)</span>: {onSumPrice}€
          </p>
        :
          <div className="empty-cart">
            <p >Your cart is empty.</p>
            <p >Click in "Items" to get some nice products.</p>
          </div>
      }
   
    </>
  )
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default CartPage;