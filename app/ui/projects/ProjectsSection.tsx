import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";
import SectionContainer from "@/app/ui/SectionContainer";
import FeaturedProject from "@/app/ui/projects/FeaturedProject";
import projects from "@/data/projects";

export default function ProjectsSection(props: SharedSectionProps) {
    const {index} = props;
    return <SectionContainer>
        <div>

            <SectionHeader section={'projects'} index={index}/>
            <br/>
            {projects.map((project, index) => <FeaturedProject key={index} project={project}/>)}
        </div>
    </SectionContainer>

}