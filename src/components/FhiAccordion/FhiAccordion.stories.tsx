/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FhiAccordion from './FhiAccordion';

export default {
  title: 'Fhi/FhiAccordion',
  component: FhiAccordion,
} as ComponentMeta<typeof FhiAccordion>;

const Template: ComponentStory<typeof FhiAccordion> = (args) => <FhiAccordion {...args} />;

const DefaultHeader = () => <h4>Dette er en ustylet overskrift</h4>;
const DefaultContent = () => <div><span>Dette er ustylet innhold</span></div>;

const defaultArgs = {
  items: [
    {
      id: '1',
      header: <DefaultHeader />,
      content: <DefaultContent />,
    },
    {
      id: '2',
      header: <DefaultHeader />,
      content: <DefaultContent />,
    },
    {
      id: '3',
      header: <DefaultHeader />,
      content: <DefaultContent />,
    },
    {
      id: '4',
      header: <DefaultHeader />,
      content: <DefaultContent />,
    },
  ],
  arrowIcon: faAngleDown,
};

export const Normal = Template.bind({});

Normal.args = {
  items: defaultArgs.items,
  arrowIcon: defaultArgs.arrowIcon,
};
