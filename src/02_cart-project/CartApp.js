import React, {useState} from 'react';
import './CartApp.css';
import Nav from './Nav';
import Content from './Content';

const sumCart = cart => {
  const groupedItems = cart.reduce((sum, item) => {
    sum[item.id] = sum[item.id] || {
      ...item, 
      count: 0
    };
    
    sum[item.id].count++;

    return sum; 
  }, {});

  console.log(Object.values(groupedItems));
  return Object.values(groupedItems)
};

function CartApp() {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart(prevCart => [...prevCart, item]);
  };

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

  console.log(cart);
  console.log(cart.map(item => item.price));

  function sumPrice() {
    const allItems = cart.map(item => item.price);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumAllItems =  allItems.reduce(reducer, 0);

    //Rounding Decimals in JavaScript Function
    function round(value, decimals) {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

    return round(sumAllItems, 2); 
  }

  return (
    <div className="Cart-app">
      {/* <div>{cart.length} items</div> */}
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        totalItems={cart}
      />
      <main className="content">
        <Content 
          tab={activeTab}
          onAddToCart={addToCart}
          onRemoveItem={removeItem}
          cart={sumCart(cart)}
          totalItems={cart}
          onSumPrice={sumPrice()}
        />
        {/* <p>total:{cart.map(item => (
          item.price
          ))}
        </p> */}
        {/* <p>{sumPrice()}</p> */}
      </main>
    </div>
  )
}

export default CartApp;