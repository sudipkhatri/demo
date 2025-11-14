import React from 'react';
import image from "../../../../public/assets/img/service/services-1.jpg";
import OptimizedImage from '@/components/common/OptimizedImage';

const FaqArea = () => {
    return (
        <>            
            <div className="faq__area section-padding">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-xl-6 col-lg-5 lg-mb-25">
                            <div className="faq__area-image mr-50 xl-mr-0">
                                <OptimizedImage
                                        src={image.src}
                                        alt="image"
                                        width={1200}
                                        height={760}
                                        className="wow img_right_animation"
                                      />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="faq__area-right">
                                <div className="faq__area-right-title mb-40">
                                    <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Common Questions</span>
                                    <h2 className="wow fadeInRight" data-wow-delay=".6s">Answers to Your Property Service Queries</h2>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay=".9s" id="accordionExample">
                                    <div className="faq-item">
                                        <h5 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. What areas do you service?</h5>
                                        <div id="collapseOne" className="faq-item-body collapse show" data-bs-parent="#accordionExample">
                                            <p>We provide comprehensive property services across Sydney, Central Coast, and Wollongong. Our team is available to assist with projects throughout these regions.</p>
                                        </div>
                                    </div>
                                    <div className="faq-item">
                                        <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">2. Do you provide free quotes?</h5>
                                        <div id="collapseTwo" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>Yes, we offer free quotes for all projects. Contact us to discuss your requirements and receive a detailed estimate without any obligation.</p>
                                        </div>
                                    </div>
                                    <div className="faq-item">
                                        <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. Are you licensed and insured?</h5>
                                        <div id="collapseThree" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>Yes, all our team members are fully licensed, insured, and certified. We maintain comprehensive insurance coverage and adhere to all workplace safety standards.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqArea;