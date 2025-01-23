import LinkButton from "@/app/ui/LinkButton";
import {clsx} from "clsx";
import {firaCode} from "@/app/ui/fonts";
import styles from './ContactSection.module.scss';
import SectionContainer from "@/app/ui/SectionContainer";
import {sectionsToMetadata, SharedSectionProps} from "@/app/ui/sections";

export default function ContactSection(props: SharedSectionProps) {
    const {index} = props;
    const number = `0${index + 1}.`
    const {sectionTitle, scrollableId} = sectionsToMetadata['contact'];
    return (
        <SectionContainer>
            <>
                <div className="flex-col flex max-w-2xl text-center items-center">
                    <h3 className={clsx([styles.headerText, "mb-7 text-lg", firaCode.className,])} id={scrollableId}> {number} {sectionTitle}</h3>
                    <h1 className={clsx([styles.ctaText, "text-6xl mb-7"])}>Get In Touch</h1>
                    <span className="mb-20 text-xl">
                        I&#39;m always excited to meet new people and learn about new things! Whatever it is, please reach out to me below, and I&#39;ll get back to you!
        </span>
                    <LinkButton targetUrl="mailto:kenneth.t.miura@gmail.com" text="Say Hello" size='large'/>
                </div>
            </>

        </SectionContainer>
    )
}