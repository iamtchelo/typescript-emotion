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
  <CardWrapper>
    <LazyLoad
      placeholder={
        <LoadingContainer>
          <Loading loading={true} size={40} color="#fff" />
        </LoadingContainer>
      }
    >
      <CardImage src={image} />
    </LazyLoad>
    <CardTitle>{title}</CardTitle>
  </CardWrapper>
);

export {Card, CardProps};
