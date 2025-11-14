import React from 'react';
import Link from "next/link";
import ctaImage from '../../../../public/assets/img/page/cta-1.jpg';
//import image1 from '../../../../public/assets/img/portfolio/portfolio-5.jpg';
//import image2 from '../../../../public/assets/img/portfolio/portfolio-8.jpg';
import servicesData from '@/components/data/services-data';
import OptimizedImage from '@/components/common/OptimizedImage';

const ServicesSingleMain = ({singleData}) => {
    return (
        <>
            <div className="services__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 columns_sticky">
                            <div className="all__sidebar">                        
                                <div className="all__sidebar-item">
                                    <h4>Our Solutions</h4>
                                    <div className="all__sidebar-item-category">
                                        <ul>
                                            {servicesData.slice(0, 5).map((data, id) => (
                                                <li key={id}><Link href={`/services/${data.id}`}>{data.title}<i className="flaticon-right-up"></i></Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="all__sidebar-item-help mb-25" style={{backgroundImage: `url(${ctaImage.src})`}}>
                                    <h3>Need Property Services?</h3>
                                    <Link className="build_button mt-20" href="/contact-us">Get a Quote<i className="flaticon-right-up"></i></Link>
                                </div> */}
                                {/* <div className="all__sidebar-item">
                                    <h4>Download</h4>
                                    <div className="all__sidebar-item-download">
                                        <ul>
                                            <li><Link href="#">Company Details<span className="fal fa-arrow-to-bottom"></span></Link></li>
                                            <li><Link href="#">Our Brochures<span className="fal fa-arrow-to-bottom"></span></Link></li>
                                        </ul>                            
                                    </div>
                                </div> */}
                            </div>  
                        </div>
                        <div className="col-lg-8">
                            <div className="services__details-area">
                                <OptimizedImage
                                        src={singleData.image.src}
                                        alt="image"
                                        width={1200}
                                        height={760}
                                      />
                                <h3 className="mt-25 mb-20">{singleData.title}</h3>
                                <p className="mb-20">{singleData.description}</p>
                                <p className="mb-25">Our experienced team ensures every project is completed to the highest standards, with attention to detail and commitment to safety. We work closely with you to understand your specific requirements and deliver results that exceed expectations.</p>
                                <h4 className="mb-20">Professional Service Delivery</h4>
                                <p>We utilize industry-leading techniques and equipment to ensure efficient, safe, and quality results. Our team is fully licensed, insured, and committed to maintaining the highest standards of professionalism throughout every project.</p>
                                {/* <div className="row mt-40 mb-40">
                                    <div className="col-sm-6 sm-mb-25">
                                        <OptimizedImage
                                        src={image1.src}
                                        alt="image"
                                        width={1300}
                                        height={750}
                                        className="img_full"
                                      />
                                    </div>
                                    <div className="col-sm-6">
                                        <OptimizedImage
                                        src={image2.src}
                                        alt="image"
                                        width={1300}
                                        height={750}
                                        className="img_full"
                                      />
                                    </div>
                                </div> */}
                                <p>We deliver exceptional property services with a focus on quality, efficiency, and customer satisfaction. Our team combines industry expertise with practical experience to ensure your project is completed on time and within budget.</p>
                                <ul className="services__details-area-list">
                                    <li><i className="flaticon-check-mark"></i>Fully licensed and insured professionals</li>
                                    <li><i className="flaticon-check-mark"></i>Comprehensive service coverage across Sydney, Central Coast, and Wollongong</li>
                                    <li><i className="flaticon-check-mark"></i>Transparent pricing with no hidden fees</li>
                                    <li><i className="flaticon-check-mark"></i>Strict adherence to safety standards and environmental compliance</li>
                                </ul>
                                <h3>Common Questions</h3>
                                <div className="mt-30" id="accordionExample">
                                    <div className="faq-item">
                                        <h5 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. What areas do you service?</h5>
                                        <div id="collapseOne" className="faq-item-body collapse show" data-bs-parent="#accordionExample">
                                            <p>We provide services across Sydney, Central Coast, and Wollongong, ensuring reliable coverage for all your property needs.</p>
                                        </div>
                                    </div>
                                    <div className="faq-item">
                                        <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">2. Do you provide free quotes?</h5>
                                        <div id="collapseTwo" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>Yes, we offer free quotes for all projects. Contact us to discuss your requirements and receive a detailed estimate.</p>
                                        </div>
                                    </div>
                                    <div className="faq-item">
                                        <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. Are you licensed and insured?</h5>
                                        <div id="collapseThree" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>Yes, we are fully licensed and insured. All our work complies with Australian regulations and safety standards.</p>
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

export default ServicesSingleMain;