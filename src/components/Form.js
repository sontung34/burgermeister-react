import React from 'react'

function Form(props) {
    // document.getElementById("card-number").oninvalid = (e) => {
    //     e.target.setCustomValidity("Card number must contain 10 numbers")
    // }
  return (
    <div className='form--container'>
        <div className='form--title'>
            <h3>Enter card details</h3>
            <button className='close--button' onClick={props.closeform}>x</button>
        </div>
        <div >
            <form className='form--content' onSubmit={props.makepayment}>
                <input 
                    type="text" 
                    placeholder='Enter your name'
                    className='form--input' pattern='^[a-zA-Z\s]{2,30}$'
                    id = 'name'
                    required>
                </input>
                <input 
                    type="text" 
                    placeholder='Enter card number'
                    className='form--input'
                    pattern='^[0-9]{10}$'
                    id = 'card-number'
                    required>
                </input>
                <input 
                    type="text" 
                    placeholder='CVV'
                    className='form--input'
                    pattern='^[0-9]{4}$'
                    id = 'cvv'
                    required>
                </input>
                <button className='pay--button' >Pay</button>
                
            </form>
            
        </div>
        
      
    </div>
  )
}

export default Form
