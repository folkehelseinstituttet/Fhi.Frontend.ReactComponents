/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import FhiTabs from './FhiTabs';

export default {
  title: 'Fhi/FhiTabs',
  component: FhiTabs,
} as ComponentMeta<typeof FhiTabs>;

const Template: ComponentStory<typeof FhiTabs> = (args) => <FhiTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  links: [
    { title: 'Fane nummer 1', path: '/1' },
    { title: 'Fane nummer 2', path: '/2' },
    { title: 'Fane nummer 3', path: '/3' },
    { title: 'Fane nummer 4', path: '/4' },
  ],
};
