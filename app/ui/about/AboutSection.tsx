import {SharedSectionProps} from "@/app/ui/sections";
import SectionHeader from "@/app/ui/SectionHeader";
import SectionContainer from "@/app/ui/SectionContainer";

export default function AboutSection(props: SharedSectionProps) {
    const {index} = props;
    const filler = new Array(100).fill(0).map((_, i) => <br key={i}/>);
    return (<SectionContainer>
        <SectionHeader section={'about'} index={index}/>
        about section
        {filler}
    </SectionContainer>)

}