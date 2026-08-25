import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import menus from '../../pages/menu';

import './styles.scss';
import logo from '../../assets/images/logo/logo.png';
import logodark from '../../assets/images/logo/logo_dark.png';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Auto-close mobile menu on route change
    useEffect(() => {
        setMenuActive(false);
    }, [location.pathname]);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };

    const handleAiAnalyzeClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">                              
                        <div id="site-header-inner">                                 
                            
                            {/* Logo */}
                            <div id="site-logo" className="clearfix">
                                <div id="site-logo-inner">
                                    <Link to="/" rel="home" className="main-logo">
                                        <img id="logo_header" className='logo-dark' src={logodark} alt="Pest Eye" />
                                        <img id="logo_header" className='logo-light' src={logo} alt="Pest Eye" />
                                    </Link>
                                </div>
                            </div>
                            
                            {/* Navigation Links */}
                            <div className="header-center">
                                <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                                    <ul id="menu-primary-menu" className="menu">
                                        {menus.map((data, idx) => (
                                            <li 
                                                key={idx} 
                                                className={`menu-item ${location.pathname === data.links ? 'active' : ''}`}
                                            >
                                                <NavLink 
                                                    to={data.links}
                                                    onClick={() => setMenuActive(false)}
                                                >
                                                    {data.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            {/* Right Actions */}
                            <div className="header-right">
                                <Link to="/" className="tf-button connect" onClick={handleAiAnalyzeClick}>
                                    <i className="fa fa-microscope"></i>
                                    <span>AI Analyze</span>
                                </Link>

                                <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}>
                                    <span></span>
                                </div>
                            </div>  

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;