import { css } from 'react-emotion';
import { TitleProps } from './list.elements';

export const listWrapperStyle = () => css``;

export const titleStyle = ({ size = 1 }: TitleProps) => css`
  padding: 15px 0;
  font-size: ${size}em;
  letter-spacing: 1px;
  text-align: center;
  background: #4E3C88;
  color: white;
`;

export const listContentStyle = () => css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 50px auto;
  width: 900px;
`;

export const cardStyle = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  width: 120px;
  background: #E0E0E0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const avatarStyle = () => css`
  padding: 5px;
  border: 5px solid white;
`;

export const pokemonNameStyle = () => css`
  padding: 10px 0;
  text-align: center;
  background: white;
  color: #808080;
`;