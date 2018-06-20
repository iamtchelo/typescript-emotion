import { injectGlobal } from 'emotion';

const globalStyle = injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font: 16px Arial, Helvetica, sans-serif;
    background: #F4F4F4;
  }
`;

export default globalStyle;