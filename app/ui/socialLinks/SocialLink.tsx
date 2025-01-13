import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import styles from './SocialLink.module.scss';
import React from "react";
import {clsx} from "clsx";

interface SocialLinkProps extends Pick<FontAwesomeIconProps, 'icon'>{
    href: string;
    className?: string;
}

export default function SocialLink(props: SocialLinkProps) {
    const {icon, href, className} = props;

    return (
        <a href={href}>
            <FontAwesomeIcon icon={icon} size='2x' className={clsx([styles.socialIcon, className])} />
        </a>
    )

}