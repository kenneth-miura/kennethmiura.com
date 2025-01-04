import Header from "@/app/ui/Header";
import {Meta} from "@storybook/react";

const meta = {
    component: Header,
    args: {
        menuOpen: false,
        toggleMenuOpen: () => {
        }
    },
    decorators: [
        (Story) => {
            const filler = new Array(10).fill(0).map((_, i) => <div className='w-full h-96'
                                                                    key={i}> Start: {new Array(10).fill(0).map(j => <br
                key={j}/>)} End</div>);

            return (<> <Story/> {filler} </>);

        }
    ]
} satisfies Meta<typeof Header>;

export default meta;

export const Default = {}

