import {LinkableText} from "@/data/projects";
import styles from './TextWithLinks.module.scss';
import React from "react";

interface LinkableTextProps {
    linkableTexts: LinkableText[]
    className?: string;
}

export default function TextWithLinks(props: LinkableTextProps) {
    const {linkableTexts, className} = props;

    return (<p className={className}>
        {linkableTexts.map(linkableText => {
            if (typeof linkableText === 'string') {
                return <span key={linkableText}>{linkableText}&nbsp;</span>
            }
            return <span key={linkableText.url}>
                <a href={linkableText.url} key={linkableText.url}
                   className={styles.highlightColor}>{linkableText.text}</a>
                {/* This space is rendered separately so the underline on hover for links doesn't extend to the space */}
                <span>&nbsp;</span>
            </span>
        })}
    </p>)
}