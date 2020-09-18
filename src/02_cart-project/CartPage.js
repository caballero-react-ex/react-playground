import React from 'react';
import { useCartContext } from './context/CartContext';
import './CartPage.css';
import './ItemPage.css'
import Item from './Item'; 

function CartPage() {

  const cartContext = useCartContext();
  const { cart, addToCart, removeItem, sumPrice, sumSameItems } = cartContext;

  return(
    <>
    <ul className="item-list"> 
      {sumSameItems(cart).map(item =>
        <li key={item.id} className="item"> 
          <Item 
            item={item} 
          >
            <div className="add-remove-container">
              <button 
              className="CartItem-btn"
              onClick={() => removeItem(item)}
              >
                &ndash;
              </button> 
              <span className="CartItem-count">{item.count}</span> 
              <button
                className="CartItembtn"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
          </Item>
        </li>
      )}
    </ul>
    
      {(cart.length > 0) 
        ? 
          <p className="total-price">
            Total <span className="total-items">({cart.length} items)</span>: {sumPrice()}€
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


export default CartPage;