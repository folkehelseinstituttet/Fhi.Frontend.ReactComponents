import '@folkehelseinstituttet/style/import/_all.scss';
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router";

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
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}