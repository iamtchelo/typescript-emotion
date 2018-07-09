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

  it('theme should be primary by default', () => {
    const wrapper = shallow(<ThemeProvider />);

    expect(wrapper.props().theme).toEqual('primary')
  });

  // it('should change theme', () => {
  //   const wrapper = mount(<EnhancedComponent />);
  //   const { setTheme } = wrapper.find<EnhancedListProps>(Base).props();

  //   setTheme('secondary');
  //   wrapper.update();

  //   const { theme } = wrapper.find<EnhancedListProps>(Base).props();
  //   expect(theme).toEqual('secondary');
  // });
});
