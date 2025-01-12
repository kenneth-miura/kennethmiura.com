import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {clsx} from "clsx";
import styles from './SocialLinks.module.scss';

export default function SocialLinks() {
    const sharedProps: Pick<FontAwesomeIconProps, 'size' | 'className'> ={
        size: '2x',
        className: clsx(['mr-6 md:mr-0 mb-6', styles.socialIcon])
    };

    return (
        <div className='flex -mr-6 mb-5 md:fixed md:flex-col md:mr-0 md:mb-0 md:left-10 md:bottom-0 items-center'>
            <a href="https://github.com/kenneth-miura">
                <FontAwesomeIcon icon={faGithub} {...sharedProps} />
            </a>
            <a href="https://www.linkedin.com/feed/">
                <FontAwesomeIcon icon={faLinkedin} {...sharedProps} />
            </a>
            <div className={clsx(['hidden md:block', styles.verticalLine])}/>
        </div>
    )

}