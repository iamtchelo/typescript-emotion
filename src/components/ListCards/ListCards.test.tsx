import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import ThemeProvider from '../../themes';
import ListCards from './ListCards';

describe('<ListCards />', () => {
  it('should render grid by default', () => {
    const tree = shallow(
      <ThemeProvider>
        {(props: any) => <ListCards {...props} />}
      </ThemeProvider>
    );

    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render list', () => {
    const tree = shallow(
      <ThemeProvider>
        {(props: any) => <ListCards renderType="list" {...props} />}
      </ThemeProvider>
    );
    
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});