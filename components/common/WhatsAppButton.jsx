"use client";
import Link from "next/link";

const WhatsAppButton = () => {
    const phoneNumber = "61414603059"; // +61 414 603 059 without + and spaces
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const message = encodeURIComponent("Hello! I'm interested in your property services.");

    return (
        <>
            <Link 
                href={`${whatsappUrl}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Contact us on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </Link>
            <style jsx global>{`
                .whatsapp-float {
                    position: fixed !important;
                    width: 60px !important;
                    height: 60px !important;
                    bottom: 20px !important;
                    left: 20px !important;
                    background-color: #25d366 !important;
                    color: #FFF !important;
                    border-radius: 50px !important;
                    text-align: center !important;
                    font-size: 30px !important;
                    box-shadow: 2px 2px 3px #999 !important;
                    z-index: 1000 !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease !important;
                    animation: whatsapp-pulse 2s infinite !important;
                }
                .whatsapp-float:hover {
                    background-color: #20ba5a !important;
                    transform: scale(1.1) !important;
                    box-shadow: 3px 3px 5px #666 !important;
                }
                .whatsapp-float i {
                    margin-top: 0 !important;
                }
                @keyframes whatsapp-pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7) !important;
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(37, 211, 102, 0) !important;
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0) !important;
                    }
                }
                @media (max-width: 768px) {
                    .whatsapp-float {
                        width: 50px !important;
                        height: 50px !important;
                        font-size: 25px !important;
                        bottom: 15px !important;
                        left: 15px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default WhatsAppButton;

