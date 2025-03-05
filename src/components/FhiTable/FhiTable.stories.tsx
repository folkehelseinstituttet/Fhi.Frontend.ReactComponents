import type { Meta, StoryObj } from '@storybook/react';
import FhiTable from './FhiTable';

const meta: Meta<typeof FhiTable> = {
  component: FhiTable,
  argTypes: { onNavigate: { action: 'clicked' } },
};
export default meta;

type Story = StoryObj<typeof FhiTable>;

const defaultArgs = {
  headers: ['Header1', 'Header2'],
  data: [
    {
      key: 1,
      selected: false,
      data: ['Testdata1 linje1', 'Testdata2 linje1'],
    },
    {
      key: 2,
      selected: false,
      data: ['Testdata1 linje2', 'Testdata2 linje2'],
    },
    {
      key: 3,
      selected: false,
      data: ['Testdata1 linje3', 'Testdata2 linje3'],
    },
    {
      key: 4,
      selected: false,
      data: [<b>Testdata1 linje4 (Med bold)</b>, 'Testdata2 linje4'],
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
    link: '/Link/to/3',
    data: ['Clicky rad felt 1', 'Clicky rad felt 2'],
  },
  {
    key: 4,
    link: '/Link/to/4',
    data: [<b>Clicky rad felt 1 (Med bold tekst)</b>, 'Clicky rad felt 2'],
  },
];

export const Normal: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Compact: Story = {
  args: {
    ...defaultArgs,
    compact: true,
  },
};

export const Clicky: Story = {
  args: {
    ...defaultArgs,
    data: clickyData,
    hover: true,
  },
};
