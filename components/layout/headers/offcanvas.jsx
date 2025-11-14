import Link from "next/link";
import Social from '../../data/social';
import logo2 from "../../../public/assets/img/sharpline-logo.png";
import OptimizedImage from '@/components/common/OptimizedImage';

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
                <div className="header__area-menubar-right-sidebar-popup-logo">
                <Link href='/'>
                    <OptimizedImage
                                        src={logo2.src}
                                        alt="logo"
                                        width={1149}
                                        height={382}
                                      />
                </Link>
                </div>
                <p>Premier provider of comprehensive property services across Sydney, Central Coast, and Wollongong.</p>
                <div className="header__area-menubar-right-sidebar-popup-contact">
                    <h4 className="mb-30">Contact</h4>
                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="flaticon-phone"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Phone:</span>
                            <h6><Link href="tel:+61414603059">+61 414 603 059</Link></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="flaticon-email-3"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Email Address:</span>
                            <h6><Link href="mailto:info@sharplinesolutions.com.au">info@sharplinesolutions.com.au</Link></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="flaticon-location-1"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Coverage:</span>
                            <h6>Sydney, Central Coast, and Wollongong</h6>
                        </div>
                    </div>
                </div>
                <div className="header__area-menubar-right-sidebar-popup-social">
                    <Social />							
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;