import styled, {css} from 'react-emotion';

const selectContainer = () => css`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  row-gap: 0.4rem;
`;

const selectWrapper = () => css`
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 130px;
  border-radius: 5px;
  border: 1px solid white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    width: 160px;
  }
`;

const selectArrow = () => css`
  &:after {
    content: '';
    position: absolute;
    top: 15px;
    right: 0.5rem;
    z-index: -1;
    cursor: pointer;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid white;
  }
`;

const labelBase = () => css`
  color: black;
  font-size: 16px;
  font-weight: 400;
`;

const baseSelect = () => css`
  cursor: pointer;
  padding: 0.5rem;
  width: 100%;
  appearance: none;
  border: none;
  outline: none;
  font-size: 14px;
  color: white;
  background: none;
`;

const SelectContainer = styled('div')`
  ${selectContainer};
`;

const SelectWrapper = styled('div')`
  ${selectWrapper};
  ${selectArrow};
`;

const Label = styled('label')`
  ${labelBase};
`;

const SelectStyled = styled('select')`
  ${baseSelect};
`;

export {SelectContainer, SelectWrapper, Label, SelectStyled};
