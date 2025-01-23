import styles from './AboutSection.module.scss'
import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";
import SectionContainer from "@/app/ui/SectionContainer";
import ProfileImage from "@/app/ui/about/ProfileImage";
import {firaCode} from "@/app/ui/fonts";
import {clsx} from "clsx";

export default function AboutSection(props: SharedSectionProps) {
    const {index} = props;
    const skills = ['Typescript', 'Java', 'React', 'Express', 'MySQL', 'React Native'];
    return (<SectionContainer>
        <div className="flex flex-col lg:flex-row  items-center">
            <div className="mr-5 max-w-xl">
                <SectionHeader section={'about'} index={index}/>
                <div className='mt-5 text-xl'>
                    <p> Hi! My name is Kenneth, and I like building software! I got started with software by doing
                        programming for FIRST robotics in highschool. After getting my start, I went to University of
                        Toronto to study Computer Science, and I&#39;ve since moved into fullstack work.</p>
                    <br/>
                    <p> I&#39;ve worked at a lot of great places, from a <a className={styles.highlightColor} href="https://wanderlog.com/">travel startup</a>, to <a
                        className={styles.highlightColor} href="https://www.palantir.com/">big tech</a>, to <a
                        className={styles.highlightColor}
                        href="https://thewaltdisneycompany.com/">a
                        big consumer-facing company</a>.
                    </p>
                    <br/>
                    <p> During my time at University of Toronto, I helped build an iOS menstruation tracking app
                        for <a className={styles.highlightColor} href="https://www.theperiodpurse.com/"> a local
                            menstruation equity non-profit</a>. Beyond
                        that, I was also involved with
                        overhauling the website at <a className={styles.highlightColor}
                                                      href="https://www.yourenext.ca/">a career fair club</a></p>
                    <br/>
                    <p>Here&#39;s some technologies I like:</p>
                    <br/>
                    <ul className={styles.skillsContainer}>
                        {skills.map(skill => <li className={clsx([styles.bullet, firaCode.className, "text-sm"])}
                                                 key={skill}>{skill}</li>)}
                    </ul>

                </div>
            </div>
            {/* The below margin is meant to be approximately the height of the section header + the margin on the top of all the text*/}
            <div className='mt-12 flex-shrink-0 flex justify-center flex-row'>
                <ProfileImage imagePath={'/pfp.jpg'}/>
            </div>
        </div>
    </SectionContainer>)

}