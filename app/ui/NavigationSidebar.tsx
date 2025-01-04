import styles from './NavigationSidebar.module.scss';
import LinkButton from "@/app/ui/LinkButton";
import React from "react";
import {sectionsToMetadata} from "@/app/ui/sections";
import NavigationItem from "@/app/ui/NavigationItem";


export default function NavigationSidebar() {

    return (<div className={styles.sidebar}>
        <ol className="flex flex-col items-center justify-center flex-grow">
            {
                Object.values(sectionsToMetadata).map((sectionMetadata, i) => (
                    <NavigationItem key={sectionMetadata.sectionTitle} sectionMetadata={sectionMetadata} orientation={'vertical'} index={i}/>)
                )
            }
            <LinkButton targetUrl={"/resume.pdf"} text="Resume" size='large'/>
        </ol>


    </div>)


}