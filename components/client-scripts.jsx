"use client";
import { useEffect } from "react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function ClientScripts() {
    useEffect(() => {
        // Dynamically import Bootstrap JavaScript
        import("bootstrap/dist/js/bootstrap.min.js");

        // Dynamically import WOW.js and initialize
        import("wowjs").then(({ WOW }) => {
            new WOW({ live: false }).init();
        });
    }, []);

    return <WhatsAppButton />;
}

