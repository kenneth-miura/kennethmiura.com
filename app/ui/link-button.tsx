import styles from './link-button.module.scss';
import {clsx} from "clsx";
import {firaCode} from "@/app/ui/fonts";
interface LinkButtonProps {
    targetUrl: string;
    text: string;
    /** If not specified, defaults to 'default' */
    size?: 'default' | 'large';
}
export default function LinkButton(props: LinkButtonProps) {
    const {targetUrl, text} = props;
    const size = props.size ?? 'default';
    return (
            <a
                className={clsx([styles.linkButton, firaCode.className, "text-xs"], {
                    [styles.largeSize]: size === 'large',
                    [styles.defaultSize]: size === 'default',
                })}
                href={targetUrl}
            >
                {text}
            </a>)

}