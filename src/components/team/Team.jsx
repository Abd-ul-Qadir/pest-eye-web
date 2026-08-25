import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

Team.propTypes = {
    data: PropTypes.array,
};

function Team(props) {
    const { data } = props;

    if (!data || data.length === 0) return null;

    const member = data[0]; // Only Abdul Qadir

    return (
        <section className="tf-section team">
            <div className="tf-container">
                <div className="row justify-content-center">   
                    <div className="col-md-12">
                        <div className="tf-heading mb60 wow fadeInUp">
                            <h2 className="heading">OUR TEAM</h2>
                        </div>
                    </div> 

                    <div className="col-md-6 wow fadeInUp">
                        <div className="tf-team text-center">
                            <div className="image">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <h4 className="name"><Link to="/our-team">{member.name}</Link></h4>
                            <p className="position">{member.position}</p>
                            <ul className="social">
                                {member.social.map((socialItem) => (
                                    <li key={socialItem.id}>
                                        <a href={socialItem.link} target="_blank" rel="noreferrer"><i className={socialItem.icon}></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
