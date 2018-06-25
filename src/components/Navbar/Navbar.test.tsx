import { render } from 'enzyme';
import * as React from 'react';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('should render a default navbar with a title', () => {
    const tree = render(<Navbar title="My navbar" />);
    expect(tree).toMatchSnapshot();
  });
});