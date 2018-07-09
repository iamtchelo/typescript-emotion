import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import ThemeProvider from '../../themes';
import Card from './Card';

describe('<Card />', () => {
  const cardProps = {
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    title: 'My card'
  }
  
  it('should render with props', () => {
    const tree = shallow(
      <ThemeProvider>
        {(props: any) => <Card {...props} {...cardProps} />}
      </ThemeProvider>
    );

    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
