import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Team2 from '../components/team/Team2';
import Footer from '../components/footer';
import dataTeam from '../assets/fake-data/data-team';

import img from '../assets/images/team/team-details.JPG';
import icon1 from '../assets/images/svg/email-2.svg';

function OurTeam(props) {
    return (
        <div className='team-page'>

            <PageTitle title='OUR TEAM' />

            <section className="tf-section tf-team-detail">
                <div className="tf-container">
                    <div className="row g-4 align-items-center">   
                        <div className="col-lg-6 col-md-12">
                            <div className="swiper-container team-details" style={{ maxWidth: '480px', margin: '0 auto' }}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="slider-item" style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                            <img 
                                                src={img} 
                                                alt="Abdul Qadir - PestEYE Founder" 
                                                style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'cover' }}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="content-detail">
                                <p className="position" style={{ color: '#21e786', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Founder & Lead Researcher</p>
                                <h2 className="name">Abdul Qadir</h2>
                                <h3 className="title">About</h3>
                                <p className="description" style={{ lineHeight: '1.7', color: '#cbd5e1' }}>
                                    Abdul Qadir is the founder of <strong>PestEYE</strong>, an intelligent crop pest identification system developed with React, FastAPI, and PyTorch deep learning vision models. He has dedicated his research to empowering farmers and agronomists with instantaneous pest detection to safeguard harvest yields and minimize crop damage.
                                </p>
                                <h3 className="title mb14">Direct Contact</h3>
                                <div className="contact-infor">
                                    <div className="contact-infor-box">
                                        <span className="icon">
                                            <img src={icon1} alt="Email Icon" />
                                        </span>
                                        <a href="mailto:abdulqadir12511@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                                            abdulqadir12511@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <ul className="social-item d-flex gap-3 list-unstyled mt-4">
                                    <li>
                                        <a href="https://www.linkedin.com/in/abd-ul-qadir" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: '#21e786', fontSize: '20px' }}>
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Abd-ul-Qadir" target="_blank" rel="noreferrer" title="GitHub" style={{ color: '#21e786', fontSize: '20px' }}>
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/abdu1.qadir" target="_blank" rel="noreferrer" title="Instagram" style={{ color: '#21e786', fontSize: '20px' }}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:abdulqadir12511@gmail.com" title="Email" style={{ color: '#21e786', fontSize: '20px' }}>
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team2 data={dataTeam} /> 

            {/* Footer */}
            <Footer />
            
        </div>
    );
}

export default OurTeam;
