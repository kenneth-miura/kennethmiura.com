import website from './website.json';

export type LinkableText = string | {text: string, url: string};
export interface Project {
    title: string;
    description: LinkableText[];
    url: string;
    githubUrl: string;
    techStack: string[];
    imagePath: string;
    altImageText: string;
};

const projects: Project[] = [website];

export default projects;