import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PageTitle from '../components/pagetitle/PageTitle';

import Footer from '../components/footer';
import Collection03 from '../components/collection/Collection03';
import dataCollection from '../assets/fake-data/data-collection';
import { getPestInfo } from '../assets/fake-data/pestDatabase';

import defaultImg from '../assets/images/item-details.jpg';

function ItemDetails(props) {
    const [searchParams] = useSearchParams();
    const pestParam = searchParams.get('pest') || 'army worm';
    const pest = getPestInfo(pestParam);

    // Match image from collection or fallback
    const matched = dataCollection.find(
        (item) => item.title.toLowerCase().includes(pestParam.toLowerCase()) || 
                  pestParam.toLowerCase().includes(item.title.toLowerCase())
    );
    const displayImg = matched ? matched.img : defaultImg;

    return (
        <div className='page-collection'>
            <PageTitle title={`Pest: ${pest.displayName}`} />

            <section className="tf-item-detail">
                <div className="tf-container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="tf-item-detail-image">
                                <img 
                                    src={displayImg} 
                                    alt={pest.displayName} 
                                    style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', borderRadius: '14px' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="tf-item-detail-inner">
                                <h2 className="title">{pest.displayName}</h2>
                                <p className="des">
                                    {pest.description}
                                </p>
                                <div className="infor-item-wrap">
                                    <div className="infor-item-box">
                                        <div className="category">Taxonomy</div>
                                        <h4 className="name" style={{ fontSize: '15px' }}>{pest.scientificName}</h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Risk Level</div>
                                        <h4 className="name" style={{ color: pest.riskLevel === 'High' ? '#f87171' : pest.riskLevel === 'Medium' ? '#fbbf24' : '#34d399' }}>
                                            {pest.riskLevel || 'Medium'}
                                        </h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Target Crops</div>
                                        <h4 className="name" style={{ fontSize: '14px' }}>Wheat, Rice, Cotton</h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Symptoms</div>
                                        <h4 className="name" style={{ fontSize: '14px' }}>
                                            {pest.damageSymptoms && pest.damageSymptoms[0] ? pest.damageSymptoms[0] : 'Defoliation'}
                                        </h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Pesticide</div>
                                        <h4 className="name" style={{ fontSize: '14px' }}>
                                            {pest.pesticides && pest.pesticides[0] ? pest.pesticides[0].name : 'Recommended'}
                                        </h4>
                                    </div>
                                    <div className="infor-item-box">
                                        <div className="category">Season</div>
                                        <h4 className="name" style={{ fontSize: '14px' }}>Spring / Monsoon</h4>
                                    </div>
                                </div>
                                <div className="price">
                                    <span className="heading">DIAGNOSTIC ACCURACY:</span>
                                    <span>98.4% AI Match</span>
                                </div>
                                <div className="group-btn">
                                    <Link to="/" className="tf-button opensea">
                                        <i className="fa fa-camera"></i> SCAN WITH AI
                                    </Link>
                                    <div className="group-2">
                                        <Link to="/collection" className="tf-button style-2">
                                            <i className="fa fa-th-large"></i> PEST CATALOG
                                        </Link>
                                        <Link to="/contact" className="tf-button style-2 twitter">
                                            <i className="fa fa-envelope"></i> ADVISORY
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Collection03 data={dataCollection} />

            <Footer />
        </div>
    );
}

export default ItemDetails;