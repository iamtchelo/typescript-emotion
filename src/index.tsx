import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './globalStyle';

import List from './pages/list';
import { RenderType } from './pages/list/list.hoc';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <List renderType={RenderType.Grid} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
