import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import * as React from 'react';
import ThemeProvider from '../../themes';
import Button from './Button';

describe('<Button />', () => {
  test('should render with default style', () => {
    const tree = render(
      <ThemeProvider>
        {(props: any) => <Button {...props}>My button</Button>}
      </ThemeProvider>
    );
    expect(renderToJson(tree)).toMatchSnapshot();
  });

  test('should render with actived style', () => {
    const tree = render(
      <ThemeProvider>
        {(props: any) => <Button actived={true} {...props}>My button</Button>}
      </ThemeProvider>
    );
    expect(renderToJson(tree)).toMatchSnapshot();
  });
});