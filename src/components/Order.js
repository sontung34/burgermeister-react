import React from "react";
export default function Order(props){
    return (
        <div className='order--summary'>
            <div>
                <h4>{props.orderfoodname} {props.count}(€{props.orderfoodprice})</h4>
            </div>
            <button className="removeButton" onClick={props.removeCart} id={props.id}>remove</button>
        </div>
    )
}