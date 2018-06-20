import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './globalStyle';

import List from './pages/list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <List />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
