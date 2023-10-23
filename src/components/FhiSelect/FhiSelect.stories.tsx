/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Select from './FhiSelect';

const meta: Meta<typeof Select> = { component: Select };
export default meta;

type Story = StoryObj<typeof Select>;

const SelectTemplate = ({ ...args }) => {
  const [verdi, setVerdi] = useState(undefined);

  const handleOnChange = (v) => setVerdi(v);

  return (
    <Select
      id={args.id}
      label={args.label}
      options={args.options}
      placeholder="Please choose"
      value={verdi}
      onChange={handleOnChange}
    />
  );
};

export const Normal: Story = {
  render: SelectTemplate,
  args: {
    id: 'selectId',
    label: 'Select',
    options: [
      { id: '1', text: 'Option 1', value: 1 },
      { id: '2', text: 'Option 2', value: 2 },
      { id: '3', text: 'Option 3', value: 3 },
      { id: '4', text: 'Option 4', value: 4 },
      { id: '5', text: 'Option 5', value: 5 },
    ],
  },
};
