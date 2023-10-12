import React from 'react'
import "./Checkoutproduct.css";
import { useDataLayerValue } from './DataLayer';






function Checkoutproduct(props) {

const [state,dispatch] = useDataLayerValue();

function RemoveFromBasket (){

    dispatch(
        {
            type : "REMOVE_FROM_BASKET",
            id : props.id,
        }
    )


}





    return (
        <div className="Checkoutproduct">

            <img className='checkoutproduct_image' src={props.image} />

            <div className='checkoutproduct_info'>
                <p className='checkoutproduct_title'>{props.title}</p>
                <p className="checkoutproduct_price">
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>
                
                <button onClick={RemoveFromBasket}>Remove from Basket</button>
                
            </div>





        </div>
    )
}

export default Checkoutproduct