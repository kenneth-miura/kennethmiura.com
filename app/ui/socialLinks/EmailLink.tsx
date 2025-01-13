import styles from './EmailLink.module.scss';
import {clsx} from "clsx";
import {firaCode} from "@/app/ui/fonts";
export default function EmailLink() {
    return <div className={clsx([styles.sidebar, 'hidden md:flex'])}>
        <a className={clsx([styles.verticalText, firaCode.className, 'text-sm'])} href="mailto:kenneth.t.miura@gmail.com">kenneth.t.miura@gmail.com</a>
        <div className={styles.sidebarVerticalLine}/>

    </div>

}
