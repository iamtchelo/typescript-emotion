import styled from 'react-emotion';

export const CardWrapper = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background: ${(props: any) => props.theme.colors.primary};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-out;

  &:hover {
    background: ${(props: any) => props.theme.colors.primaryHover};
  }

  &:nth-child(even):hover {
    transform: scale(1.15) rotate(10deg);
  }

  &:nth-child(odd):hover {
    transform: scale(1.15) rotate(-10deg);
  }
`;

export const CardImage = styled('img')`
  margin: auto;
  padding: 5px;
  width: 100%;
  height: auto;
  border: 5px solid ${(props: any) => props.theme.colors.white};
`;

export const CardTitle = styled('h4')`
  padding: 10px 0;
  text-align: center;
  background: ${(props: any) => props.theme.colors.white};
  font-weight: normal;
  text-transform: capitalize;
  color: ${(props: any) => props.theme.card.cardTitle};
`;
