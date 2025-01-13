import style from './Footer.module.scss';
import SocialLink from "@/app/ui/socialLinks/SocialLink";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <footer className={'mb-5'}>
        <span>
            Built by Kenneth Miura, based on the design of <a
            href={"https://v4.brittanychiang.com/"} className={style.highlightColor}>https://v4.brittanychiang.com/</a>.
        </span>
        <div className=" flex flex-row md:hidden -mr-6 mt-5 justify-center">
            <SocialLink href={"https://github.com/kenneth-miura"} icon={faGithub} className='mr-6'/>
            <SocialLink href={"https://www.linkedin.com/feed/"} icon={faLinkedin} className='mr-6'/>
        </div>
        </footer>
    )

}