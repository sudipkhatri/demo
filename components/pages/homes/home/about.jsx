import Link from "next/link";
import Count from "../../common/count";
import image from "../../../../public/assets/img/page/who-we-are.jpg";
import OptimizedImage from '@/components/common/OptimizedImage';

const AboutTwo = () => {
    return (
        <div className="about__two section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 lg-mb-25">
                        <div className="about__two-left section-padding pb-0">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">About Sharpline Solutions</span>
                            <h2 className="wow fadeInRight" data-wow-delay=".6s">Your Trusted Property Services Partner</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">Sharpline Solutions delivers comprehensive property services across Sydney, Central Coast, and Wollongong. Our expert team provides demolition, labour hire, floor grinding, waste management, cleaning, and property maintenance services with professionalism and attention to detail.</p>
                            <div className="wow fadeInDown" data-wow-delay="1.2s">
                                <Link className="build_button mt-35" href="/about-us">All Services<i className="flaticon-right-up"></i></Link>                        
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="about__two-right">
                            <OptimizedImage
                                        src={image.src}
                                        alt="image"
                                        width={870}
                                        height={420}
                                        className="wow img_top_animation"
                                      />
                            <div className="counter__one-area mt-35">
                                <div className="about__two-right-counter">
                                    <h2><Count number={250}/>+</h2>
                                    <p>Completed Projects</p>
                                </div>
                                <div className="about__two-right-counter">
                                    <h2><Count number={50}/>+</h2>
                                    <p>Skilled Professionals</p>
                                </div>
                                <div className="about__two-right-counter">
                                    <h2><Count number={98}/>%</h2>
                                    <p>Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTwo;