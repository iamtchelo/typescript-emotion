import { ThemeProvider as Provider } from 'emotion-theming';
import * as React from 'react';
import primaryTheme from './primary';
import secondaryTheme from './secondary';

const themes = {
  primary: primaryTheme,
  secondary: secondaryTheme
};

export interface ThemeProviderProps {
  theme?: 'primary' | 'secondary'
};

const ThemeProvider: React.SFC<ThemeProviderProps> = ({
  theme = 'primary', 
  children
}) => (
  <Provider theme={themes[theme]}>
    {children}
  </Provider>
);

export default ThemeProvider;
