import React, {useState} from 'react';
import { CartProvider } from './context/CartContext';
import './CartApp.css';
import Nav from './Nav';
import Content from './Content';


function CartApp() {
  // State for the Nav and the Content Comp. , to show "items" or "cart"
  const [activeTab, setActiveTab] = useState('items');

  return (
    <CartProvider>
      <div className="Cart-app">
        <Nav
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
        <main className="content">
          <Content 
            tab={activeTab}
          />
        </main>
      </div>
    </CartProvider>
  )
}

export default CartApp;