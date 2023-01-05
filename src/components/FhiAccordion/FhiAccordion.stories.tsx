/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FhiAccordion from './FhiAccordion';

export default {
  title: 'Fhi/FhiAccordion',
  component: FhiAccordion,
} as ComponentMeta<typeof FhiAccordion>;

const Template: ComponentStory<typeof FhiAccordion> = (args) => <FhiAccordion {...args} />;

const DefaultContent = () => <div><span>Dette er ustylet innhold</span></div>;

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

export const Normal = Template.bind({});
Normal.args = {
  items: defaultArgs.items,
};

export const Flush = Template.bind({});
Flush.args = {
  items: defaultArgs.items,
  flush: true,
};

export const Alternate = Template.bind({});
Alternate.args = {
  items: defaultArgs.items,
  alternate: true,
};
