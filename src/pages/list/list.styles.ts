import { css } from 'react-emotion';
import { ListItem, TitleProps } from './list.elements';

export const listWrapperStyle = () => css``;

export const containerStyle = () => css`
  width: 950px;
  margin: auto;
`;

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
  justify-content: space-around;
  margin-top: 30px;
`;

export const cardStyle = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  width: 120px;
  background: #E0E0E0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-out;

  &:nth-child(even):hover {
    transform: scale(1.15) rotate(10deg);
  }

  &:nth-child(odd):hover {
    transform: scale(1.15) rotate(-10deg);
  }
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

export const listNavStyle = () => css`
  display: flex;
  padding: 40px 40px 0 0;
  flex-direction: row-reverse;
`;

export const listNavItemStyle = () => css`
  padding: 10px 40px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  border: 1px solid #7769A2;
  color: #414141;
  background: white;
  transition: background 0.1s linear, color 0.2s ease-out;

  &:first-child {
    border-left: none;
  }
`;

export const listNavItemActivedStyle = ({ actived }: ListItem) => actived && css`
  background: #4E3C88;
  color: white;
`;
