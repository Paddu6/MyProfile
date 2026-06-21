import TimelineItem from './TimelineItem';

export default {
  title: 'Components/TimelineItem',
  component: TimelineItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'text' },
    title: { control: 'text' },
    company: { control: 'text' },
    description: { control: 'text' },
    isVolunteer: { control: 'boolean' },
  },
};

export const Professional = {
  args: {
    date: '01/2024 - Current',
    title: 'Sr Engineering Software Manager',
    company: 'IBM Maximo - Lowell, MA',
    description: [
      'Led globally distributed Maximo engineering teams with a quality-first mindset.',
      'Championed strategic hiring and talent development.',
      'Leading the delivery of multiple Maximo product releases.',
    ],
    tags: ['Leadership', 'Quality Engineering', 'Agile', 'CI/CD', 'DevOps'],
    isVolunteer: false,
  },
};

export const Volunteer = {
  args: {
    date: '2022 - Present',
    title: 'Community Volunteer',
    company: 'Local Organization',
    description: 'Leading community initiatives and mentoring programs to support local youth development.',
    tags: ['Community Service', 'Mentorship', 'Leadership'],
    isVolunteer: true,
  },
};

export const WithListDescription = {
  args: {
    date: '03/2021 - Current',
    title: 'Director, Software Engineering',
    company: 'Upland Software',
    description: [
      'Led a high-performing engineering team overseeing 3 mobile messaging products.',
      'Directed a diverse, global team of over 45 professionals.',
      'Implemented transformational practices improving build velocity.',
    ],
    tags: ['Engineering Leadership', 'Global Teams', 'Product Strategy'],
    isVolunteer: false,
  },
};

export const WithStringDescription = {
  args: {
    date: '08/2010 - 06/2013',
    title: 'Test Architect for ClearCase',
    company: 'IBM',
    description: 'Led test architecture and strategy for IBM ClearCase, ensuring robust version control solutions.',
    tags: ['Test Architecture', 'Version Control'],
    isVolunteer: false,
  },
};

export const MinimalInfo = {
  args: {
    date: '2020 - 2022',
    title: 'Software Engineer',
    company: 'Tech Company',
    description: 'Developed and maintained software applications.',
    tags: [],
    isVolunteer: false,
  },
};

// Made with Bob
