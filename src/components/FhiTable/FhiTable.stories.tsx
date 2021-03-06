/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import FhiTable from './FhiTable';

export default {
  title: 'Fhi/FhiTable',
  component: FhiTable,
  argTypes: { onNavigate: { action: 'clicked' } },
} as ComponentMeta<typeof FhiTable>;

const Template: ComponentStory<typeof FhiTable> = (args) => <FhiTable {...args} />;

const defaultArgs = {
  headers: ['Header1', 'Header2'],
  data: [
    {
      key: 1,
      data: ['Testdata1 linje1', 'Testdata2 linje1'],
    },
    {
      key: 2,
      data: ['Testdata1 linje2', 'Testdata2 linje2'],
    },
    {
      key: 3,
      data: ['Testdata1 linje1', 'Testdata2 linje1'],
    },
    {
      key: 4,
      data: ['Testdata1 linje2', 'Testdata2 linje2'],
    },
  ],
};

const clickyData = [
  {
    key: 1,
    link: '/Link/to/1',
    data: ['Clicky rad felt 1', 'Clicky rad felt 2'],
  },
  {
    key: 2,
    link: '/Link/to/2',
    data: ['Clicky rad felt 1', 'Clicky rad felt 2'],
  },
  {
    key: 3,
    link: '/Link/to/2',
    data: ['Clicky rad felt 1', 'Clicky rad felt 2'],
  },
  {
    key: 4,
    link: '/Link/to/2',
    data: ['Clicky rad felt 1', 'Clicky rad felt 2'],
  },
];

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
};

export const Clicky = Template.bind({});
Clicky.args = {
  ...defaultArgs,
  data: clickyData,
};
