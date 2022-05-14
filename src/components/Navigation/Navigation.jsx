import React from "react";
import { NavLink } from "react-router-dom";

 const Navigation = () => {
     return(
        
            <nav>
            <NavLink exact to="/" > Home </NavLink>
            <NavLink exact to="/contacts" > Contacts </NavLink>   
            </nav>
     )


}

export default Navigation;