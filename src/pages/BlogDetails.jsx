import React , {useState} from 'react';
import Footer from '../components/footer';
import PageTitle from '../components/pagetitle/PageTitle';

import img1 from '../assets/images/blog/blog-details-1.jpg'
import img2 from '../assets/images/blog/blog-details-2.jpg'
import img3 from '../assets/images/blog/blog-details-3.jpg'
import img4 from '../assets/images/blog/prev-post.jpg'
import img5 from '../assets/images/blog/next-post.jpg'
import rec1 from '../assets/images/blog/recent-post-1.jpg'
import rec2 from '../assets/images/blog/recent-post-2.jpg'
import rec3 from '../assets/images/blog/recent-post-3.jpg'
import { Link } from 'react-router-dom';



function BlogDetails(props) {
    const [datarecent] = useState([
        {
            id: 1,
            img : rec1,
            title: 'Enior Apple Employee Alleges Sexism At',
            cate: 'GAMMING',
            time: '20 Jun 2022'
        },
        {
            id: 2,
            img : rec2,
            title: 'Enior Apple Employee Alleges Sexism At',
            cate: 'LAUCHPAD',
            time: '20 Jun 2022'
        },
        {
            id: 3,
            img : rec3,
            title: 'Enior Apple Employee Alleges Sexism At',
            cate: 'ART',
            time: '20 Jun 2022'
        },
    ])
    return (
        <div>

            <PageTitle title='Blog Details' />

            <section className="tf-blog">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="detail-inner">
                                <div className="image">
                                    <img src={img1} alt="Pest Eye" />
                                </div>

                                <div className="title">
                                    <h3 >Enior Apple Employee Alleges Sexism At</h3>
                                    <div className="category">GAMING</div>
                                </div>
                                <div className="meta">
                                    <span className="admin"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C8.51067 0 5.67188 2.8388 5.67188 6.32812C5.67188 9.81745 8.51067 12.6562 12 12.6562C15.4893 12.6562 18.3281 9.81745 18.3281 6.32812C18.3281 2.8388 15.4893 0 12 0Z" fill="#21E786"/>
                                        <path d="M19.8734 16.7904C18.1409 15.0313 15.8442 14.0625 13.4062 14.0625H10.5938C8.15588 14.0625 5.85909 15.0313 4.12659 16.7904C2.40258 18.5409 1.45312 20.8515 1.45312 23.2969C1.45312 23.6852 1.76794 24 2.15625 24H21.8438C22.2321 24 22.5469 23.6852 22.5469 23.2969C22.5469 20.8515 21.5974 18.5409 19.8734 16.7904Z" fill="#21E786"/>
                                        </svg>                                        
                                        Tony Nguyen</span>
                                    <span className="date"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z" fill="#21E786"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.58579 21.4142C2 20.8284 2 19.8856 2 18V13C2 12.5286 2 12.2929 2.14645 12.1464C2.29289 12 2.5286 12 3 12H21C21.4714 12 21.7071 12 21.8536 12.1464C22 12.2929 22 12.5286 22 13V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22H6C4.11438 22 3.17157 22 2.58579 21.4142ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H8Z" fill="#21E786"/>
                                        <path d="M7 3L7 6" stroke="#21E786" strokeWidth="2" strokeLinecap="round"/>
                                        <path d="M17 3L17 6" stroke="#21E786" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>                                        
                                        20 Jun 2022</span>
                                </div>
        
                                <div className="content-inner mb24">
                                    <p>The pest database that researchers contribute to is continuously growing with verified entries. Researchers use the identification data to study pest patterns and develop effective control strategies.</p>
                                    <p>In Pest Eye, users can upload images of crop pests for instant identification using AI-powered analysis. Pest Eye is an innovative crop protection platform developed to help farmers and agricultural researchers identify and manage pest infestations efficiently.</p>
                                </div>
                                <div className="post-infor">
                                    <div className="title">“The First Huge Metaverse Arena To Arrange Live Sports, Hang Out And Even Make Bets And Wagers”</div>
                                    <div className="content">
                                        <div className="star"><i className="fas fa-star"></i><span>8.5/ 10</span></div>
                                        <h6 className="name">Markout Corporation</h6>
                                    </div>
                                </div>
                                <div className="image style-2">
                                    <img className="mr20" src={img2} alt="Pest Eye" />
                                    <img src={img3} alt="Pest Eye" />
                                </div>
                                <div className="content-inner">
                                    <h4 className="title">AI-Powered Pest Detection for Crop Protection</h4>
                                    <p className="mb13">Setting up your profile on Pest Eye is quick and easy. Users can go to the dashboard under Settings to configure their profile and crop preferences. For those who have previously uploaded pest images, you can view your identification history and track pest patterns across seasons.</p>
                                    <p>Pest Eye uses machine learning models trained on thousands of pest images to provide accurate identification. Once identified, the system recommends treatment options and prevention strategies tailored to your specific crop and region.</p>
                                </div>
    
                                <div className="content-inner ">
                                    <h6 className="title">Pest Image Analysis Tools</h6>
                                    <p>You can use a variety of tools within Pest Eye to analyze pest images, track infestations, and get treatment recommendations.</p>
                                </div>
                                <div className="content-bottom">
                                    <div className="widget widget-tag">
                                        <h6 className="widget-title">TAGS:</h6>
                                        <ul>
                                            <li><Link to="#" >ICO</Link></li>
                                            <li><Link to="#" >CYPPUNK</Link></li>
                                            <li><Link to="#" >LIGHT</Link></li>
                                        </ul>
                                    </div>
                                    <div className="widget widget-socical">
                                        <h6 className="widget-title">SHARE:</h6>
                                        <ul>
                                            <li><Link to="#" className="icon-fl-vt"></Link></li>
                                            <li><Link to="#" className="fab fa-twitter"></Link></li>
                                            <li><Link to="#" className="fab fa-youtube"></Link></li>
                                        </ul>
                                        
                                    </div>
                                    
                                </div>

                                <ul className="post-navigator">
                                    <li>
                                        <div className="thump">
                                            <img src={img4} alt="Pest Eye" />
                                        </div>
                                        <div className="content">
                                            <Link to="#" className="btn-post btn-prev">PREVIOUS</Link>
                                            <h6 className="title"><Link to="/blog-details">Enior Apple Employee Alleges Sexism At</Link></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thump">
                                            <img src={img5} alt="Pest Eye" />
                                        </div>
                                        <div className="content">
                                            <Link to="#" className="btn-post btn-next">NEXT</Link>
                                            <h6 className="title"><Link to="/blog-details">Enior Apple Employee Alleges Sexism At</Link></h6>
                                        </div>
                                    </li>
                                </ul>
    
                                <div id="comments">
                                    <h3 className="heading">LEAVE A REPLY</h3>
                                    <div className="sub-heading">Your email address will not be published. Required fields are marked</div>
                                    <form action="contact/contact-process.php" method="post" id="commentform"  className="comment-form">
                                        <fieldset className="name"><input type="text" id="name" placeholder="Name*" className="tb-my-input" name="name" tabIndex="2" aria-required="true" required="" /></fieldset>    
                                        <fieldset className="email"><input type="email" id="email" placeholder="Enter your email*" className="tb-my-input" name="email" tabIndex="2" aria-required="true" required="" /></fieldset>
                                        <fieldset className="phone"><input type="text" id="phone" placeholder="Phone Number*" className="tb-my-input" name="phone" tabIndex="2" aria-required="true" required="" /></fieldset>    
                                        <fieldset className="website"><input type="text" id="website" placeholder="Website" className="tb-my-input" name="website" tabIndex="2" aria-required="true" required="" /></fieldset>
                                        <fieldset className="message"><textarea id="message" name="message" rows="4" placeholder="Comment*" tabIndex="4" aria-required="true" required=""></textarea></fieldset><div className="btn-submit mg-t-36"><button className="tf-button" type="submit">SEND COMMENT</button></div></form></div>
                            </div> 
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-12">
                            <div className="side-bar">
                                <div className="widget widget-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search Pests" required="" />
                                        <Link to className="btn-search"><i className="icon-fl-search-filled"></i></Link>
                                    </form>
                                </div>
                                <div className="widget widget-category">
                                    <h4 className="widget-title">CATEGORIES</h4>
                                    <ul>
                                        <li><Link to="#">Insects (12)</Link> </li>
                                        <li><Link to="#">Diseases (24)</Link> </li>
                                        <li><Link to="#">Fungi (100)</Link> </li>
                                        <li><Link to="#">Weeds (230)</Link> </li>
                                        <li><Link to="#">Mites (430)</Link> </li>
                                        <li><Link to="#">Nematodes (430)</Link> </li>
                                        <li><Link to="#">Bacteria (430)</Link> </li>
                                    </ul>
                                </div>
                                <div className="widget widget-recent-post">
                                    <h4 className="widget-title">RECENT POSTS</h4>
                                    <ul>
                                        {
                                            datarecent.map(idx => (
                                                <li key={idx.id}>
                                                    <div className="post-img">
                                                        <img src={idx.img} alt="Post New" />
                                                    </div>
                                                    <div className="post-content">
                                                        <h6 className="title"><Link to="/blog-details">{idx.title}</Link></h6>
                                                        <div className="post-meta">
                                                            <span className="category">{idx.cate}</span>
                                                            <span className="date">{idx.time}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                                <div className="widget widget-tag ">
                                    <h4 className="widget-title">TAG</h4>
                                    <ul>
                                        <li><Link to="#">Pest</Link></li>
                                        <li><Link to="#">Crop</Link></li>
                                        <li><Link to="#">Agriculture</Link></li>
                                        <li><Link to="#">AI</Link></li>
                                        <li><Link to="#">Robot</Link></li>
                                        <li><Link to="#">Gamming</Link></li>
                                        <li><Link to="#">Meraverse</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>         
                        
                    </div>
                </div>
            </section>

            <Footer />
            
        </div>
    );
}

export default BlogDetails;