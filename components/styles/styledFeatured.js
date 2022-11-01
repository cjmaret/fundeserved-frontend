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
  padding: 8rem 0 8rem 2rem;
  @media (min-width: 500px) {
    padding: 15rem 0 15rem 2rem;
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

export const Category = styled.p`
  position: absolute;
  padding: 0 0.25rem;
  top: 3%;
  right: 5%;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  color: var(--grey);
  font-size: 0.75rem;
  @media (min-width: 450px) {
    padding: 0 0.5rem;
    font-size: 1rem;
  }
  @media (min-width: 850px) {
    padding: 0 1rem;
    font-size: 1.2rem;
  }
`;
