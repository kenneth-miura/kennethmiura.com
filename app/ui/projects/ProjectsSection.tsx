import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";

export default function ProjectsSection(props: SharedSectionProps) {
    const {index} = props;
    return <div>
        <SectionHeader section={'projects'} index={index}/>
        about section
    </div>

}