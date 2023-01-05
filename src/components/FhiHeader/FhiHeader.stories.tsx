/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import FhiHeader from './FhiHeader';


export default {
  title: 'Fhi/FhiHeader',
  component: FhiHeader,
} as ComponentMeta<typeof FhiHeader>;

const Template: ComponentStory<typeof FhiHeader> = (args) => <FhiHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  projectName: 'Fhi React components',
  menuItems: [
    { name: 'Menu item 1', routerLink: '/1' },
    { name: 'Menu item 2', routerLink: '/2' },
    { name: 'Menu item 3', routerLink: '/3' },
    { name: 'Menu item 4', routerLink: '/4' },
  ],
};

export const UtenMeny = Template.bind({});
UtenMeny.args = {
  projectName: 'Fhi React components',
};
