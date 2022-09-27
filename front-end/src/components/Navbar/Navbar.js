import React from 'react'
import "./navbar.css";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav>
        <ul>
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/user/details">Details</NavLink>
            <NavLink className="link" to="/signup">Signup</NavLink>
            <NavLink className="link" to="/login">Login</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar;