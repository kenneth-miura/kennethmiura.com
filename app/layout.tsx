import type { Metadata } from "next";
import "./globals.scss";
import {inter, firaCode} from "@/app/ui/fonts";

import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


export const metadata: Metadata = {
  title: "Kenneth Miura",
  description: "Kenneth Miura is a Computer Science Student specializing in Full Stack Development",
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
