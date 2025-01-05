import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";
import SectionContainer from "@/app/ui/SectionContainer";

export default function ExperienceSection(props: SharedSectionProps) {
    const {index} = props;
    return <SectionContainer>
        <SectionHeader section={'experience'} index={index}/>
        about section
    </SectionContainer>

}