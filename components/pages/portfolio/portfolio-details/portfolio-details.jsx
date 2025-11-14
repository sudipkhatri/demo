import React from 'react';
import image1 from '../../../../public/assets/img/about/about-1.jpg';
import image2 from '../../../../public/assets/img/page/choose-us.jpg';

const PortfolioDetailsMain = ({singleData}) => {
    return (
        <div className="portfolio__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 columns_sticky lg-mb-25">
                        <div className="portfolio__details-overview">
                            <h4>Project Overview</h4>
                            <div className="portfolio__details-overview-item">
                                <span>Date :</span>
                                <h6>October 10, 2025</h6>
                            </div>
                            <div className="portfolio__details-overview-item">
                                <span>Client :</span>
                                <h6>Jonathan Michael</h6>
                            </div>
                            <div className="portfolio__details-overview-item">
                                <span>Category :</span>
                                <h6>Architecture </h6>
                            </div>
                            <div className="portfolio__details-overview-item">
                                <span>Location :</span>
                                <h6><a href="https://www.google.com/maps">Mesa, New Jersey 45463</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="portfolio__details-area">
                            <img src={singleData.image.src} alt="image" />
                            <h3 className="mt-25 mb-20">{singleData.title}</h3>
                            <p className="mb-25">One of our standout property service projects involved comprehensive services for a residential property in Sydney. We provided complete demolition, waste management, floor grinding, and final cleaning services, ensuring the property was perfectly prepared for its next phase. Our team collaborated closely with the property owner throughout the process, delivering exceptional results. In the commercial sector, we completed property maintenance and cleaning services for an office building, ensuring optimal condition and compliance with all regulations.</p>
                            <div className="row mb-25">
                                <div className="col-md-6 md-mb-25">
                                    <ul className="portfolio__details-area-list">
                                        <li><i className="fas fa-check"></i>Service Planning and Assessment</li>
                                        <li><i className="fas fa-check"></i>Waste Management and Recycling</li>
                                        <li><i className="fas fa-check"></i>Detailed Service Execution</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="portfolio__details-area-list">
                                        <li><i className="fas fa-check"></i>Regulatory Compliance and Safety</li>
                                        <li><i className="fas fa-check"></i>Sustainability and Environmental Considerations</li>
                                        <li><i className="fas fa-check"></i>Final Service Documentation</li>
                                    </ul>								
                                </div>
                            </div>
                            <h4 className="mb-20">Service Completion and Follow-up</h4>
                            <p>Our dedication to quality and customer satisfaction is evident in every property service project we undertake. We invite you to explore our portfolio and see how Sharpline Solutions can assist with your property service needs, delivering results that meet the highest standards. We are committed to providing services that reflect our expertise and attention to detail.</p>
                            <div className="row mt-40 mb-40 portfolio__details-area-image">
                                <div className="col-sm-6 sm-mb-25">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="col-sm-6">
                                    <img src={image2.src} alt="image" />
                                </div>
                            </div>
                            <p>In addition to residential and commercial projects, our portfolio also includes community developments that focus on enhancing local engagement. One notable project is a vibrant community center designed to host events and activities, fostering a sense of belonging among residents. Our team worked diligently to ensure the facility was both functional and inviting, incorporating outdoor spaces for recreation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsMain;