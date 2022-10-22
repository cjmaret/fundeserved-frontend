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
  MainCardDetails,
  MainCardImage,
  AmountRaised,
  Category,
  CardLink,
} from './styles/styledFeatured';

import Image from 'next/image';
import { featuredCards } from '../array-data/featured-data';
import { useContext } from 'react';
import { MobileContext } from '../contexts/mobileContext';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { formatCentsToDollars } from '../lib/formatMoney';

export default function Featured() {
  const mobileWidth = useContext(MobileContext);
  const mainCard = featuredCards[0];

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: 'free',
    size: 1,
    slides: {
      perView: 2.5,
      spacing: 25,
    },
  });

  return (
    <FeaturedComponent>
      <FeaturedTitle>Fundeserved Spotlight</FeaturedTitle>
      <FeaturedParagraph>
        Featuring some of our least deserving fundraisers
      </FeaturedParagraph>
      <CardGroup ref={sliderRef} className="keen-slider">
        {featuredCards.map((card, i) => (
          <Card className={`keen-slider__slide number-slide${i}`}>
            <CardLink href={`/fundraiser/${card.id}`} />
            <Category>Murder</Category>
            <CardImageWrapper>
              <img src={card.image} className="card-image" />
            </CardImageWrapper>
            <CardDetails>
              <CardTitle>
                {card.title.length > 50
                  ? `${card.title.substring(0, 50)}...`
                  : card.title}
              </CardTitle>
              {!mobileWidth && (
                <>
                  <CardParagraph>
                    {card.paragraph.substring(0, 100)}...
                  </CardParagraph>
                  <AmountRaised>
                    {formatCentsToDollars(card.amount)} raised
                  </AmountRaised>
                </>
              )}
            </CardDetails>
          </Card>
        ))}
      </CardGroup>
    </FeaturedComponent>
  );
}

/*
<MainCard>
          <MainCardDetails>
            <CardTitle>{mainCard.title}</CardTitle>
            <CardParagraph>
              {mainCard.paragraph.substring(0, 150)}...
            </CardParagraph>
            <AmountRaised>{formatCentsToDollars(mainCard.amount)} raised</AmountRaised>
            <ReadMore>Read more</ReadMore>
          </MainCardDetails>
          <MainCardImage src={mainCard.image} alt="" />
        </MainCard>
        {featuredCards.slice(1).map((card) => (
          <Card key={card.id}>
            <CardImageWrapper>
              <img src={card.image} alt="" className="card-image" />
            </CardImageWrapper>
            <CardDetails>
              <CardTitle>{card.title}</CardTitle>
              <CardParagraph>
                {card.paragraph.substring(0, 150)}...
              </CardParagraph>
              <AmountRaised>{formatCentsToDollars(card.amount)} raised</AmountRaised>
              <ReadMore>Read more</ReadMore>
            </CardDetails>
          </Card>
        ))}
        */
