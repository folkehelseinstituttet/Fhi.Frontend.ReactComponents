/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

import type { Meta, StoryObj } from '@storybook/react';
import FhiTabs from './FhiTabs';

const meta: Meta<typeof FhiTabs> = { component: FhiTabs };
export default meta;

type Story = StoryObj<typeof FhiTabs>;

export const Normal: Story = {
  args: {
    links: [
      { title: 'Fane nummer 1', path: '/1' },
      { title: 'Fane nummer 2', path: '/2' },
      { title: 'Fane nummer 3', path: '/3' },
      { title: 'Fane nummer 4', path: '/4' },
    ],
  },
};
