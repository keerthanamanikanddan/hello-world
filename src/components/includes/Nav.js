import React from 'react'
import "../../App.css"
import { NavLink, Outlet } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav-container">
            <h1>Logo</h1>
            <nav className='ul-container'>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
