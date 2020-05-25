import styled, {css} from 'react-emotion';

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
    right: 15px;
    z-index: -1;
    cursor: pointer;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid white;
  }
`;

const baseSelect = () => css`
  cursor: pointer;
  padding: 0.5rem;
  width: 100%;
  appearance: none;
  border: none;
  outline: none;
  font-size: 15px;
  color: white;
  background: none;
`;

const SelectWrapper = styled('div')`
  ${selectWrapper};
  ${selectArrow};
`;

const SelectStyled = styled('select')`
  ${baseSelect};
`;

export {SelectWrapper, SelectStyled};
