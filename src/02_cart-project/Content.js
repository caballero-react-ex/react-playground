import React from 'react';
import ItemPage from './ItemPage';
import CartPage from './CartPage';

function Content({ tab }) {
  switch(tab) {
    default: 
    case 'items': 
      return <ItemPage />
    case 'cart': 
      return <CartPage />
  };
}

export default Content