import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import themes from './themes';

import Home from './Home';

export default function App() {
  // Dark, Light ou null
  const diviceTheme = useColorScheme();
  const theme = themes[diviceTheme] || themes.ligth;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
