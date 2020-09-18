import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

function CartProvider(props) {

  // Cart State
  const [cart, setCart] = useState([]);

  // Functions
  function addToCart(item) {
    setCart(prevCart => [...prevCart, item]);
  };

  const sumSameItems = cart => {
    const groupedItems = cart.reduce((sum, item) => {
      sum[item.id] = sum[item.id] || {
        ...item, 
        count: 0
      };
      
      sum[item.id].count++;
  
      return sum; 
    }, {});
  
    return Object.values(groupedItems)
  };

  // Belongs to Cart State
  function removeItem(item) {
    let index = cart.findIndex(index => index.id === item.id );
    if (index >= 0) {
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy
      });
    }; 
  };
  
  function sumPrice() {
    const allPrices = cart.map(item => item.price);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumAllPrices =  allPrices.reduce(reducer, 0);
    //Rounding Decimals in JavaScript Function
    function round(value, decimals) {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
    return round(sumAllPrices, 2); 
  }

  const cartData = { cart, addToCart, removeItem, sumPrice, sumSameItems };
  return <CartContext.Provider value={cartData} {...props} />;
}

function useCartContext() {
  return useContext(CartContext);
}

export { CartProvider, useCartContext };