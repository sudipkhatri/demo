import Link from "next/link";
import image from "../../../public/assets/img/about/about-4.jpg";
import bgImage from "../../../public/assets/img/portfolio/portfolio-8.jpg";
import OptimizedImage from '@/components/common/OptimizedImage';


const AboutMain = () => {
    return (
        <>
            <div className="mission__area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 lg-mb-25">
                            <div className="mission__area-left mr-40 xl-mr-0">
                                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Mission</span>
                                <h2 className="title_split_anim">Dedicated to Delivering Excellence in Property Services</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mission__area-right">
                                <div className="row">
                                    <div className="col-md-6 md-mb-25 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="experience__area-list-item">
                                            <i className="flaticon-team"></i>
                                            <div className="experience__area-list-item-content">
                                                <h4>Professional Service</h4>
                                                <p>Comprehensive property services with attention to detail</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="experience__area-list-item">
                                            <i className="flaticon-technology"></i>
                                            <div className="experience__area-list-item-content">
                                                <h4>Wide Coverage</h4>
                                                <p>Serving Sydney, Central Coast, and Wollongong</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__five section-padding pt-0">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-lg-5 lg-mb-25">
                            <div className="about__five-image wow img_left_animation">
                                <OptimizedImage
                                        src={image.src}
                                        alt="image"
                                        width={564}
                                        height={740}
                                      />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about__five-right ml-70 xl-ml-0">
                                <div className="about__five-right-title">
                                    <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">About Sharpline Solutions</span>
                                    <h2 className="title_split_anim">Trusted Partner in Property Services</h2>
                                </div>
                                <div className="features wow fadeInUp" data-wow-delay=".3s">
                                    <h3>Property Services<br/>Excellence</h3>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Sharpline Solutions delivers comprehensive property services across Sydney, Central Coast, and Wollongong. Our expert team provides tailored solutions for demolition, labour hire, floor grinding, waste management, cleaning, and property maintenance, ensuring quality results for every project.</p>
                                <div className="item_bounce">
                                    <Link className="build_button mt-20" href="/portfolio">See Projects<i className="flaticon-right-up"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMain;