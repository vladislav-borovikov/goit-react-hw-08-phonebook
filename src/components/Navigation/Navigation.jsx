import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Navigation.module.css"

 const Navigation = () => {
     return(
         <nav className={styled.navigationBar}>
                <NavLink exact to="/" className={styled.link} activeClassName={styled.activLink}> Home </NavLink>
                <NavLink exact to="/register" className={styled.link} activeClassName={styled.activLink}> Register </NavLink>
                <NavLink exact to="/login" className={styled.link} activeClassName={styled.activLink}> Log in </NavLink>
                <NavLink exact to="/contacts" className={styled.link} activeClassName={styled.activLink}> Contacts </NavLink>

            </nav>
     )


}

export default Navigation;