'use client';
import ContactSection from "@/app/ui/contact/contact-section";
import {useState} from "react";
import {clsx} from "clsx";
import dynamic from "next/dynamic";

const DynamicHeaderWithNoSSR = dynamic(
    // No need for a loading skeleton because the header isn't fetching any data so it should render quickly. Also,
    // it is fixed so it shouldn't shift the page around (for SEO purposes)
    () => import('@/app/ui/header'),
    { ssr: false }
)

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenuOpen = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);

    return (
        <>
            <DynamicHeaderWithNoSSR menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen}/>
            <div className={clsx("px-4 md:px-36 transition-all", {
                ['blur md:blur-none pointer-events-none md:pointer-events-auto ']: menuOpen
            })}
            >
                <ContactSection/>

            </div>
        </>
    );
}
