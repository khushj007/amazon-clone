import React from 'react';
import { Link , Navigate, useNavigate } from 'react-router-dom';
import "./Login.css";
import {useState} from "react";
import {auth} from "./firebase.js";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
   const navigate = useNavigate(); 

let temp1="";
let temp2="";    

function goTo()
{
    navigate("/");
}

function Setemail(event)
{
    temp1=event.target.value;
    setEmail(temp1);
}

function Setpassword(event)
{
    temp2=event.target.value;
    setPassword(temp2)
}

function SignIn()
{
  signInWithEmailAndPassword(auth, email, password)
  .then((response) => {
    if(response)
    {
    goTo();
    }
    
  })
  .catch((error) => {
    alert("There has been some error Try Again")
  });




}

function CreateAccount()
{
    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
        if(response)
        {
        goTo();
        }
    })
    .catch((error) => {
      alert("email is already in use with another account")
    });

}



const [email ,setEmail] = useState("");
const [password ,setPassword] = useState("");



    return (
        <div className="login">

            <Link to="/">
                <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>



            <div className='login_container'>
                <h1>Sign-In</h1>

                <form onSubmit={(event)=>{event.preventDefault()}}>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={Setemail}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={Setpassword} />

                    <button type='submit' className='login_signinbutton' onClick={SignIn}>Sign In </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice The clone is made by Khushj.
                </p>

                <button className='login_registerbutton' onClick={CreateAccount}>Create your Amazon Account</button>
            </div>




        </div>
    )
}

export default Login