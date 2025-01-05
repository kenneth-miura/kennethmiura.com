import ProfileImage from "@/app/ui/about/ProfileImage";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    component: ProfileImage,
    args: {
        imagePath: "/pfp.jpg"
    }
} satisfies Meta<typeof ProfileImage>

export default meta;
type Story = StoryObj<typeof ProfileImage>

export const Default: Story = {};
