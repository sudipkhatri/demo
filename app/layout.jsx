import "./globals.css";
import ClientScripts from "@/components/client-scripts";

export const metadata = {
    title: "Sharpline Solutions - Property Services Sydney",
    description: "Premier provider of comprehensive property services across Sydney, Central Coast, and Wollongong. Specializing in demolition, labour hire, floor grinding, waste management, cleaning, and property maintenance.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <ClientScripts />
                {children}
            </body>
        </html>
    );
}
