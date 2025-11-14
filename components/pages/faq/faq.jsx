import React from 'react';

const FaqArea = () => {

    return (
        <div className="faq__page section-padding">
            <div className="container">
                <div className="row jc-center">
                    <div className="col-xl-10">
                        <div className="wow fadeInUp" data-wow-delay=".4s" id="accordionExample">
                            <div className="faq-item">
                                <h5 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne">What areas do you service?</h5>
                                <div id="collapseOne" className="faq-item-body collapse show" data-bs-parent="#accordionExample">
                                    <p>We provide comprehensive property services across Sydney, Central Coast, and Wollongong. Our team is available to assist with projects throughout these regions.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">How quickly can you start a project?</h5>
                                <div id="collapseTwo" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                    <p>Project start times vary depending on scope and current schedule. We typically provide quotes within 24-48 hours and can often commence work within a few days of approval. Emergency services may be available sooner.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Do you handle waste disposal and recycling?</h5>
                                <div id="collapseThree" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                    <p>Yes, our waste management service includes responsible disposal and recycling in compliance with Australian regulations. We handle sorting, collection, and proper disposal of property, demolition, and general waste.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">Are your workers licensed and insured?</h5>
                                <div id="collapseFour" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                    <p>Yes, all our team members are fully licensed, insured, and certified. We maintain comprehensive insurance coverage and adhere to all workplace safety standards.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">What is included in your cleaning services?</h5>
                                <div id="collapseFive" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                    <p>Our contract and final cleaning services include thorough cleaning of all areas, windows, fixtures, and hard-to-reach spaces. We ensure your property meets the highest standards for occupancy or handover.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqArea;