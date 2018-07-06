import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import ThemeProvider from '../../themes';
import ListCards from './ListCards';

describe('<ListCards />', () => {
  it('should render grid by default', () => {
    const tree = shallow(
      <ThemeProvider>
        <ListCards />
      </ThemeProvider>
    );

    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render list', () => {
    const tree = shallow(
      <ThemeProvider>
        <ListCards renderType="list" />
      </ThemeProvider>
    );
    
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});