import React from 'react';
import { useCartContext }  from './context/CartContext'; 
import './ItemPage.css';
import Item from './Item';
import {items} from './static-data';

function ItemPage() {
  const cartContext = useCartContext();
  const { addToCart } = cartContext;

  return (
    <ul className="item-list">
      {items.map(item => 
        <li key={item.id} className="item">
          <Item 
            item={item}
          >  
            <button
              className="Item-addToCart"
              onClick={() => addToCart(item)} 
            >
              Add to Cart
            </button>
        </Item>
        </li>
      )}
    </ul>
  )
};


export default ItemPage;