/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

import type { Meta, StoryObj } from '@storybook/react';
import FhiDetails from './FhiDetails';

const meta: Meta<typeof FhiDetails> = { component: FhiDetails };
export default meta;

type Story = StoryObj<typeof FhiDetails>;

const defaultArgs = {
  items: [
    {
      title: 'Dette er en tittel',
      text: 'Dette er beskrivelse',
    },
    {
      title: 'Liten tittel',
      text: 'Kort tekst',
    },
    {
      title: 'En litt lenger tittel',
      text: `En ganske så lang tekst som egentlig burde vært en ipsum lorem men jeg
        fant ut at det var raskere å skrive dette enn å finne frem ipsum generatoren..`,
    },
    {
      title: 'Test',
      text: 'test',
    },
  ],
};

export const Normal: Story = {
  args: {
    items: defaultArgs.items,
  },
};
