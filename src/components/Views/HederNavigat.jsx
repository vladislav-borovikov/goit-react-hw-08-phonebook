import React from "react";
import Navigation from "components/Navigation/Navigation";
import GreetingsUser from "components/GreetingsUser/GreetingsUser";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "redax/auth/auth-selectors";


const HederNavigat = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
     
     return(
         <>
             <Navigation />
             <GreetingsUser />
             <NavLink exact to="/login" > Log in </NavLink>
             {/* {isLoggedIn ? <GreetingsUser />: <NavLink exact to="/login" > Log in </NavLink>
             } */}
         </>
        
     ) 


}

export default HederNavigat;