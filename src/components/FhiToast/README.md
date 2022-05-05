# FhiToast

Toast components used by FHI

## Usage

Wrap your application in the toast provider like so:

```tsx
import { ThemeProvider } from 'styled-components';
import { fhiTheme, FhiToastProvider } from '@folkehelseinstituttet/react-components';
import Router from './Router';

const App = () => (
  <ThemeProvider theme={fhiTheme}>
    <FhiToastProvider>
      <Router />
    </FhiToastProvider>
  </ThemeProvider>
);

export default App;
```

Use the UseFhiToast like this to create toast-messages:

```tsx
import { useFhiToast } from '@folkehelseinstituttet/react-components';

const Component = () => {
  const { addToast } = useFhiToast();
  
  return (
    <button onClick={ () => addToast({type: 'success', text: 'Button was clicked!'})}>ClickMe</button>
  )
};

export default Component;
```

## Styling

To change the default colors of the toasts add the following props to your theme:
```
    toastNetural
    toastSuccess
    toastWarning
    toastError
```