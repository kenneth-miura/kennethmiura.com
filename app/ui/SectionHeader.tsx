import {Section, sectionsToMetadata} from "@/app/ui/sections";
import {clsx} from "clsx";
import styles from "@/app/ui/SectionHeader.module.scss";
import {firaCode} from "@/app/ui/fonts";
import React from "react";

interface SectionHeaderProps {
    section: Section;
    index: number;
}
export default function SectionHeader(props: SectionHeaderProps) {
    const {section, index} = props;
    const {sectionTitle, scrollableId} = sectionsToMetadata[section];
    const number = `0${index + 1}.`
    return (
        <div className="flex items-center ">
            <h2 id={scrollableId} className={clsx([styles.number, firaCode.className, 'mr-1  sm:text-lg md:text-xl'])}>{number}</h2>
            <h2 className="sm:text-2xl md:text-3xl font-bold">{sectionTitle}</h2>
            <div className={styles.horizontalLine}/>
        </div>
    )


}