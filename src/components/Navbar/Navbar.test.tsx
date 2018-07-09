import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import * as React from 'react';
import ThemeProvider from '../../themes';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('should render a default navbar with a title', () => {
    const tree = render(
      <ThemeProvider>
        {(props: any) => <Navbar title="My navbar" {...props} />}
      </ThemeProvider>
    );
    expect(renderToJson(tree)).toMatchSnapshot();
  });
});