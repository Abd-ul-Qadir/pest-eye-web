import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

About2.propTypes = {
    data : PropTypes.array,
};

function About2(props) {
    const {data} = props;
    return (
        <section className="tf-section tf-about style-2">
            <div className="icon">{/* keep SVGs as decoration */}</div>
            <div className="icon-2">{/* keep SVGs as decoration */}</div>

            <div className="tf-container">
                <div className="row ">
                    <div className="col-xl-6 col-lg-5 col-md-12 ">
                        <div className="tf-heading style-2 wow fadeInUp">
                            <h2 className="heading">ABOUT PESTEYE</h2>
                            <p className="sub-heading">
                                PestEYE is an intelligent crop pest identification system using deep learning. 
                                Upload an image of a pest, get instant identification, and receive actionable recommendations 
                                to protect your crops. Stay ahead of infestations and optimize crop health.
                            </p>
                        </div>

                        <div className="counter-wrap">
                            <div className="tf-counter wow fadeInUp">
                                <h6>Pests Identified</h6>
                                <div className="content">
                                    <span className="counter-number" data-to="1250" data-speed="2000">1250</span>+
                                </div>
                            </div>  
                            <div className="tf-counter wow fadeInUp">
                                <h6>Active Users</h6>
                                <div className="content">
                                    <span className="counter-number" data-to="350" data-speed="2000">350</span>+
                                </div>
                            </div>  
                        </div>


                    </div> 
                  
                    <div className="col-xl-6 col-lg-7 col-md-12">
                        <div className="row">
                            {
                                data.map(idx => (
                                    <div key={idx.id} className="col-md-6">
                                        <div className="tf-step wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="step-title">
                                                <div className="sub-number">
                                                    0{idx.id}
                                                </div>
                                                <h3>{idx.title}</h3>
                                            </div>
                                            <p>{idx.text}</p>
                                        </div>
                                    </div>
                                ))
                            }   
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default About2;
