import type {Metadata} from "next";
import "./globals.scss";
import {inter, firaCode} from "@/app/ui/fonts";

import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

// TODO: fill this in
const url = "https://kennethmiura.ca";
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
    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`font-inter ${inter.variable} ${firaCode.variable}  antialiased `}
        >
        {children}
        </body>
        </html>
    );
}
