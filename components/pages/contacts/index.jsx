"use client";
import SEO from "@/components/data/seo";
import FooterOne from "../../layout/footers/footer-one";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import CustomCursor from "../common/cursor";
import SwitchTab from "../common/dark-light";
import ContactMain from "./contact";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contact Us" />
            <HeaderTwo />
            <CustomCursor />
            <SwitchTab />
            <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
            <ContactMain />
            <div className="map section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 wow fadeInUp" data-wow-delay=".4s">
                            <div className="map-area">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.985749404!2d150.6515679!3d-33.8473567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632aac!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau" loading="lazy" title="Sydney, NSW, Australia" aria-label="Sydney, NSW, Australia"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    );
};

export default ContactUs;