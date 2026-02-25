import React from 'react';

function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <a href="#inicio" className="nav-logo">Campus Lost & Found</a>
                    <ul className="nav-links">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#buscar">Buscar</a></li>
                        <li><a href="#objetos">Objetos</a></li>
                        <li><a href="#reportar">Reportar</a></li>
                    </ul>
                </div>
            </nav>

            <header id="inicio" className="hero-section">
                <div className="hero-content">
                    <h1>Centro de Pérdidas Universitarias</h1>
                    <p>Encuentra o reporta objetos perdidos dentro del campus</p>
                    <a href="#buscar" className="hero-btn">Empezar a buscar</a>
                </div>
            </header>
        </>
    );
}

export default Header;
