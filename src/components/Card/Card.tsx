import * as React from 'react';
import { CardImage, CardTitle, CardWrapper } from './card.elements';

export interface CardProps {
  title: string;
  image: string;
}

const Card: React.SFC<CardProps> = ({
  title,
  image
}) => (
  <CardWrapper>
    <CardImage src={image} />
    <CardTitle>{title}</CardTitle>
  </CardWrapper>
);

export default Card;