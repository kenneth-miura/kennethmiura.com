import NavigationMenu from "@/app/ui/NavigationMenu";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    component: NavigationMenu,
    args: {
        toggleMenuOpen: () => {},
        menuOpen: false
    }
} satisfies Meta<typeof NavigationMenu>


export default meta;

type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
}
export const MobileMenuOpen: Story = {
    parameters: {
        viewport: {defaultViewport: 'mobile2'}
    },
    args: {
        menuOpen: true
    }
}
export const MobileMenuClosed: Story = {
    parameters: {
        viewport: {defaultViewport: 'mobile2'}
    },
    args: {
        menuOpen: false
    }

}
