import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './nav-bar.css'

const NavBar = () => {
    return (
        <header className="header">
            <div className='logo'>
                <CartWidget></CartWidget>
                <h1 className='brand'>Travel Agency</h1>
            </div>
            <nav className='navbar'>
                <p className='navbar-item'>About Us</p>
                <p className='navbar-item'>Products</p>
                <p className='navbar-item'>Contact</p>
            </nav>
        </header>
    )
}

export default NavBar