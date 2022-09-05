import React, { useEffect, useReducer } from 'react';
import './App.css';
import axios from 'axios';
import { cartReducer } from './reducers/cartReducer.js';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
  const [state,dispatch]=useReducer(cartReducer,{
    products: [],
    cart: [],
  });
  console.log(state);
  const fetchProducts=async()=>{
   const {data}= await axios.get('https://dummyjson.com/products');
   dispatch({
    type:"ADD_PRODUCTS",
    payload:data.products,
   });
  //  console.log(data.products);
  }

  useEffect(()=>{
    fetchProducts();
  },[])
  return (
    <div style={{display:'flex'}}>
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>

    </div>
  );
}

export default App;
