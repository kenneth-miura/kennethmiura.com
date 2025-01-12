import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";
import SectionContainer from "@/app/ui/SectionContainer";
import dynamic from "next/dynamic";


// We need to do this because the experience selector uses the window object, which is not available on the server
const DynamicExperienceSelector = dynamic(
    () => import('@/app/ui/experience/ExperienceSelector'),
    { ssr: false }
)
export default function ExperienceSection(props: SharedSectionProps) {
    const {index} = props;
    return <SectionContainer>
        <div>

        <SectionHeader section={'experience'} index={index}/>
        <div className='mt-6'>
            <DynamicExperienceSelector/>
        </div>
        </div>
    </SectionContainer>

}