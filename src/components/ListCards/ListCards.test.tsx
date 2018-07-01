import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import ListCards from './ListCards';

describe('<ListCards />', () => {
  it('should render grid by default', () => {
    const tree = shallow(<ListCards />);

    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render list', () => {
    const tree = shallow(<ListCards renderType="list" />);
    
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});