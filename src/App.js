import './App.css';
import React, { useEffect } from "react";
import Header from "./Header.js"
import Home from "./Home.js"
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login"
import{auth} from "./firebase.js";
import {onAuthStateChanged} from "firebase/auth";
import { useDataLayerValue } from './DataLayer';
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const Pukey = "pk_test_51Ml5VDSAhE7NHgBnuJllLyHu60mPLKLo32eXB3ovvoody88Z6qgVbvfkwmSpTHf6YPpHQK03SyNOIiQZpGQkZSIX00lqpN9YVW" ;

const stripePromise = loadStripe(Pukey);


function App() {
  const [state,dispatch] = useDataLayerValue();

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      
      console.log("the user is ->>>>",user);
      
      if (user) {
        dispatch({
          type : "SET_USER",
          user : user,
        })
       
      } else {
        dispatch({
          type : "SET_USER",
          user : null,
        })
       
    }
  }
  );
    



  },[])






  return (
    <BrowserRouter>
    <div className="app">
    <Routes>
    <Route path="/payment" element={<div><Header/> <Elements stripe = {stripePromise}><Payment/></Elements></div>}/>
    <Route path= "/login" element={<Login/>}> </Route>
    <Route path="/checkout" element={<div><Header/> <Checkout/> </div>}></Route>
    <Route path="/" element={<div><Header/><Home/></div>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
