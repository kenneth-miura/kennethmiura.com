import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";
import SectionContainer from "@/app/ui/SectionContainer";

export default function ProjectsSection(props: SharedSectionProps) {
    const {index} = props;
    return <SectionContainer>
        <SectionHeader section={'projects'} index={index}/>
        about section
    </SectionContainer>

}