import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss';

import Button from '../button/Button';
import Button02 from '../button/Button02';
import { getPestInfo } from '../../assets/fake-data/pestDatabase';


Banner01.propTypes = {
    data: PropTypes.array,
};

function Banner01({ data }) {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [pestInfo, setPestInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen]);

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setPrediction(null);
            setPestInfo(null);
            setLoading(true);
            setIsModalOpen(true);

            await handleImageUpload(file);
        }
    };

    const handleImageUpload = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
            const response = await axios.post(
                `${apiUrl}/predict`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    timeout: 30000,
                }
            );

            const pestName = response.data?.prediction || 'unknown';

            // Get pest info from database
            const pestData = getPestInfo(pestName);

            if (!pestData || pestName.toLowerCase() === 'unknown') {
                alert('Pest species could not be identified with high confidence. Please try with a clearer photo.');
                setLoading(false);
                return;
            }

            setPrediction(pestData.displayName);
            setPestInfo(pestData);

        } catch (error) {
            console.error('Prediction error:', error);
            let errorMessage = 'Network error. Please check your backend connection on port 8000.';

            if (error.response) {
                errorMessage = `Server error (${error.response.status}): ${error.response.data?.detail || 'Unable to process image'}`;
            } else if (error.request) {
                errorMessage = 'No response from AI inference server. Ensure FastAPI backend is running.';
            }

            alert(`AI Analysis Failed: ${errorMessage}`);
            setIsModalOpen(false);
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <section className="tf-slider">
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            scrollbar={{ draggable: true }}
                        >
                            {data.slice(0, 3).map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="tf-slider-item">
                                        <div className="content-inner">
                                            <h1 className="heading">
                                                Identify pests instantly
                                            </h1>
                                            <p className="sub-heading">
                                                Upload an image of the crop pest to receive real-time species detection, risk assessment, and treatment advisory.
                                            </p>
                                            <div className="btn-slider">
                                                <Button
                                                    path="#"
                                                    title="UPLOAD IMAGE"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleUploadClick();
                                                    }}
                                                />
                                                <Button02 path="/collection" title="PEST CATALOG" />
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    style={{ display: 'none' }}
                                                    onChange={handleFileChange}
                                                    accept="image/*"
                                                />
                                            </div>
                                        </div>

                                        <div className="content-right">
                                            <div className="content-slide">
                                                <div className="image">
                                                    <img src={item.img} alt="Pest Banner" className="img-slider-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* =========================================================================
                Modal Overlay for Analyzed Results
               ========================================================================= */}
            {isModalOpen && (
                <div 
                    className="ai-modal-backdrop" 
                    onClick={closeModal}
                >
                    <div 
                        className="ai-modal-dialog" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="ai-modal-header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(33, 231, 134, 0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#21e786'
                                }}>
                                    <i className="fa fa-microscope" style={{ fontSize: '18px' }}></i>
                                </div>
                                <h3 style={{ margin: 0, color: '#ffffff', fontSize: '20px', fontWeight: '700' }}>
                                    Pest AI Diagnosis Report
                                </h3>
                            </div>

                            <button
                                type="button"
                                className="ai-modal-close-btn"
                                onClick={closeModal}
                                title="Close Report"
                            >
                                <i className="fa fa-times"></i>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="ai-modal-body">
                            {loading ? (
                                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                                    <div 
                                        className="spinner-border" 
                                        role="status" 
                                        style={{ width: '4rem', height: '4rem', color: '#21e786', borderWidth: '4px' }}
                                    >
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <h4 style={{ color: '#21e786', fontWeight: '700', marginTop: '24px', fontSize: '22px' }}>
                                        Analyzing specimen with AI model...
                                    </h4>
                                    <p style={{ color: '#94a3b8', fontSize: '15px' }}>
                                        Running deep learning computer vision inference across 17+ crop pest species.
                                    </p>
                                </div>
                            ) : prediction && pestInfo ? (
                                <div className="row g-4">
                                    {/* Left Column: Specimen Image & Actions */}
                                    <div className="col-lg-4 col-md-12 text-center">
                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            padding: '16px',
                                            borderRadius: '14px',
                                            border: '1px solid rgba(255, 255, 255, 0.08)'
                                        }}>
                                            <h5 style={{ color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                                                Uploaded Specimen
                                            </h5>
                                            {selectedImage && (
                                                <img 
                                                    src={selectedImage} 
                                                    alt="Uploaded pest specimen" 
                                                    style={{
                                                        width: '100%',
                                                        maxHeight: '260px',
                                                        objectFit: 'cover',
                                                        borderRadius: '10px',
                                                        border: '2px solid rgba(33, 231, 134, 0.3)'
                                                    }}
                                                />
                                            )}

                                            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                <button 
                                                    onClick={handleUploadClick}
                                                    style={{
                                                        padding: '10px 18px',
                                                        backgroundColor: 'rgba(33, 231, 134, 0.15)',
                                                        color: '#21e786',
                                                        border: '1px solid rgba(33, 231, 134, 0.35)',
                                                        borderRadius: '25px',
                                                        fontWeight: '600',
                                                        fontSize: '14px',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s ease',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: '8px'
                                                    }}
                                                >
                                                    <i className="fa fa-camera"></i> Scan Another Image
                                                </button>

                                                <Link 
                                                    to={`/item-details?pest=${encodeURIComponent(prediction)}`}
                                                    onClick={closeModal}
                                                    style={{
                                                        padding: '10px 18px',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                                        color: '#ffffff',
                                                        border: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderRadius: '25px',
                                                        fontWeight: '600',
                                                        fontSize: '14px',
                                                        textDecoration: 'none',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: '8px'
                                                    }}
                                                >
                                                    <i className="fa fa-book-open"></i> Full Dossier
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Identification & Treatment Details */}
                                    <div className="col-lg-8 col-md-12">
                                        {/* Species Header Banner */}
                                        <div style={{
                                            background: 'rgba(33, 231, 134, 0.1)',
                                            border: '1px solid rgba(33, 231, 134, 0.35)',
                                            borderRadius: '14px',
                                            padding: '18px 22px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            flexWrap: 'wrap',
                                            gap: '12px',
                                            marginBottom: '20px'
                                        }}>
                                            <div>
                                                <span style={{ color: '#94a3b8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                    Species Diagnosis
                                                </span>
                                                <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '700', margin: '4px 0 0' }}>
                                                    {prediction}
                                                </h3>
                                                {pestInfo.scientificName && (
                                                    <span style={{ color: '#21e786', fontStyle: 'italic', fontSize: '14px' }}>
                                                        {pestInfo.scientificName}
                                                    </span>
                                                )}
                                            </div>

                                            {pestInfo.riskLevel && (
                                                <span style={{
                                                    padding: '6px 16px',
                                                    borderRadius: '20px',
                                                    fontWeight: '700',
                                                    fontSize: '0.85rem',
                                                    letterSpacing: '0.04em',
                                                    textTransform: 'uppercase',
                                                    backgroundColor: pestInfo.riskLevel === 'High' ? 'rgba(239, 68, 68, 0.2)' : 
                                                                    pestInfo.riskLevel === 'Medium' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(33, 231, 134, 0.2)',
                                                    color: pestInfo.riskLevel === 'High' ? '#f87171' : 
                                                            pestInfo.riskLevel === 'Medium' ? '#fbbf24' : '#34d399',
                                                    border: `1px solid ${pestInfo.riskLevel === 'High' ? 'rgba(239, 68, 68, 0.4)' : 
                                                                        pestInfo.riskLevel === 'Medium' ? 'rgba(245, 158, 11, 0.4)' : 'rgba(33, 231, 134, 0.4)'}`
                                                }}>
                                                    {pestInfo.riskLevel} Risk
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <div style={{ marginBottom: '20px' }}>
                                            <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>
                                                <i className="fa fa-info-circle text-success me-2" style={{ color: '#21e786' }}></i> Overview
                                            </h5>
                                            <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '14px', margin: 0 }}>
                                                {pestInfo.description}
                                            </p>
                                        </div>

                                        {/* Symptoms */}
                                        {pestInfo.damageSymptoms && pestInfo.damageSymptoms.length > 0 && (
                                            <div style={{ marginBottom: '20px' }}>
                                                <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>
                                                    <i className="fa fa-exclamation-triangle me-2" style={{ color: '#fbbf24' }}></i> Damage Symptoms
                                                </h5>
                                                <ul style={{ paddingLeft: '20px', margin: 0, color: '#cbd5e1', fontSize: '14px' }}>
                                                    {pestInfo.damageSymptoms.map((symptom, index) => (
                                                        <li key={index} style={{ marginBottom: '4px' }}>{symptom}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Recommended Pesticides */}
                                        {pestInfo.pesticides && pestInfo.pesticides.length > 0 && (
                                            <div style={{ marginBottom: '20px' }}>
                                                <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>
                                                    <i className="fa fa-flask me-2" style={{ color: '#21e786' }}></i> Recommended Treatments
                                                </h5>
                                                <div className="row g-2">
                                                    {pestInfo.pesticides.map((pesticide, index) => (
                                                        <div key={index} className="col-sm-6 col-12">
                                                            <div style={{
                                                                backgroundColor: 'rgba(33, 231, 134, 0.06)',
                                                                border: '1px solid rgba(33, 231, 134, 0.2)',
                                                                padding: '12px 14px',
                                                                borderRadius: '10px',
                                                                height: '100%'
                                                            }}>
                                                                <h6 style={{ color: '#21e786', fontWeight: '700', fontSize: '14px', margin: '0 0 4px' }}>
                                                                    {pesticide.name}
                                                                </h6>
                                                                <p style={{ margin: '0 0 2px', fontSize: '13px', color: '#94a3b8' }}>
                                                                    <strong style={{ color: '#e2e8f0' }}>Dosage:</strong> {pesticide.dosage}
                                                                </p>
                                                                <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>
                                                                    <strong style={{ color: '#e2e8f0' }}>Safety:</strong> {pesticide.safety}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Biological Controls */}
                                        {pestInfo.biologicalControls && pestInfo.biologicalControls.length > 0 && (
                                            <div>
                                                <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>
                                                    <i className="fa fa-leaf me-2" style={{ color: '#21e786' }}></i> Biological Controls
                                                </h5>
                                                <ul style={{ paddingLeft: '20px', margin: 0, color: '#cbd5e1', fontSize: '14px' }}>
                                                    {pestInfo.biologicalControls.map((control, index) => (
                                                        <li key={index} style={{ marginBottom: '4px' }}>{control}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Banner01;