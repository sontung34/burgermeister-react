import React from "react"
export default function Menu(props){

    return (
        <div className="item">
            <div>
                <img src={`${props.item.image}`} alt = "food offered at Burgermeister" className = "dish--image"/>
            </div>
                <div className='dish--content'>
                    <div>
                        <h3>{props.item.name}</h3>
                        <h4>{props.item.ingredients.join(",")}</h4>
                        <h4>{props.item.price} EUR</h4>
                    </div>
                    <button id={props.item.id} onClick={props.addToCart} className="addButton">+</button>
                </div>
        </div>
    )
}