import React from "react";
import LinkButton from "@/app/ui/link-button";
import NavigationMenuMobileButton from "@/app/ui/navigation-menu-mobile-button";
import NavigationSidebar from "@/app/ui/navigation-sidebar";
import {sectionsToMetadata} from "@/app/ui/sections";
import NavigationItem from "@/app/ui/navigation-item";

// TODO: if this setOpen stuff feels universally needed, alter to a universal provider
export interface NavigationMenuProps {
    menuOpen: boolean;
    toggleMenuOpen: () => void;
}


export default function NavigationMenu(props: NavigationMenuProps) {

    const {menuOpen, toggleMenuOpen} = props;



    const desktop = (
        <ol className="flex flex-row items-center">
            {
                Object.values(sectionsToMetadata).map((sectionMetadata, i) => (
                    <NavigationItem key={sectionMetadata.sectionTitle} sectionMetadata={sectionMetadata} orientation={'horizontal'} index={i}/>)
                )
            }
            <LinkButton targetUrl={"/resume.pdf"} text="Resume"/>
        </ol>

    );


    const mobile =
        <>
            <NavigationMenuMobileButton menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen}/>
            {menuOpen && (
                <NavigationSidebar />
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