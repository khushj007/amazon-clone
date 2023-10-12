import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link} from 'react-router-dom';
import {useDataLayerValue} from "./DataLayer";
import {auth} from "./firebase";
import {signOut} from "firebase/auth";

export default function Header() {

    const [state,dispatch] = useDataLayerValue();

    function handelUser()
    {
        if(state.user)
        {
            signOut(auth).then(() => {
                console.log("SuccessFull");
              }).catch((error) => {
                console.log(error);
              });
              
        }

    }



    return (
        <div className="header">
    
       <Link to="/"><img className="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo-img"></img></Link>
    

            <div className="searchbar">
                <input className="searchbar-input" type="text" placeholder='Search'></input>
                <SearchIcon className="searchbarIcon"/>

            </div>

            <div className="navHeader">

                <Link to = {state.user?"/":"/login"}>
                <div onClick={handelUser} className="header_option">
                    <span className="header_opuionl1">
                        Hello { state.user?state.user.email:"Guest" }
                    </span>
                    <span className="header_opuionl2">
                        {state.user?"Sign Out":"Sign In"}
                    </span>

                </div>
                </Link>



                <div className="header_option">

                    <span className="header_opuionl1">
                        Returns
                    </span>
                    <span className="header_opuionl2">
                        & Orders
                    </span>

                </div>

                <div className="header_option">

                    <span className="header_opuionl1">
                        Your
                    </span>
                    <span className="header_opuionl2">
                        Prime
                    </span>

                </div>

                <Link to="/checkout">
                <div className="cart">
                <ShoppingCartIcon style={{height : '30px'}}/>
                <span className="header_opuionl2 scartCount">{state.basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
