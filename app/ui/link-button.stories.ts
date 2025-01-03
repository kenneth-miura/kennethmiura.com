import LinkButton from "@/app/ui/link-button";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    component: LinkButton,
    args: {
        text: "Say Hello!",
        targetUrl: "https://www.google.com/"
    }
} satisfies Meta<typeof LinkButton>

export default meta;

type Story = StoryObj<typeof LinkButton>

export const Default: Story = {
}

export const LargeButton: Story =  {
    args: {
        size: 'large'

    }
}