import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ThemeProvider from './themes';

import './globalStyle';

import List from './pages/list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider>
    {(props: any) => (
      <List {...props} />
    )}
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
