import * as React from 'react';
import LazyLoad from 'react-lazyload';
import {
  CardImage,
  CardTitle,
  CardWrapper,
  Loading,
  LoadingContainer,
} from './card.styles';

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FunctionComponent<CardProps> = ({title, image}) => (
  <LazyLoad
    placeholder={
      <LoadingContainer>
        <Loading loading={true} size={40} color="#999" />
      </LoadingContainer>
    }
  >
    <CardWrapper>
      <CardImage src={image} />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  </LazyLoad>
);

export {Card, CardProps};
