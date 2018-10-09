import React from 'react';
import '../css/App.css';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';


 const Header = () => (
        <header >
            <div className="topContainer">
                <div className="topLogo">
                    <img src={logo}></img>
                    {/* <span>Blue<br/>com<br/>você</span> */}
                </div>
                <div className="optionsContainer">
                    <div className="trabConosco"></div>
                    <div className="centralRepre"></div>
                </div>
            </div>
            <div className="menuContainer">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/marca">Marca</Link></li>
                        <li><Link to="/missao">Missão</Link></li>
                        <li><Link to="/ecommerce">E-Commerce</Link></li>
                        <li><Link to="/treinamento">Treinamento</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </div>
        </header>
    )

export default Header;