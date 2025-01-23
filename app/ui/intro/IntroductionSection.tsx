import styles from './IntroductionSection.module.scss';
import {firaCode} from "@/app/ui/fonts";
import {clsx} from "clsx";
import SectionContainer from "@/app/ui/SectionContainer";

export default function IntroductionSection() {
    return <SectionContainer>
        <div className='flex  flex-col items-start'>

            <span className={clsx([styles.highlightColor, firaCode.className])}>Hi, my name is</span>
            <h1 className={styles.heading}> Kenneth Miura.</h1>
            <h1 className={styles.subtitle}> I build things for the internet</h1>
            <span className="max-w-xl text-xl/8">I&#39;m a computer science student at the University of Toronto in my last year, and I primarily do fullstack work. Starting next summer, I&#39;ll be working on new features for the platform at <a
                className={styles.highlightColor} href={"https://www.matroid.com/"}>Matroid</a>.</span>
        </div>
    </SectionContainer>
}