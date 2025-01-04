import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";

export default function ExperienceSection(props: SharedSectionProps) {
    const {index} = props;
    return <div>
        <SectionHeader section={'experience'} index={index}/>
        about section
    </div>

}