
import Link from "next/link";
import logo from "../../../public/assets/img/sharpline-logo.png";
import subscribeBg from "../../../public/assets/img/page/banner-video.png";
import Social from "@/components/data/social";
import blogData from "@/components/data/blog-data";
import OptimizedImage from '@/components/common/OptimizedImage';

const FooterTwo = () => {
    return (
        <>
            <div className="footer__two">
                <div className="subscribe__area">
                    <div className="container">
                        <div className="row align-items-center subscribe__area-bg bg-dark">
                            <div className="col-lg-6 lg-mb-40 lg-t-center">
                                <div className="subscribe__area-left title_split_anim">
                                    <h2>Get Expert Property Services Today!</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="subscribe__area-form wow fadeInUp" data-wow-delay=".4s">
                                    <form>
                                        <input type="email" name="email" placeholder="Email address" />
                                        <button className="build_button" type="submit">Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="footer__two-widget">
                                <div className="footer__two-widget-about">
                                    <Link href="/"><OptimizedImage
                                        src={logo.src}
                                        alt="image"
                                        width={1149}
                                        height={382}
                                      /></Link>
                                    <p>Premier provider of comprehensive property services across Sydney, the Central Coast, and Wollongong. We deliver excellence in demolition, labour hire, floor grinding, waste management, cleaning, and property maintenance.</p>
                                    <div className="footer__two-widget-about-social">
                                        <Social />
                                    </div>							
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mt-30">
                            <div className="footer__two-widget footer-border pl-60 md-pl-0">
                                <h4>Contact</h4>
                                <div className="footer__two-widget-location">
                                    <div className="footer__two-widget-location-item">
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            <Link href="tel:+61414603059">+61 414 603 059</Link>
                                        </div>
                                    </div>
                                    <div className="footer__two-widget-location-item">
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="flaticon-email-3"></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            <Link href="mailto:info@sharplinesolutions.com.au">info@sharplinesolutions.com.au</Link>
                                        </div>
                                    </div>
                                    <h6>Coverage</h6>
                                    <div className="footer__two-widget-location-item">
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="flaticon-location"></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            Sydney, Central Coast, and Wollongong
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mt-30">
                            <div className="footer__two-widget footer-border pl-60 lg-pl-0">
                                <h4>Recent Post</h4>
                                <div className="all__sidebar-item-post">
                                    {blogData?.slice(0, 2)?.map((data, id) => (
                                        <div className="post__item" key={id}>
                                            <div className="post__item-image">
                                                <Link href={`/blog/${data.id}`}><OptimizedImage
                                        src={data.image.src}
                                        alt="image"
                                        width={1100}
                                        height={660}
                                      /></Link>
                                            </div>
                                            <div className="post__item-title">
                                                <span><i className="far fa-calendar-alt"></i>Mar {data.date}, 2025</span>
                                                <h6><Link href={`/blog/${data.id}`}>{data.title}</Link></h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
            <div className="copyright__area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright__area-content t-center">
                                <p>Copyright 2025 – All Rights Reserved By <Link href="https://themeforest.net/user/TheBitrates" target="_blank">TheBitrates</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterTwo;