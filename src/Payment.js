import React, { useEffect, useState } from 'react';
import "./Payment.css";
import { useDataLayerValue } from './DataLayer';
import Checkoutproduct from './Checkoutproduct';
import { Link } from "react-router-dom";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {GetSubTotal} from "./reducer";
import { useNavigate } from 'react-router-dom';

function Payment() {
    const [state, dispatch] = useDataLayerValue();
    const navigate = useNavigate();

   
    return (
        <div className="payment">
            <div className="paymentContainer">

                <h1>
                    Checkout ( <Link to="checkout"> {state.basket.length} items</Link> )
                </h1>

                <div className="paymentSection">

                    <div className="paymentTitle">
                        <h3>delevery Address</h3>

                        <div classname="paymentAddress">
                            <p>{state?.user?.email}</p>
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>Ghaziabad , UttarPradesh</p>
                        </div>

                    </div>

                </div>

                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Review items and delivery</h3>
                        <div className="paymentItems">
                            {
                                state.basket.map((item) => {
                                    return (
                                        <Checkoutproduct
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating} />);
                                })

                            }

                        </div>

                    </div>

                </div>



                <div className="paymentSection">
                    <div className='paymentTitle'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='paymentDetails'>
                        <form>
                        

                            <div className="paymentPContainer">

                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>

                                                Subtotal {state.basket.length > 1 ? `(${state.basket.length} items)` : `(${state.basket.length} item)`} : <strong>{value}</strong>
                                            </p>
                                            <small className="subtotal_gift">
                
                                            </small>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={GetSubTotal(state.basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <Link to ="/">
                                <button >Buy Now</button>
                                </Link>
                            </div>
                            </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Payment