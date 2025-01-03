'use client';
import styles from './page.module.scss';
import ContactSection from "@/app/ui/contact/contact-section";
import NavigationMenu from "@/app/ui/navigation-menu";
import {useState} from "react";
import {clsx} from "clsx";
import useIsNearTop from "@/app/hooks/useIsNearTop";
import useScrollDirection from "@/app/hooks/useScrollDirection";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenuOpen = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);

    const isNearTop = useIsNearTop(50);
    const scrollDirection = useScrollDirection();





    return (
        <>
            <header  className={clsx(styles.header, {
                [styles.headerScrollingDown]: !isNearTop && scrollDirection === 'down',
                [styles.headerScrollingUp]: !isNearTop && scrollDirection === 'up',
                [styles.headerAtTop]: isNearTop,

            })}>
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
