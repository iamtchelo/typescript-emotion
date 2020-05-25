import {compose, setDisplayName, withState} from 'recompose';

const DEFAULT_THEME = 'primary';

const withThemeState = compose(
  withState(
    'theme',
    'setTheme',
    ({renderType = DEFAULT_THEME}: any) => renderType
  )
);

const withTheme = compose(
  setDisplayName('WithTheme.Hoc'),
  withThemeState
);

export {withTheme};
