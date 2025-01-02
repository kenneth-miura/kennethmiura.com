import styles from './link-button.module.scss';
import {clsx} from "clsx";
import {highlightFont} from "@/app/ui/fonts";
interface LinkButtonProps {
    targetUrl: string;
    text: string;
}
export default function LinkButton(props: LinkButtonProps) {
    const {targetUrl, text} = props;
    return (
            <a
                className={clsx([styles.linkButton, highlightFont.className, "text-xs"])}
                href={targetUrl}
            >
                {text}
            </a>)

}