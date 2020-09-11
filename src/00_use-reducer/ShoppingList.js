import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': return [
      ...state, {
      id: state.length,
      name: action.name }
    ];
    
    case 'remove': 
      return state.filter((_,index) => index !== action.index);
    ;

    case 'clear': 
      return []
    ;

    default:
      return state;      
  }
};




function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current.value === '') {return}

    dispatch({
      type: 'add',
      name: inputRef.current.value 
    });
    
    inputRef.current.value = '';
  }

  function handleClear() {
    dispatch({
      type: 'clear',
    });
  }



  return(
    <div>
      <h4 style={{marginBottom: "5px"}}> SHOPPING LIST</h4>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li style={{marginBottom: "10px"}} key={item.id}>{item.name} <button onClick={() => dispatch({type: 'remove', index}) }>Delete</button></li>
        ))}
      </ul>
      <button onClick={handleClear}>Clear All</button>
    </div>
  )
}



export default ShoppingList; 