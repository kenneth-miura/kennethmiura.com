import {clsx} from "clsx";
import styles from "@/app/ui/NavigationItem.module.scss";
import Link from "next/link";
import {firaCode} from "@/app/ui/fonts";
import React from "react";
import {SectionMetadata} from "@/app/ui/sections";

interface NavigationItemProps {
    sectionMetadata: SectionMetadata;
    orientation: 'horizontal' | 'vertical';
    index: number;
}

export default function NavigationItem(props: NavigationItemProps) {
    const {sectionMetadata, orientation, index} = props;
    const {sectionTitle, scrollableId} = sectionMetadata;
    const number = `0${index + 1}.`

    const listElementStyles = React.useMemo(() => orientation == 'vertical' ?"mb-4 text-lg" : "mr-4 text-sm"  , [orientation]);
    const linkStyles = React.useMemo(() => orientation == 'vertical' ? "flex flex-col items-center text-base" : "", [orientation]);
    const numberStyles = React.useMemo(() => orientation == 'vertical' ? "mb-1" : "mr-1", [orientation]);
    return (
        <li className={clsx([styles.link, listElementStyles])}>
            <Link href={'#' + scrollableId } className={linkStyles}>
                <span className={clsx([styles.number, firaCode.className, numberStyles])}>{number}</span>
                <span>{sectionTitle}</span>
            </Link>
        </li>
    )

}