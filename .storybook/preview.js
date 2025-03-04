import '@folkehelseinstituttet/style/import/_all.scss';
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router";
import { fn } from '@storybook/test';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{}}>
      <Story />
    </ThemeProvider>
  ),
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story/>
    </MemoryRouter>
  ),
];

export const parameters = {
  args: { onClick: fn() },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const tags = ['autodocs'];