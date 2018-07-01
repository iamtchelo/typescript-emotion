import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { primaryTheme } from './themes';

import './globalStyle';

import List from './pages/list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={primaryTheme}>
    <List />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
