import styles from './ExperienceSelector.module.scss'
import {sortedJobs} from "@/data/jobs";
import React from "react";
import {firaCode} from "@/app/ui/fonts";
import {clsx} from "clsx";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";


function getDateString(date: Date) {
    const month = date.toLocaleString('default', { month: 'long' });
    return `${month} ${date.getFullYear()}`;
}

export default function ExperienceSelector() {

    const [selectedJobIndex, setSelectedJobIndex] = React.useState(0);
    const {width} = useWindowDimensions();

    // See https://tailwindcss.com/docs/responsive-design for this value
    const tailwindMdBreakpoint = 768;

    const isDesktop = React.useMemo(() => width > tailwindMdBreakpoint, [width]);

    const selectedStyle = React.useMemo(() => {
        // Keep in sync with corresponding variables in ExperienceSelector.module.scss
        const mobileButtonWidth = 125;
        const desktopButtonHeight = 50;
        return isDesktop ? {top: `${selectedJobIndex * desktopButtonHeight}px`} : {left: `${selectedJobIndex * mobileButtonWidth}px`};
    }, [isDesktop, selectedJobIndex])

    const jobDescription = React.useMemo(() => {
        const {experienceBullets, company, url, title, endDate, startDate} = sortedJobs[selectedJobIndex];

        return (<div className={styles.companyDescriptionContainer}>
            <h1 className='text-xl'> {title} <span className={styles.highlightColor}>@</span> <a href={url} className={styles.highlightColor}>{company}</a></h1>
            <h3 className={firaCode.className}> {getDateString(startDate)} - {getDateString(endDate)}</h3>

            <ul className='-mb-3'>
                {
                    experienceBullets.map(bullet => <li key={bullet}
                                                        className={clsx([styles.bullet, 'mb-3 text-lg'])}>{bullet}</li>)}
            </ul>

        </div>);

    }, [selectedJobIndex])

    return <div className={clsx(["flex flex-col md:flex-row", styles.container])}>
        <div className="flex-row md:flex-col flex mr-10">
            {
                sortedJobs.map((job, i) =>
                    <button key={job.company}
                            className={clsx([styles.companyButton, firaCode.className ], {
                                [styles.selected]: i === selectedJobIndex,
                                }
                            )}
                            onClick={() => setSelectedJobIndex(i)}>{job.company}</button>
                )
            }
        </div>
        <div className={clsx(styles.selectedBar)} style={selectedStyle}/>
        {jobDescription}


    </div>

}