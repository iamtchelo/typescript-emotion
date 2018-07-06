import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import ThemeProvider from './ThemeProvider';

describe('<ThemeProvider />', () => {
  it('should render with a default theme', () => {
    const tree = shallow(<ThemeProvider />);

    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render with a theme prop', () => {
    const tree = shallow(<ThemeProvider theme="secondary" />);

    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
