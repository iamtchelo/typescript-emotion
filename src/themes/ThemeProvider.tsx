import {ThemeProvider as Provider} from 'emotion-theming';
import * as React from 'react';
import primaryTheme from './primary';
import secondaryTheme from './secondary';

const themes = {
  primary: primaryTheme,
  secondary: secondaryTheme,
};

type Theme = 'primary' | 'secondary';

interface ThemeProviderProps {
  theme?: Theme;
}

const ThemeProvider: React.SFC<ThemeProviderProps> = ({
  theme = 'primary',
  children,
}) => <Provider theme={themes[theme]}>{children}</Provider>;

export {ThemeProvider};
