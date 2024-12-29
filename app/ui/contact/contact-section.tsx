import LinkButton from "@/app/ui/link-button";
import {clsx} from "clsx";
import {highlightFont} from "@/app/ui/fonts";
import styles from './contact-section.module.scss';

export default function ContactSection(){
    // TODO: define shared colors for the buttons, etc in bootstrap
    return (
        <div className="flex-col flex max-w-2xl text-center items-center">
        <h3 className={clsx([styles.headerText, "mb-5", highlightFont.className, ])}> 04. What's Next?</h3>
        <h1 className={clsx([styles.ctaText, "text-5xl mb-5"])}>Get In Touch</h1>
        <span className="mb-5">
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question, or just want to say hi, I'll try my best to get back to you!

        </span>
        <LinkButton targetUrl="mailto:kenneth.t.miura@gmail.com" text="Say Hello"/>

    </div>)
}