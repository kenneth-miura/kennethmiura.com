import website from './website.json';
import teclab from './tecl.json';
import torontoFitness from './toronto-fitness.json';
import tpp from './tpp.json';
import budgetTracker from './budget-tracker.json';
import compiler from './compiler.json';

export type LinkableText = string | {text: string, url: string};
interface ImageData {
    imagePath: string;
    altImageText: string;
}
export interface Project {
    title: string;
    description: LinkableText[];
    url?: string;
    githubUrl?: string;
    techStack: string[];
    imageData?: ImageData;
}

const projects: Project[] = [ compiler, website, torontoFitness, teclab, tpp, budgetTracker,];

export default projects;