import { Theme } from '@carbon/react';
import '@carbon/styles/css/styles.css';
import '../src/App.scss';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#161616',
        },
        {
          name: 'gray',
          value: '#f4f4f4',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <Theme theme="g10">
        <Story />
      </Theme>
    ),
  ],
};

export default preview;

// Made with Bob
