import React from 'react';
import PropTypes from 'prop-types';

RoadMap2.propTypes = {
    data : PropTypes.array,
};

function RoadMap2(props) {
    const {data} = props;
    return (
        <section className="tf-section section-roadmap2 section-bg-1">
              
            <div className="tf-heading  mb87 wow fadeInUp">
                <h2 className="heading">How It Works</h2>
            </div>
            
            <div className="shape1">
                <svg xmlns="http://www.w3.org/2000/svg" width="367" height="383" viewBox="0 0 367 383" fill="none">
                    <g opacity="0.2" filter="url(#filter0_f_2706_4929)">
                    <path d="M323.437 313.468L237.275 257.43L258.579 357.999L198.674 370.69L177.369 270.12L121.33 356.283L69.9995 322.898L126.038 236.736L25.4685 258.041L12.7778 198.135L113.347 176.83L27.1845 120.792L60.569 69.4609L146.732 125.499L125.427 24.9298L185.332 12.2392L206.637 112.808L262.676 26.6459L314.007 60.0304L257.968 146.193L358.538 124.888L371.228 184.794L270.659 206.099L356.822 262.137L323.437 313.468Z" fill="url(#paint0_linear_2706_4929)"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_2706_4929" x="0.777344" y="0.238281" width="382.451" height="382.451" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2706_4929"/>
                    </filter>
                    <linearGradient id="paint0_linear_2706_4929" x1="288.341" y1="43.3381" x2="95.6649" y2="339.591" gradientUnits="userSpaceOnUse">
                    <stop offset="1"  stopColor="#1D2328"/>
                    <stop offset="1" stopColor="#1D2328" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>
            </div>
            <div className="shape2">
                <svg xmlns="http://www.w3.org/2000/svg" width="321" height="322" viewBox="0 0 321 322" fill="none">
                    <g opacity="0.2" filter="url(#filter0_f_2706_4928)">
                    <path d="M269.213 262.019L197.968 215.683L215.584 298.84L166.05 309.333L148.434 226.176L102.098 297.421L59.6544 269.817L105.99 198.572L22.8334 216.188L12.3399 166.654L95.4969 149.038L24.2523 102.702L51.8567 60.2583L123.101 106.594L105.485 23.4373L155.019 12.9439L172.635 96.1009L218.971 24.8562L261.415 52.4606L215.079 123.705L298.236 106.089L308.729 155.623L225.572 173.239L296.817 219.575L269.213 262.019Z" fill="url(#paint0_linear_2706_4928)"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_2706_4928" x="0.339844" y="0.943359" width="320.389" height="320.391" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2706_4928"/>
                    </filter>
                    <linearGradient id="paint0_linear_2706_4928" x1="240.193" y1="38.6584" x2="80.8762" y2="283.619" gradientUnits="userSpaceOnUse">
                    <stop offset="1"  stopColor="#1D2328"/>
                    <stop offset="1" stopColor="#1D2328" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>
            </div>
            <div className="container w-100">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-roadmap style2">
                            {
                                data.map(idx => (
                                    <div key={idx.id} className={`roadmap-box-2 ${idx.class}`} data-wow-duration="1.5s">
                                        <div className="content">
                                            <h4 className="title">{idx.title}</h4>
                                            <ul className="list-infor">
                                                {
                                                    idx.list.map(idx => (
                                                        <li key={idx.id}>
                                                            
                                                            {idx.text}
                                                        </li>
                                                    ))
                                                }
                                                
                                            </ul>
                                        </div>
                                        <span ></span>
                                        <div className="shape-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="176" height="60" viewBox="0 0 176 60" fill="none">
                                                <path opacity="0.7" d="M0 30L136 30" stroke="var(--primary-color13)" strokeWidth="2" strokeDasharray="6 6"/>
                                                <circle cx="146" cy="30" r="30" transform="rotate(90 146 30)" fill="#21E786" fillOpacity="0.2"/>
                                                <circle cx="146" cy="30" r="15" transform="rotate(90 146 30)" fill="#21E786"/>
                                                </svg>
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

export default RoadMap2;