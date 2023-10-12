import React from 'react'
import "./Product.css";
import { useDataLayerValue } from './DataLayer';


function Product(props) {

  const [state,dispatch] = useDataLayerValue();
function Add_To_Basket()
{
  dispatch({
    type : "ADD_TO_BASKET",
    item : {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
    },
  }
  )
}





  return (
    <div className="product">
    <div className="product_info">
    <p> {props.title}</p>
    <p className="product_price">
        <small>₹</small>
        <strong>{props.price}</strong>
    </p>
    <div className='product_rating'>
    <div className='product_rating'>
    {Array(props.rating).fill().map((_,index)=>{
        return(
            <p>⭐️</p>
        );
    })

    }
    </div>
    </div>

    </div>
    <img src={props.image} alt="product-img"></img>
    <button onClick={Add_To_Basket}>Add to Cart</button>

    </div>
  )
}

export default Product