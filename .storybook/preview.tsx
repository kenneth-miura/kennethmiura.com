import type {Preview} from "@storybook/react";
import '../app/globals.scss';
import {inter} from '@/app/ui/fonts';

const preview: Preview = {
    decorators: [(Story) => (<div className={`font-inter ${inter.variable}`}><Story/></div>)
    ],
    parameters: {
        backgrounds: {
            values: [{
                // Keep in sync with background color in AllVariables.global.scss
                name: 'Dark', value: '#0a192f'
            }],
            default: 'Dark'
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
