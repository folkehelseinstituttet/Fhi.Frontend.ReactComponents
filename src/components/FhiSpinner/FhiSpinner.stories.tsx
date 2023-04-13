/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import type { StoryObj, Meta } from '@storybook/react';

import Spinner from './FhiSpinner';

const meta: Meta<typeof Spinner> = { component: Spinner };
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {},
};
