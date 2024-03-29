import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import Checkoutproduct from "./Checkoutproduct";
import { useDataLayerValue } from './DataLayer';


function Checkout() {
  const [ state,dispatch ]  = useDataLayerValue()
  
  return (
    <div className="checkout">
    <div className="checkout_left">
    <img className = "checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""></img>
    <div>
    <h3>Hello {state?.user.email}</h3>    
    <h2 className="checkout_title"> Your shopping basket</h2>

   { state.basket.map((item) => {
      return (<Checkoutproduct 
        id = {item.id} 
        title = {item.title}
        image = {item.image}
        price = {item.price}
        rating = {item.rating} /> );
    })
   }
    

    </div>
    </div>


    <div className="checkout_right">
    <Subtotal/>

    </div>

    </div>
  )
}

export default Checkout

