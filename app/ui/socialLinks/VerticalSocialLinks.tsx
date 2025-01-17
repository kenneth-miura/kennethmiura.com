import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {clsx} from "clsx";
import styles from './VerticalSocialLinks.module.scss';
import IconLink from "@/app/ui/socialLinks/IconLink";

export default function VerticalSocialLinks() {

    return (
        <div className={clsx(['hidden md:flex', styles.leftSidebarContainer])}>
            <IconLink href={"https://github.com/kenneth-miura"} icon={faGithub} className='mb-5' />
            <IconLink href={"https://www.linkedin.com/feed/"} icon={faLinkedin} className='mb-5'/>
            <div className={clsx(['hidden md:block', styles.sidebarVerticalLine])}/>
        </div>
    )

}