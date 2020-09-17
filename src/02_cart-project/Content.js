import React from 'react';
import {items} from './static-data';
import ItemPage from './ItemPage';
import CartPage from './CartPage';

function Content({ tab, onAddToCart, onRemoveItem, cart, onSumPrice, totalItems }) {
  switch(tab) {
    default: 
    case 'items': 
      return (
        <ItemPage 
          items={items}
          onAddToCart={onAddToCart}
        />
      )
    case 'cart': 
      return (
        <CartPage 
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
          onSumPrice={onSumPrice}
          totalItems={totalItems}
        />
      )
  };

  // return(
  //   <div>I am content</div>
  // )
}

export default Content