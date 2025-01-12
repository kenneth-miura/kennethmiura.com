import _ from "lodash";
import disneyJson from './disney.json';
import palantirJson from './palantir.json';
import wanderlogJson from './wanderlog.json';

interface RawJob {
    startDate: string;
    endDate: string;
    company: string;
    url: string;
    experienceBullets: string[];
    title: string;
}

export interface Job {
    startDate: Date;
    endDate: Date;
    company: string;
    url: string;
    experienceBullets: string[];
    title: string;
}

function parseRawJob(rawJob: RawJob): Job {
    return {
        startDate: new Date(rawJob.startDate),
        endDate: new Date(rawJob.endDate),
        company: rawJob.company,
        url: rawJob.url,
        experienceBullets: rawJob.experienceBullets,
        title: rawJob.title
    }
}


const jobs = [disneyJson, palantirJson, wanderlogJson].map(job => parseRawJob(job));

export const sortedJobs = _.sortBy(jobs, 'startDate').reverse();
