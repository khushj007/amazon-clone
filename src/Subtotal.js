import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useDataLayerValue } from './DataLayer';
import {GetSubTotal} from "./reducer"
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();
  const [state , dispatch] = useDataLayerValue();
  console.log(state.basket.length);

  return (
    <div className="subtotal">
    <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
             
              Subtotal {state.basket.length>1?`(${state.basket.length} items)` : `(${state.basket.length} item)`} : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value = {GetSubTotal(state.basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

    <button onClick={()=>{ state.basket.length?navigate("/payment"):navigate("/") }}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal