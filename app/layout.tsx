import type { Metadata } from "next";
import "./globals.scss";
import {inter, firaCode} from "@/app/ui/fonts";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter ${inter.variable} ${firaCode.variable}  antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
