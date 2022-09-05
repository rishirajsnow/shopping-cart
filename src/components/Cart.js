import React, { useEffect } from 'react'
import {useState} from 'react';


const Cart = ({state,dispatch}) => {
  const {cart}=state;
  const [total,setTotal]=useState(0);
//calculate total,on change of cart content.
  useEffect(()=>{
setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
  },[cart])
 //change quantity function
  const changeQty=(id,qty)=>{
    dispatch({
      type:"CHANGE_CART_QTY",
      payload:{
        id:id,
        qty:qty,
      }
    })
  }
  return (
    
    <div style={{display:'flex', flexDirection:'column', margin:10, backgroundColor:'#ececec', padding:10, width:'20%'}}>
      <b style={{fontSize:30,alignSelf:"center"}}>Cart</b>
      <b style={{alignSelf:"center"}}>Sub Total ${total}</b>
      {cart.length>0?(cart.map((prod)=>
      (<div
      key={prod.title}
      style={{
        display:"flex",
        padding:10,
        border:"1px solid grey",
        margin:5,
        justifyContent:"space-between",


      }}> <div style={{display:'flex',gap:10}}>
      <img src={prod.thumbnail} alt={prod.title} style={{width:70, objectFit:'cover'}}/>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
          <span>{prod.title}</span>
          <b>$ {prod.price}</b>
      </div>
     </div>
     <div style={{dispaly:"flex",alignItem:"center",gap:10}}>
      <button onClick={()=>changeQty(prod.id,prod.qty-1)}>-</button>
      <span>{prod.qty}</span>
      <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
     </div>
     </div>))):(<div>cart is empty</div>)}
     <button>Checkout</button>
      </div>
  )
}

export default Cart