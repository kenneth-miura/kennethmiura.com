'use client';
import ContactSection from "@/app/ui/contact/contact-section";
import NavigationMenu from "@/app/ui/navigation-menu";
import {useState} from "react";
import {clsx} from "clsx";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenuOpen = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);


    return (
        <>
            <header>
                <NavigationMenu menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen}/>
            </header>
            <div className={clsx("px-4 md:px-36 transition-all", {
                ['blur md:blur-none pointer-events-none md:pointer-events-auto ']: menuOpen
            })}
            >
                <ContactSection/>
            </div>
        </>
    );
}
