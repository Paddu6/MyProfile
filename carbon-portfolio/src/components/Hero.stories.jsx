import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => <Hero />,
};

export const WithCustomTheme = {
  render: () => <Hero />,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

// Made with Bob
