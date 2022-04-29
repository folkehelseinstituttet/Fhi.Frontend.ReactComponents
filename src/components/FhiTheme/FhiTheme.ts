let theme;

const getTheme = async () => {
  if (!theme) {
    const response = await fetch('/FhiThemeVariables.json');
    theme = await response.json();
  }
  return theme;
};

export default await getTheme();
