import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Card from './Card';

describe('<Card />', () => {
  const props = {
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    title: 'My card'
  }
  
  it('should render with props', () => {
    const tree = shallow(<Card {...props} />);

    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
