/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import FhiToast from './FhiToast';
import FhiToastProvider, { useToast } from './FhiToastProvider';

export default {
  title: 'Fhi/FhiToast',
  component: FhiToast,
  argTypes: { onNavigate: { action: 'clicked' } },
} as ComponentMeta<typeof FhiToast>;

const ToastWrapper = styled.div`
  position: fixed;
  right: 15px;
  top: 15px;
  max-width: 350px;
  z-index: 1;
`;

const Template: ComponentStory<typeof FhiToast> = (args) => (
  <ToastWrapper>
    <FhiToast {...args} />
  </ToastWrapper>
);

const ToastButton = (args) => {
  const { addToast } = useToast();
  return (
    <button
      type="button"
      onClick={() => {
        addToast(args);
        addToast(args);
        addToast(args);
      }}
    >
      Create toast
    </button>
  );
};

const InteractiveTemplate: ComponentStory<typeof FhiToast> = (args) => (
  <FhiToastProvider>
    <ToastButton {...args} />
  </FhiToastProvider>
);

const defaultArgs = {
  id: 1,
  text: 'This is a toast',
};

export const Success = Template.bind({});
Success.args = {
  ...defaultArgs,
  type: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  ...defaultArgs,
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  ...defaultArgs,
  type: 'error',
};

export const Netural = Template.bind({});
Netural.args = {
  ...defaultArgs,
};

export const LongText = Template.bind({});
LongText.args = {
  ...defaultArgs,
  text: 'Ipsum dolor amet turkey andouille sausage tri-tip swine. Filet mignon fatback biltong kevin turkey, porchetta buffalo chicken. Burgdoggen tongue meatball venison. Pig turducken beef ribeye short loin, shank andouille ham pork doner jowl salami sirloin kielbasa meatball.',
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  text: 'This is a toast triggered from a button',
  type: 'success',
  delay: 5000,
};
