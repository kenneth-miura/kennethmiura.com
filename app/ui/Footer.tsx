import style from './Footer.module.scss';
import IconLink from "@/app/ui/socialLinks/IconLink";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <footer className={'mb-5'}>
        <span>
            Built by Kenneth Miura, based on the design of <a
            href={"https://v4.brittanychiang.com/"} className={style.highlightColor}>https://v4.brittanychiang.com/</a>.
        </span>
            <div className='mt-5'>
                <a href="https://www.flaticon.com/free-icons/red-panda" className={style.highlightColor} title="Favicon Red Panda Icon">Red panda icon for Favicon created
                    by
                    Victoruler - Flaticon</a>
            </div>
            <div className=" flex flex-row md:hidden -mr-6 mt-5 justify-center">
                <IconLink href={"https://github.com/kenneth-miura"} icon={faGithub} className='mr-6'/>
                <IconLink href={"https://www.linkedin.com/in/kenneth-miura/"} icon={faLinkedin} className='mr-6'/>
            </div>
        </footer>
    )

}