import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";
import SectionContainer from "@/app/ui/SectionContainer";
import ExperienceSelector from "@/app/ui/experience/ExperienceSelector";

export default function ExperienceSection(props: SharedSectionProps) {
    const {index} = props;
    return <SectionContainer>
        <SectionHeader section={'experience'} index={index}/>
        <div className='mt-6'>
            <ExperienceSelector/>
        </div>
    </SectionContainer>

}