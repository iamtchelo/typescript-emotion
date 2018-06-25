import { render, shallow } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import * as React from 'react';
import Button from './Button';

describe('<Button />', () => {
  test('should render with default style', () => {
    const tree = render(<Button>My button</Button>);
    expect(renderToJson(tree)).toMatchSnapshot();
  });

  test('should render with actived style', () => {
    const tree = render(<Button actived={true}>My button</Button>);
    expect(renderToJson(tree)).toMatchSnapshot();
  });

  test('should simulate the click button', () => {
    const callback = jest.fn();
    const tree = shallow(<Button onClick={callback}>My button</Button>);

    tree.simulate('click');
    expect(callback).toBeCalled();
  });
});