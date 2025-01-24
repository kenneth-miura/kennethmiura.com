'use client'
import ContactSection from "@/app/ui/contact/ContactSection";
import {useState} from "react";
import {clsx} from "clsx";
import dynamic from "next/dynamic";
import AboutSection from "@/app/ui/about/AboutSection";
import ExperienceSection from "@/app/ui/experience/ExperienceSection";
import ProjectsSection from "@/app/ui/projects/ProjectsSection";
import IntroductionSection from "@/app/ui/intro/IntroductionSection";
import VerticalSocialLinks from "@/app/ui/socialLinks/VerticalSocialLinks";
import Footer from "@/app/ui/Footer";
import EmailLink from "@/app/ui/socialLinks/EmailLink";

const DynamicHeaderWithNoSSR = dynamic(
    // No need for a loading skeleton because the header isn't fetching any data so it should render quickly. Also,
    // it is fixed so it shouldn't shift the page around (for SEO purposes)
    () => import('@/app/ui/Header'),
    {ssr: false}
)

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenuOpen = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);

    throw new Error("This is an error!");

    return (
        <>
            <DynamicHeaderWithNoSSR menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen}/>
            <div className={clsx("px-5 lg:px-72  transition-all flex flex-col items-center", {
                ['blur md:blur-none pointer-events-none md:pointer-events-auto ']: menuOpen
            })}
            >
                <IntroductionSection/>
                <AboutSection index={0}/>
                <div className='max-w-6xl'>
                    <ExperienceSection index={1}/>
                    <ProjectsSection index={2}/>
                </div>
                <ContactSection index={3}/>
                <Footer/>
                <VerticalSocialLinks/>
                <EmailLink/>
            </div>
        </>
    );
}
