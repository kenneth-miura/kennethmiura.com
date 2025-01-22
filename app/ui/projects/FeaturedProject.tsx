import {Project} from "@/data/projects";
import Image from "next/image";
import styles from './FeaturedProject.module.scss'
import TextWithLinks from "@/app/ui/projects/TextWithLinks";
import {clsx} from "clsx";
import IconLink from "@/app/ui/socialLinks/IconLink";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {firaCode} from "@/app/ui/fonts";

interface FeaturedProjectProps {
    project: Project;
}

/**
 * I started building this and then realized I don't have anything I want to feature yet, so leaving this to be done
 * when I have that. Therefore, styling isn't complete at all.
 */
export default function FeaturedProject(props: FeaturedProjectProps) {
    const {project} = props;
    const {imageData, techStack, url, githubUrl, title, description} = project;

    return (<div className="flex flex-row">
        {imageData && <Image className={styles.image} src={imageData.imagePath} alt={imageData.altImageText} width={800}
                             height={490}/>}
        <div className="flex flex-col ">
            <h3 className={clsx([styles.highlightColor, 'text-end text-xl'])}>Featured Project</h3>
            <h2 className='text-end text-3xl font-bold'>{title}</h2>
            <div className={clsx([styles.projectDescription, 'text-lg'])}>
                <TextWithLinks linkableTexts={description}/>
            </div>
            <div className="flex">
                <IconLink href={githubUrl} icon={faGithub}/>
                {url && <IconLink href={url} icon={faArrowUpRightFromSquare}/>}
            </div>
            <div className={'flex justify-end'}>{techStack.map(technology => <div key={technology}
                                                                                          className={clsx([firaCode.className, 'text-lg mr-2'])}> {technology}</div>)}</div>
        </div>
    </div>)

}