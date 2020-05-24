import styled, {css} from 'react-emotion';
import {GridProps} from './Grid';

const gridBase = () => css`
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: auto;
`;

const gridDefault = ({renderType}: GridProps) =>
  renderType === 'grid' &&
  css`
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  `;

const gridList = ({renderType}: GridProps) =>
  renderType === 'list' &&
  css`
    justify-content: center;
    grid-auto-columns: minmax(max-content, 250px);
  `;

const GridStyled = styled('div')`
  ${gridBase};
  ${gridDefault};
  ${gridList};
`;

export {GridStyled};
