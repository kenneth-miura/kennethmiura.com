import styles from './navigation-sidebar.module.scss';
import {NavigationLinkData} from "@/app/ui/navigation-menu";
import {clsx} from "clsx";
import Link from "next/link";
import LinkButton from "@/app/ui/link-button";
import React from "react";

interface NavigationMenuMobileSidebarProps {
    data: NavigationLinkData[];
}

export default function NavigationSidebar(props: NavigationMenuMobileSidebarProps) {
    const { data} = props;

    return (<div className={styles.sidebar}>
        <ol className="flex flex-col items-center">
            {
                data.map((linkData, i) => {
                    const number = `0${i + 1}.`
                    return (
                        <li key={linkData.text} className={clsx([styles.link, "mb-4 text-lg"])}>
                            <Link href={linkData.href} className="flex flex-col items-center">
                                <span className={clsx([styles.number, "mb-1"])}>{number}</span>
                                {linkData.text}
                            </Link>
                        </li>
                    )
                })
            }
            <LinkButton targetUrl={"/resume.pdf"} text="Resume"/>
        </ol>


    </div>)


}