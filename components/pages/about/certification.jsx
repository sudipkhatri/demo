import React from 'react';
import image from "../../../public/assets/img/page/who-we-are.jpg";
import Count from '../common/count';
import OptimizedImage from '@/components/common/OptimizedImage';

const Certification = () => {
    return (
        <>
        <div className="certification section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5 lg-mb-25">
                        <div className="certification-left section-padding pb-0">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Track Record</span>
                            <h2 className="title_split_anim">Proven Excellence in Property Services</h2>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="certification-right">
                            <OptimizedImage
                                        src={image.src}
                                        alt="image"
                                        width={870}
                                        height={420}
                                        className="wow img_top_animation"
                                      />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="counter__one-area mt-80">
                            <div className="certification-right-counter">
                                <h2><Count number={250}/>+</h2>
                                <p>Completed Projects</p>
                            </div>
                            <div className="certification-right-counter">
                                <h2><Count number={50}/>+</h2>
                                <p>Skilled Professionals</p>
                            </div>
                            <div className="certification-right-counter">
                                <h2><Count number={98}/>%</h2>
                                <p>Client Satisfaction</p>
                            </div>
                            <div className="certification-right-counter">
                                <h2><Count number={3}/></h2>
                                <p>Service Regions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        </>
    );
};

export default Certification;