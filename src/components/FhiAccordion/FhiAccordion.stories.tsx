/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';

import FhiAccordion from './FhiAccordion';

const meta: Meta<typeof FhiAccordion> = { component: FhiAccordion };
export default meta;

type Story = StoryObj<typeof FhiAccordion>;

const DefaultContent = () => (
  <div>
    <span>Dette er ustylet innhold</span>
  </div>
);

const defaultArgs = {
  items: [
    {
      id: '1',
      header: 'Item #1',
      content: <DefaultContent />,
    },
    {
      id: '2',
      header: 'Item #2',
      content: <DefaultContent />,
    },
    {
      id: '3',
      header: 'Item #3',
      content: <DefaultContent />,
    },
    {
      id: '4',
      header: 'Item #4',
      content: <DefaultContent />,
    },
  ],
};

export const Normal: Story = {
  args: {
    items: defaultArgs.items,
  },
};

export const Flush: Story = {
  args: {
    items: defaultArgs.items,
    flush: true,
  },
};

export const Alternate: Story = {
  args: {
    items: defaultArgs.items,
    alternate: true,
  },
};
