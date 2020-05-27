import {ThemeProvider as Provider} from 'emotion-theming';
import * as React from 'react';
import primaryTheme from './primary';
import secondaryTheme from './secondary';
import tertiaryTheme from './tertiary';

const themes = {
  primary: primaryTheme,
  secondary: secondaryTheme,
  tertiary: tertiaryTheme,
};

type Theme = 'primary' | 'secondary' | 'tertiary';

interface ThemeProviderProps {
  theme?: Theme;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme = 'primary',
  children,
}) => <Provider theme={themes[theme]}>{children}</Provider>;

export {ThemeProvider};
