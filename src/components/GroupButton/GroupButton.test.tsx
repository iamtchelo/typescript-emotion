import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import ThemeProvider from '../../themes';
import GroupButton from './GroupButton';

describe('<GroupButton />', () => {
  it('should render with right direction by default', () => {
    const tree = shallow(
      <ThemeProvider>
        {(props: any) => <GroupButton {...props} />}
      </ThemeProvider>
    );

    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render with left direction', () => {
    const tree = shallow(
      <ThemeProvider>
        {(props: any) => <GroupButton direction="left" {...props} />}
      </ThemeProvider>
    );

    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
