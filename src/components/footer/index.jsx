import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import Button03 from '../button/Button03';

import logo from '../../assets/images/logo/logo_dark.png';

function Footer(props) {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer className="footer">
            {/* Top Action Box */}
            <div className="action-box">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="action-box-inner">
                                <h2 className="title">IDENTIFY CROP PESTS WITH AI</h2>
                                <p className="content">Upload a pest image and get instant identification and recommendations.</p>

                                <div className="group-btn">
                                    <Button03 title="AI SCANNER" path="/" />
                                    <Button title="VIEW HISTORY" path="/collection" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Inner */}
            <div className="footer-inner">
                <div className="tf-container">
                    <div className="row justify-content-between align-items-start">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <div className="widget widget-infor">
                                <div className="logo mb-3">
                                    <img id="logo_footer" src={logo} alt="Pest Eye" style={{ height: '42px', width: 'auto' }} />
                                </div>
                                <p className="content" style={{ maxWidth: '460px', color: '#cbd5e1', lineHeight: '1.7', fontSize: '15px' }}>
                                    PestEYE helps farmers, agronomists, and researchers identify crop pests using AI-powered deep learning vision models.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="widget widget-menu">
                                <h6 className="widget-title">NAVIGATION</h6>
                                <ul className="footer-nav-list">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/collection">Pest Records</Link></li>
                                    <li><Link to="/roadmap-v2">How It Works</Link></li>
                                    <li><Link to="/our-team">Our Team</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright and Social Links */}
            <div className="bottom-inner">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bottom">
                                <p className="copy-right mb-0">PESTEYE © 2026 – All rights reserved</p>

                                <ul className="social-item">
                                    <li>
                                        <a href="https://www.linkedin.com/in/abd-ul-qadir" target="_blank" rel="noreferrer" title="LinkedIn">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Abd-ul-Qadir" target="_blank" rel="noreferrer" title="GitHub">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/abdu1.qadir" target="_blank" rel="noreferrer" title="Instagram">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:abdulqadir12511@gmail.com" title="Email">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Move to Top Button */}
            {isVisible && (
                <Link onClick={scrollToTop} to="#" id="scroll-top" title="Back to top"></Link>
            )}
        </footer>
    );
}

export default Footer;