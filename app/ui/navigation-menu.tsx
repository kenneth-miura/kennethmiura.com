import React from "react";
import Link from "next/link";
import LinkButton from "@/app/ui/link-button";
import styles from './navigation-menu.module.scss';
import {clsx} from "clsx";
import NavigationMenuMobileButton from "@/app/ui/navigation-menu-mobile-button";
import NavigationSidebar from "@/app/ui/navigation-sidebar";
import {firaCode} from "@/app/ui/fonts";

// TODO: if this setOpen stuff feels universally needed, alter to a universal provider
export interface NavigationMenuProps {
    menuOpen: boolean;
    toggleMenuOpen: () => void;
}

export interface NavigationLinkData {
    href: string;
    text: string;

}

export default function NavigationMenu(props: NavigationMenuProps) {
    // TODO: when menuOpen and in mobile, blur the background

    const {menuOpen, toggleMenuOpen} = props;

    const data: NavigationLinkData[] = [{
        href: "/#about",
        text: "About"
    }, {
        href: "/#jobs",
        text: "Experience"
    }, {
        href: "/#projects",
        text: "Work"
    }, {
        href: "/#contact",
        text: "Contact"
    }]


    const desktop = (
        <ol className="flex flex-row items-center">
            {
                data.map((linkData, i) => {
                    const number = `0${i + 1}.`
                    return (
                        <li key={linkData.text} className={clsx([styles.link, "mr-4 text-sm"])}>
                            <Link href={linkData.href}>
                                <span className={clsx([styles.number, firaCode.className, "mr-1"])}>{number}</span>
                                <span>{linkData.text}</span>
                            </Link>
                        </li>
                    )
                })
            }
            <LinkButton targetUrl={"/resume.pdf"} text="Resume"/>
        </ol>

    );


    const mobile =
        <>
            <NavigationMenuMobileButton menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen}/>
            {menuOpen && (
                <NavigationSidebar data={data}/>
            )
            }
        </>;

    return (<>
            <div className="hidden md:block">
                {desktop}
            </div>
            <div className="md:hidden">
                {mobile}

            </div>
        </>
    )
}