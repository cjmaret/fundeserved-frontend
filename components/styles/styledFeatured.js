import styled from 'styled-components';

import {
  Card,
  CardLink,
  CardImageWrapper,
  CardDetails,
  CardTitle,
  CardParagraph,
  AmountRaised,
} from './styledSliderCard';

export const FeaturedComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0;
  width: 100%;
  background-color: var(--salmon);
  color: white;
  padding: 0;
`;

export const FeaturedContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  width: 100%;
  padding: 15rem 0 15rem 1rem;
  @media (min-width: 500px) {
    padding: 20rem 0 20rem 2rem;
  }
`;

export const FeaturedTitleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 4rem 0;
`;

export const FeaturedTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 4rem;
  line-height: 1.2;
  span {
    color: var(--green);
  }
  @media (min-width: 500px) {
    font-size: 6rem;
  }
`;

export const FeaturedParagraph = styled.p`
  margin: 0;
  font-size: 2rem;
  line-height: 1.2;
`;

export const CardGroup = styled.div``;
