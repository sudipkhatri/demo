import Social from "@/components/data/social";
import logo from "../../../public/assets/img/sharpline-logo.png";
import Link from "next/link";
import OptimizedImage from '@/components/common/OptimizedImage';

const FooterThree = () => {
    return (
        <>
        <div className="cta__area">
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-7 lg-mb-30 lg-t-center title_split_anim">
                        <h2>Create Your Dream Space — Let’s Get Going!</h2>
                    </div>
                    <div className="col-lg-5 t-right lg-t-center wow fadeInDown" data-wow-delay="1.2s">
                        <Link className="build_button" href="/contact-us">Book Appointment<i className="flaticon-right-up"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer__one-area">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="footer__one-widget mr-40">
                                        <Link className="logo" href="/"><OptimizedImage
                                        src={logo.src}
                                        alt="logo"
                                        width={1149}
                                        height={382}
                                      /></Link>
                                        <h5>We're Solutions for all property services</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 sm-mt-30">
                                    <div className="footer__one-widget address">
                                        <h4>Contact</h4>
                                        <div className="footer__one-widget-address">
                                            <h6>Coverage: Sydney, Central Coast, and Wollongong</h6>
                                            <h4><Link href="tel:+61414603059">+61 414 603 059</Link></h4>
                                            <h6><Link href="mailto:info@sharplinesolutions.com.au">info@sharplinesolutions.com.au</Link></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 lg-mt-30">
                                    <div className="footer__one-widget ml-40 lg-ml-0">
                                        <h4>Quick links</h4>
                                        <div className="footer-widget-menu">
                                            <ul>
                                                <li><Link href="/about-us">About Us</Link></li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/testimonial">Testimonials</Link></li>
                                                <li><Link href="/contact-us">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 lg-mt-30">
                                    <div className="footer__one-widget address">
                                        <h4>Support</h4>
                                        <div className="footer-widget-menu">
                                            <ul>
                                                <li><Link href="/contact-us">Term & Conditions</Link></li>
                                                <li><Link href="/contact-us">Privacy policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright__area">
            <div className="container">
                <div className="row al-center">
                    <div className="col-md-7">
                        <div className="copyright__area-content md-t-center md-mb-10">
                            <p>Copyright 2025 – All Rights Reserved By <Link href="https://themeforest.net/user/TheBitrates" target="_blank">TheBitrates</Link></p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="copyright__area-social t-right md-t-center">
                            <Social />						
                        </div>
                    </div>
                </div>
            </div>
        </div>         
        </>
    );
};

export default FooterThree;