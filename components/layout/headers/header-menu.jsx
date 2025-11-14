import Link from "next/link";
import React from 'react';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li><Link href='/'>Home</Link>
                </li>  
                <li className='menu-item-has-children'><Link href='/about-us'>Pages</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/services'>Services</Link>
                        </li>
                        <li><Link href='/testimonial'>Testimonials</Link></li>
                        <li><Link href='/faq'>FAQ's</Link></li>
                        {/* <li><Link href='/team'>Teams</Link>
                        </li> */}
                        <li><Link href='/request-quote'>Request Quote</Link></li>
                    </ul>
                </li>
                {/* <li><Link href='/portfolio/2-columns'>Portfolio</Link>  </li>*/}
                  <li><Link href='/about-us'>About Us</Link></li>
                <li><Link href='/blog'>Blog</Link>
                </li>
                <li><Link href='/contact-us'>Contact Us</Link></li>      
            </ul>  
        </>
    );
};

export default MainMenu;