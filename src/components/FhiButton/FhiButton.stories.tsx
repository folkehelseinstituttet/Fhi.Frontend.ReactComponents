/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Button from './FhiButton';

const meta: Meta<typeof Button> = { component: Button };
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Knapp',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Knapp',
    secondary: true,
  },
};

const OnClickTemplate = ({ ...args }) => {
  const [clicks, setClicks] = useState(0);

  const handleOnClick = () => {
    const numberOfClicks = clicks + 1;
    setClicks(numberOfClicks);
  };

  return (
    <>
      <Button {...args} onClick={handleOnClick}>
        Click me
      </Button>
      <p>
        Button clicked
        {' '}
        {clicks}
        {' '}
        times
      </p>
    </>
  );
};

export const OnClick = {
  render: OnClickTemplate,
};
