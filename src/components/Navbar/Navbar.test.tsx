import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import * as React from 'react';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('should render a default navbar with a title', () => {
    const tree = render(<Navbar title="My navbar" />);
    expect(renderToJson(tree)).toMatchSnapshot();
  });
});