import { ThemeProvider as Provider } from 'emotion-theming';
import * as React from 'react';
import { ComponentEnhancer, compose, setDisplayName ,withState } from 'recompose';
import primaryTheme from './primary';
import secondaryTheme from './secondary';

const themes = {
  primary: primaryTheme,
  secondary: secondaryTheme
};

export interface ThemeProviderProps {
  theme?: 'primary' | 'secondary';
  children?: React.SFC<any>;
};

export interface ThemeProviderDispatches {
  setTheme: (theme: 'primary' | 'secondary') => void;
};

export type EnhancedThemeProviderProps = ThemeProviderProps & ThemeProviderDispatches;

const ThemeProvider: React.SFC<EnhancedThemeProviderProps> = ({
  theme = 'primary',
  setTheme,
  children
}) => (
  <Provider theme={themes[theme]}>
    {children && children({ theme, setTheme })}
  </Provider>
);

const withTheme = compose(
  withState('theme', 'setTheme', ({ theme = 'primary' }: any) => theme)
);

const enhance = compose(
  setDisplayName('ThemeProvider'),
  withTheme
) as ComponentEnhancer<EnhancedThemeProviderProps, ThemeProviderProps>

export default enhance(ThemeProvider);
