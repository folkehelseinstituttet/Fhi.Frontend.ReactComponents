/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

import type { Meta, StoryObj } from '@storybook/react';
import FhiHeader from './FhiHeader';

const meta: Meta<typeof FhiHeader> = { component: FhiHeader };
export default meta;

type Story = StoryObj<typeof FhiHeader>;

export const Normal: Story = {
  args: {
    projectName: 'Fhi React components',
    menuItems: [
      { name: 'Menu item 1', routerLink: '/1' },
      { name: 'Menu item 2', routerLink: '/2' },
      { name: 'Menu item 3', routerLink: '/3' },
      { name: 'Menu item 4', routerLink: '/4' },
    ],
  },
};

export const UtenMeny: Story = {
  args: {
    projectName: 'Fhi React components',
  },
};
