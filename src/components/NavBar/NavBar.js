import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './nav-bar.css'

const NavBar = () => {
    return (
        <header className="header">
            <CartWidget></CartWidget>
            <h1 className='brand'>Agencia de Viajes</h1>
            <nav className='navbar'>
                <p className='navbar-item'>Sobre Nosotros</p>
                <p className='navbar-item'>Producto</p>
                <p className='navbar-item'>Contacto</p>
            </nav>
        </header>
    )
}

export default NavBar