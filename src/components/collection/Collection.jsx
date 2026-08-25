import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss';
import { Link } from 'react-router-dom';

Collection.propTypes = {
    data: PropTypes.array,
};

function Collection(props) {
    const { data } = props;

    return (
        <section className="tf-collection">
            {/* ===== SECTION TITLE ===== */}
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-heading mb60">
                            <h2 className="heading">
                                RECENTLY IDENTIFIED <span>PESTS</span>
                            </h2>
                            <p className="sub-heading">
                                View common crop pests identified by PestEYE using AI-powered analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== FIRST SLIDER ===== */}
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            className="collection-1 visible"
                            spaceBetween={30}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                500: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                991: { slidesPerView: 4 },
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {data.slice(0, 7).map((idx) => (
                                <SwiperSlide key={idx.id}>
                                    <div className="slider-item">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img
                                                    src={idx.img}
                                                    alt={idx.title}
                                                />
                                            </div>

                                            {/* Temporary link – later connect to backend */}
                                            <h6 className="name">
                                                <Link to={`/collection`}>
                                                    {idx.title}
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* ===== SECOND SLIDER ===== */}
            <div className="tf-container-2">
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            spaceBetween={30}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                500: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                991: { slidesPerView: 4 },
                                1200: { slidesPerView: 5 },
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay, Navigation]}
                            className="collection-2 visible"
                        >
                            {data.slice(7, 12).map((idx) => (
                                <SwiperSlide key={idx.id}>
                                    <div className="slider-item">
                                        <div className="tf-product">
                                            <div className="image">
                                                <img
                                                    src={idx.img}
                                                    alt={idx.title}
                                                />
                                            </div>
                                            <h6 className="name">
                                                <Link to={`/collection`}>
                                                    {idx.title}
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collection;
