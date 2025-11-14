import React from 'react';
import FormArea from './form';
import Link from 'next/link';

const ContactMain = () => {
    return (
        <>
            <div className="contact__area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 lg-mb-25">
                            <div className="contact__area-left mr-40 xl-mr-0">
                                <div className="title">
                                    <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Contact Us</span>
                                    <h2 className="title_split_anim mb-25">Get In Touch</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">Contact Sharpline Solutions for all your property service needs. We're here to assist you with demolition, labour hire, floor grinding, waste management, cleaning, and property maintenance across Sydney, Central Coast, and Wollongong.</p>
                                </div>
                                <div className="contact__area-left-contact wow fadeInUp" data-wow-delay=".7s">
                                    <div className="contact__area-left-contact-item">
                                        <div className="contact__area-left-contact-item-icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="contact__area-left-contact-item-content">
                                            <span>Phone:</span>
                                            <h6><Link href="tel:+61414603059">+61 414 603 059</Link></h6>
                                        </div>
                                    </div>
                                    <div className="contact__area-left-contact-item">
                                        <div className="contact__area-left-contact-item-icon">
                                            <i className="flaticon-email-3"></i>
                                        </div>
                                        <div className="contact__area-left-contact-item-content">
                                            <span>Email Address:</span>
                                            <h6><Link href="mailto:info@sharplinesolutions.com.au">info@sharplinesolutions.com.au</Link></h6>
                                        </div>
                                    </div>
                                    <div className="contact__area-left-contact-item">
                                        <div className="contact__area-left-contact-item-icon">
                                            <i className="flaticon-location-1"></i>
                                        </div>
                                        <div className="contact__area-left-contact-item-content">
                                            <span>Coverage:</span>
                                            <h6>Sydney, Central Coast, and Wollongong</h6>
                                        </div>
                                    </div>
                                    <div className="contact__area-left-contact-item">
                                        <div className="contact__area-left-contact-item-icon">
                                            <i className="fab fa-whatsapp"></i>
                                        </div>
                                        <div className="contact__area-left-contact-item-content">
                                            <span>WhatsApp:</span>
                                            <h6><Link href="https://wa.me/61414603059" target="_blank" rel="noopener noreferrer">+61 414 603 059</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-delay=".4s">
                            <div className="contact__area-form">
                                <h4>Send Message</h4>
                                <FormArea />
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </>
    );
};

export default ContactMain;