import {Project} from "@/data/projects";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-regular-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import TextWithLinks from "@/app/ui/projects/TextWithLinks";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import styles from './ProjectCard.module.scss';
import {clsx} from "clsx";
import {firaCode} from "@/app/ui/fonts";

interface ProjectCardProps {
    project: Omit<Project, 'altImageText' | 'imagePath'>;
}

export default function ProjectCard(props: ProjectCardProps) {
    const {project} = props;
    const {url, githubUrl, title, description, techStack} = project;
    const iconSize = 'xl';

    return (<div className={styles.projectContainer}>
        <div>
            <div className='flex items-center w-full justify-between '>
                <FontAwesomeIcon icon={faFolder} size={'3x'} className={styles.uninteractableIcon}/>
                <div>
                    {url && <a href={url}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={iconSize}
                                         className={clsx([styles.interactableIcon, 'mr-3'])}/>
                    </a>}
                    <a href={githubUrl}>
                        <FontAwesomeIcon icon={faGithub} size={iconSize} className={styles.interactableIcon}/>
                    </a>
                </div>
            </div>
            <h1 className='text-2xl font-bold mt-2'>{title}</h1>
            <TextWithLinks linkableTexts={description}/>
        </div>
        <div className='mt-4'>
            <div className={'flex flex-wrap'}>{techStack.map(technology => <span key={technology}
                                                                                 className={clsx([firaCode.className, 'text-sm mr-2'])}> {technology}</span>)}</div>
        </div>
    </div>)

}