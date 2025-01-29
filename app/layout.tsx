import type {Metadata} from "next";
import {config} from '@fortawesome/fontawesome-svg-core';
import "./globals.scss";
import {inter, firaCode} from "@/app/ui/fonts";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GoogleAnalytics } from '@next/third-parties/google'

config.autoAddCss = false;
const url = "https://kennethmiura.tech";
const description = "Kenneth Miura is a Computer Science Student specializing in Full Stack Development";


export const metadata: Metadata = {
    title: "Kenneth Miura",
    description: description,
    authors: {name: "Kenneth Miura"},
    openGraph: {
        title: "Kenneth Miura",
        description: description,
        url: url,
        images: url + "/openGraph.png",
        type: "website"
    },
    alternates: {
        canonical: url
    }
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const gtag = process.env['GOOGLE_ANALYTICS_TAG'];
    if(!gtag) {
        console.error("GOOGLE_ANALYTICS_TAG is not set in the environment variables");
    }

    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`font-inter ${inter.variable} ${firaCode.variable}  antialiased `}
        >
        {children}
        </body>
        {gtag && <GoogleAnalytics gaId={gtag}/>}
        </html>
    );
}
