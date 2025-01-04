import LinkButton from "@/app/ui/link-button";
import {clsx} from "clsx";
import {firaCode} from "@/app/ui/fonts";
import styles from './contact-section.module.scss';
import SectionContainer from "@/app/ui/section-container";
import {sectionsToMetadata, SharedSectionProps} from "@/app/ui/sections";

export default function ContactSection(props: SharedSectionProps) {
    const {section} = props;
    const {sectionTitle, scrollableId} = sectionsToMetadata[section];
    return (
        <SectionContainer>
            <>
                <div className="flex-col flex max-w-2xl text-center items-center">
                    <h3 className={clsx([styles.headerText, "mb-5", firaCode.className,])} id={scrollableId}> 04. {sectionTitle}</h3>
                    <h1 className={clsx([styles.ctaText, "text-5xl mb-5"])}>Get In Touch</h1>
                    <span className="mb-5">
        Although I&#39;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question, or just want to say hi, I&#39;ll try my best to get back to you!

        </span>
                    <LinkButton targetUrl="mailto:kenneth.t.miura@gmail.com" text="Say Hello"/>
                </div>
            </>

        </SectionContainer>
    )
}