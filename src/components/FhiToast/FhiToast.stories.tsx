import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import FhiToast from './FhiToast';
import FhiToastProvider, { useToast } from './FhiToastProvider';

const meta: Meta<typeof FhiToast> = { component: FhiToast };
export default meta;

type Story = StoryObj<typeof FhiToast>;

const ToastWrapper = styled.div`
  position: fixed;
  right: 15px;
  top: 15px;
  max-width: 350px;
  z-index: 1;
`;

const Template: StoryFn<typeof FhiToast> = (args) => (
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
        addToast({ ...args, delay: 2000 });
        addToast({ ...args, title: 'Success', type: 'success' });
        addToast({ ...args, title: 'Warning', type: 'warning' });
        addToast({ ...args, title: 'Error', type: 'error' });
        addToast({
          ...args,
          delay: 0,
          title: 'Error',
          text: 'This toast will not disappear',
          type: 'error',
        });
      }}
    >
      Create toasts
    </button>
  );
};

const InteractiveTemplate: StoryFn<typeof FhiToast> = (args) => (
  <FhiToastProvider>
    <ToastButton {...args} />
  </FhiToastProvider>
);

const defaultArgs = {
  id: 1,
  text: 'This is a toast',
};

export const Success: Story = {
  render: Template,

  args: {
    ...defaultArgs,
    type: 'success',
  },
};

export const Warning: Story = {
  render: Template,

  args: {
    ...defaultArgs,
    type: 'warning',
  },
};

export const Error: Story = {
  render: Template,

  args: {
    ...defaultArgs,
    type: 'error',
  },
};

export const Netural: Story = {
  render: Template,

  args: {
    ...defaultArgs,
  },
};

export const LongText: Story = {
  render: Template,

  args: {
    ...defaultArgs,
    text: 'Ipsum dolor amet turkey andouille sausage tri-tip swine. Filet mignon fatback biltong kevin turkey, porchetta buffalo chicken. Burgdoggen tongue meatball venison. Pig turducken beef ribeye short loin, shank andouille ham pork doner jowl salami sirloin kielbasa meatball.',
  },
};

export const Interactive: Story = {
  render: InteractiveTemplate,

  args: {
    text: 'This is a toast triggered from a button',
    delay: 5000,
  },
};
