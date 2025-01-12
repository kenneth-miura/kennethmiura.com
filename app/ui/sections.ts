export type Section = 'about' | 'experience' | 'projects' | 'contact';

export interface SharedSectionProps {
    index: number;
}

export const sectionsToMetadata: Record<Section, SectionMetadata> = {
    ['about']: {
        navMenuTitle: 'About',
        scrollableId: 'about',
        sectionTitle: 'About Me'
    },
    ['experience']: {
        navMenuTitle: 'Experience',
        scrollableId: 'experience',
        sectionTitle: "Where I've worked"
    },
    ['projects']: {
        navMenuTitle: 'Projects',
        scrollableId: 'projects',
        sectionTitle: "Things I've Built"
    },
    ['contact']: {
        navMenuTitle: 'Contact',
        scrollableId: 'contact',
        sectionTitle: 'Want to talk?'
    }
}

export interface SectionMetadata {
    /** The title shown for each section in the main page */
    sectionTitle: string;
    scrollableId: string;
    /** Indicates the title used in the top nav menu*/
    navMenuTitle: string;
}
