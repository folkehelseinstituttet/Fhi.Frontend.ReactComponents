# Fhi.Frontend.ReactComponents

Contains frontend React components used by FHI

## Development

Run `npm start` to start storybook, this will let you view the components during development


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/).

## Using `styled-components`

To be able to access scss variables while using styled-components we added `FhiTheme` to this package.
Just add it to the Theme component from `styled-components` like this:
```js
import { ThemeProvider } from 'styled-components';
import { FhiTheme } from '@folkehelseinstituttet/react-components';

const Theme = ({ children }) =>
  <ThemeProvider theme={FhiTheme}>{children}</ThemeProvider>;
```
and use it like this:
```js
import styled from 'styled-components';

const ColorDiv = styled.div`
  background-color: ${({ theme }) => theme.fhiGreyLight2};
`;
```

Note: The variable naming has changed from snake-case with `$` prefix to camelCase without prefix

Example: `$fhi-grey-light-2` = `fhiGreyLight2`

> ### How the magic works:
> When building this package a script(`generateThemeVariables`) is run to extract all scss variables from `@folkehelseinstituttet/style` and add them to `FhiThemeVariables.json`
> Today it only variables from `@folkehelseinstituttet/style/src/core/_core.variables.scss`, feel free to try to improve :)
