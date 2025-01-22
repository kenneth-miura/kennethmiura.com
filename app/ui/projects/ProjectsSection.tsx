import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";
import SectionContainer from "@/app/ui/SectionContainer";
import projects from "@/data/projects";
import ProjectCard from "@/app/ui/projects/ProjectCard";

export default function ProjectsSection(props: SharedSectionProps) {
    const {index} = props;
    return <SectionContainer>
        <div>

            <div className='mb-5'>
                <SectionHeader section={'projects'} index={index}/>
            </div>
            <div className={'grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-6'}>
                {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
            </div>
        </div>
    </SectionContainer>

}