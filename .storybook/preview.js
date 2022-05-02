import '@folkehelseinstituttet/style/scss/style.scss';
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router";
import FhiTheme from '../src/components/FhiTheme';


export const decorators = [
  (Story) => (
    <ThemeProvider theme={FhiTheme}>
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