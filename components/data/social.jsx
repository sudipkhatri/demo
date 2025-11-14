import Link from "next/link";
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://www.facebook.com/share/1BM1Yoww23/?mibextid=wwXIfr" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://www.instagram.com/sharplinesolutions" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="https://www.tiktok.com/@sharplinesolutions6?_r=1&_t=ZS-91O2KQhjhUS" target="_blank"><i className="fab fa-tiktok"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;