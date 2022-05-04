/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import FhiTabBar from './FhiTabBar';

export default {
  title: 'Fhi/FhiTabBar',
  component: FhiTabBar,
} as ComponentMeta<typeof FhiTabBar>;

const Template: ComponentStory<typeof FhiTabBar> = (args) => <FhiTabBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  links: [
    { title: 'Side 1', path: '/1' },
    { title: 'Side 2', path: '/2' },
    { title: 'Side 3', path: '/3' },
  ],
};
