import website from './website.json';
import teclab from './tecl.json';
import torontoFitness from './toronto-fitness.json';
import tpp from './tpp.json';

export type LinkableText = string | {text: string, url: string};
interface ImageData {
    imagePath: string;
    altImageText: string;
}
export interface Project {
    title: string;
    description: LinkableText[];
    url?: string;
    githubUrl: string;
    techStack: string[];
    imageData?: ImageData;
};

const projects: Project[] = [website, torontoFitness, teclab, tpp];

export default projects;