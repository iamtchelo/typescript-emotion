import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import GroupButton from './GroupButton';

describe('<GroupButton />', () => {
  it('should render with right direction by default', () => {
    const tree = shallow(<GroupButton />);

    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render with left direction', () => {
    const tree = shallow(<GroupButton direction="left" />);

    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
