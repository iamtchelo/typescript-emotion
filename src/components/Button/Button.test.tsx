import { render, shallow } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import * as React from 'react';
import ThemeProvider from '../../themes';
import Button from './Button';

describe('<Button />', () => {
  test('should render with default style', () => {
    const tree = render(
      <ThemeProvider>
        <Button>My button</Button>
      </ThemeProvider>
    );
    expect(renderToJson(tree)).toMatchSnapshot();
  });

  test('should render with actived style', () => {
    const tree = render(
      <ThemeProvider>
        <Button actived={true}>My button</Button>
      </ThemeProvider>
    );
    expect(renderToJson(tree)).toMatchSnapshot();
  });

  test('should simulate the click button', () => {
    const callback = jest.fn();
    const tree = shallow(
      <ThemeProvider>
        <Button onClick={callback}>My button</Button>
      </ThemeProvider>
    );

    tree.children().simulate('click');
    expect(callback).toBeCalled();
  });
});