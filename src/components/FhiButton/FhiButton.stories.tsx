/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import Button from './FhiButton';

// ๐ This default export determines where your story goes in the story list
export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Fhi/FhiButton',
  component: Button,
} as ComponentMeta<typeof Button>;

// ๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Knapp',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Knapp',
  secondary: true,
};

const OnClickTemplate = ({ ...args }) => {
  const [clicks, setClicks] = useState(0);

  const handleOnClick = () => {
    const numberOfClicks = clicks + 1;
    setClicks(numberOfClicks);
  };

  return (
    <>
      <Button {...args} onClick={handleOnClick}>Click me</Button>
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

export const OnClick = OnClickTemplate.bind({});
