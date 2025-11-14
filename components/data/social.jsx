import Link from "next/link";
import React from 'react';

const Social = () => {
    const phoneNumber = "61414603059"; // +61 414 603 059 without + and spaces
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const message = encodeURIComponent("Hello! I'm interested in your property services.");

    return (
        <>
            <ul>
                <li><Link href="https://www.facebook.com/share/1BM1Yoww23/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://www.instagram.com/sharplinesolutions" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="https://www.tiktok.com/@sharplinesolutions6?_r=1&_t=ZS-91O2KQhjhUS" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></Link></li>
                <li><Link href={`${whatsappUrl}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;