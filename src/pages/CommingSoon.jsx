import React from 'react';
import { Link } from 'react-router-dom';

import img from '../assets/images/background/bg-comming-soon.jpg'
import logo from '../assets/images/logo/logo_dark.png'

function CommingSoon(props) {
    return (
            <section className="comming-soon ">
                <img src={img} alt="Pest Eye" className="bg-comming-soon" />
                <div className="comming-soon-inner">
                    <div className="logo">
                        <Link to="/" ><img src={logo} alt="Pest Eye" id="logo_header" /></Link>
                    </div>
                    <h2 className="title">COMMING SOON</h2>
                    <div className="countdown">
                        <span className="js-countdown" data-timer="1655555" data-labels=" DAYS,  HOURS  , MINUTES  , SECONDS "></span>
                    </div>

                    <form action="#" id="subscribe-form">
                        <input type="email" placeholder="Enter your email" required="" id="subscribe-email" />
                        <button className="tf-button" type="submit" id="subscribe-button">SIGN UP</button>
                    </form>

                    <div className="group-btn">
                        <Link to="/contact" className="tf-button discord"><i className="fa fa-envelope"></i><span>CONTACT</span></Link>
                        <Link to="/" className="tf-button">AI SCANNER</Link>
                    </div>

                    <ul className="social-item">
                        <li><a href="https://www.linkedin.com/in/abd-ul-qadir" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/Abd-ul-Qadir" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/abdu1.qadir" target="_blank" rel="noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="mailto:abdulqadir12511@gmail.com" title="Email"><i className="fas fa-envelope"></i></a></li>
                    </ul>
                </div>
        </section>
    );
}

export default CommingSoon;