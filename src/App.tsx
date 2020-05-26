import * as React from 'react';
import {compose} from 'recompose';
import {BaseLayout} from './components/Layouts';
import {withRender, withTheme} from './hocs';
import {List} from './pages/List';
import {ThemeProvider} from './themes';

const enhance = compose(
  withTheme,
  withRender
);

const App: React.FunctionComponent<any> = ({
  theme,
  renderType,
  setTheme,
  setRenderType,
}: any) => (
  <ThemeProvider theme={theme}>
    <BaseLayout setTheme={setTheme} setRenderType={setRenderType}>
      <List renderType={renderType} />
    </BaseLayout>
  </ThemeProvider>
);

export default enhance(App);
