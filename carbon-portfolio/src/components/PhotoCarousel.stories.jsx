import PhotoCarousel from './PhotoCarousel';

export default {
  title: 'Components/PhotoCarousel',
  component: PhotoCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => <PhotoCarousel />,
};

export const WithCustomBackground = {
  render: () => (
    <div style={{ background: '#f4f4f4', padding: '2rem 0' }}>
      <PhotoCarousel />
    </div>
  ),
};

// Made with Bob
