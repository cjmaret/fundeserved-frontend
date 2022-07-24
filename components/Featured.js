import {
  FeaturedComponent,
  FeaturedTitle,
  FeaturedParagraph,
  MainCard,
  Card,
  CardImageWrapper,
  CardDetails,
  CardTitle,
  CardParagraph,
  CardGroup,
  ReadMore,
} from './styles/styledFeatured';

import Image from 'next/image';
import { featuredCards } from '../array-data/featured-data';

export default function Featured() {
  return (
    <FeaturedComponent>
      <FeaturedTitle>Deadbeat Spotlight</FeaturedTitle>
      <FeaturedParagraph>
        Meet some of our least deserving people
      </FeaturedParagraph>
      <CardGroup>
        <MainCard>
          <CardDetails>
            <CardTitle>Hi</CardTitle>
            <CardParagraph>
              words words words words words words words words words words words
              words words words words words words words words words words words
              words words words words words words
            </CardParagraph>
            <ReadMore>Read more</ReadMore>
          </CardDetails>
        </MainCard>
        {featuredCards.map((card) => (
          <Card key={card.id}>
            <CardImageWrapper>
              <Image src={card.image} alt="" />
            </CardImageWrapper>
            <CardDetails>
              <CardTitle>{card.title}</CardTitle>
              <CardParagraph>{card.paragraph}</CardParagraph>
              <ReadMore>Read more</ReadMore>
            </CardDetails>
          </Card>
        ))}
      </CardGroup>
    </FeaturedComponent>
  );
}
