import Navigation from './Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => <Navigation />,
};

export const WithScrolledState = {
  render: () => {
    // Simulate scrolled state
    return (
      <div style={{ height: '200vh' }}>
        <Navigation />
        <div style={{ padding: '100px 20px' }}>
          <p>Scroll down to see the navigation behavior</p>
        </div>
      </div>
    );
  },
};

// Made with Bob
