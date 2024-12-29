import {Meta, StoryObj} from "@storybook/react";
import ContactSection from "@/app/ui/contact/contact-section";

const meta = {
    component: ContactSection
} satisfies Meta<typeof ContactSection>

export default meta;

type Story = StoryObj<typeof ContactSection>

export const Example: Story = {
}