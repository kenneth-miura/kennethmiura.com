import React from "react";
import Link from "next/link";
import LinkButton from "@/app/ui/link-button";
import styles from './navigation-menu.module.scss';
import {clsx} from "clsx";
import NavigationMenuMobileButton from "@/app/ui/navigation-menu-mobile-button";

interface LinkData {
    href: string;
    text: string;
}

export default function NavigationMenu() {

    const [open, setOpen] = React.useState(false);
    const toggleOpen = React.useCallback(() => setOpen(prevOpen => !prevOpen), [open]);

    const data: LinkData[] = [{
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
                                <span className={clsx([styles.number, "mr-1"])}>{number}</span>
                                {linkData.text}
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
            <NavigationMenuMobileButton menuOpen={open} toggleMenuOpen={toggleOpen}/>
            {false && (
                <ol className="flex flex-row items-center">
                    {
                        data.map((linkData, i) => {
                            const number = `0${i + 1}.`
                            return (
                                    <li key={linkData.text} className={clsx([styles.link, "mr-4 text-sm"])}>
                                        <Link href={linkData.href}>
                                            <span className={clsx([styles.number, "mr-1"])}>{number}</span>
                                            {linkData.text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <LinkButton targetUrl={"/resume.pdf"} text="Resume"/>
                    </ol>
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