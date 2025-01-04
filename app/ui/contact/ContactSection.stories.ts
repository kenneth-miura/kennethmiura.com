import {Meta, StoryObj} from "@storybook/react";
import ContactSection from "@/app/ui/contact/ContactSection";

const meta = {
    component: ContactSection,
    args: {
        index: 3
    }
} satisfies Meta<typeof ContactSection>

export default meta;

type Story = StoryObj<typeof ContactSection>

export const Example: Story = {
}