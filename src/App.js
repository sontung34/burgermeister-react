import './App.css';
import React from "react"
import data from './data'
import Header from "./components/Header"
import Menu from "./components/Menu"
import Order from "./components/Order"
import Form from "./components/Form"
import { nanoid } from 'nanoid'
import Endmessage from './components/Endmessage';

export default function App() {
  const [cartItem, setCartItem] = React.useState([])
  const [orderReady, setOrderReady] = React.useState(false)
  const [paymentReady, setPaymentReady] = React.useState(false)


  function addToCart(id){
    const orderedItem = data.filter(item => item.id === id)[0]
    setCartItem(prevCart => [...prevCart,{...orderedItem, id:nanoid()}])
    setOrderReady(false)
    setPaymentReady(false)
  }

 
  function removeCart(id){
    setCartItem(prevCart => prevCart.filter(item => {
      return item.id !==id
    }))
    setOrderReady(false)
  }
  let orderValue = 0
  for (let i = 0; i< cartItem.length; i++){
    orderValue += cartItem[i].price
  }
  
  function renderForm(){
    setOrderReady(true)

  }
  function closeForm(){
    setOrderReady(false)
    setPaymentReady(false)
  }
  function makePayment(e){
    e.preventDefault()
    setPaymentReady(true)
    setOrderReady(false)
    setCartItem([])
    return false
  }
  const dish = data.map(item => {
    return(
      <Menu
        key = {item.id}
        item = {item}
        addToCart = {() => addToCart(item.id)}
      />
    )
  })

  const order = cartItem.map(item => {
    return(
      <Order 
        orderfoodname = {item.name}
        orderfoodprice = {item.price}
        key = {item.id}
        id = {item.id}
        removeCart = {() => removeCart(item.id)}
      />
    )
  })
  
  return (
    <div className="App">
      <Header/>
      <div>
        {dish}
      </div>
      {(paymentReady !== true && orderValue > 0) &&
        <><div className='order--container'>
          <h3>Your order summary:</h3>
          {order}
        </div><div className="totalvalue-container">
            <h3>Total: €{orderValue}</h3>
          </div><div className='order--button--container'>
            <button className="order--button" onClick={renderForm}>Complete Order</button>
          </div></>
      
      }
      {(orderReady && orderValue> 0) &&<Form closeform={closeForm} makepayment={makePayment}/>}
      {paymentReady && <Endmessage/>}
    </div>
      
  );
}

