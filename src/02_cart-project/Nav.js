import React from 'react';
import './Nav.css';

function Nav({activeTab, onTabChange, totalItems }) {

  const itemClass = tabName =>
    `Nav-item ${
    activeTab === tabName ? 'selected' : ''
  }`;

  return (
    <nav className="Nav">
      <ul>
        <li className={itemClass("items")}>
          <button onClick={() => onTabChange("items") } >Items</button>
        </li>
        <li className={itemClass("cart")}>
          <button onClick={() => onTabChange("cart")} >Cart</button>
        </li>
        <li 
          className="Nav-item-cart"
          onClick={() => onTabChange("cart")}
        >
          <div className="cart-icon">
            <span className="material-icons">
              shopping_cart
            </span>
            {(totalItems.length > 0) &&
              <div className="cart-total">
                {totalItems.length}
              </div>
            }
          </div>
          <p className="cart-text-icon">Your cart</p>
        </li>
      </ul>
    </nav>
  )
};

export default Nav; 