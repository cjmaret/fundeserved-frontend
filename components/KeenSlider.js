import { useContext, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { formatCentsToDollars } from '../lib/formatMoney';
import { CardGroup } from './styles/styledFeatured';
import { MobileContext } from '../contexts/mobileContext';
import {
  Card,
  CardLink,
  CardImageWrapper,
  CardDetails,
  CardTitle,
  CardParagraph,
  AmountRaised,
} from './styles/styledSliderCard';

export default function KeenSlider({ data }) {
  const mobileWidth = useContext(MobileContext);

  const sliderOptions = {
    loop: false,
    mode: 'free',
    slides: {
      perView: 2.5,
      spacing: mobileWidth ? 15 : 35,
    },
  };

  const [sliderRef, slider] = useKeenSlider(sliderOptions);

  useEffect(() => {
    slider.current?.update({
      ...sliderOptions,
    });
  }, [slider, sliderOptions]);

  return (
    <CardGroup ref={sliderRef} className="keen-slider">
      {data?.allFundraisers.map((card, i) => (
        <Card className={`keen-slider__slide number-slide${i}`} key={i}>
          <CardLink href={`/fundraiser/${card.id}`} />
          <CardImageWrapper>
            <img
              src={card.photo.image.publicUrlTransformed}
              className="card-image"
            />
          </CardImageWrapper>
          <CardDetails>
            <CardTitle>
              {card.name.length > 50
                ? `${card.name.substring(0, 50)}...`
                : card.name}
            </CardTitle>
            {!mobileWidth && (
              <>
                <CardParagraph>
                  {card.description.substring(0, 100)}...
                </CardParagraph>
              </>
            )}
            <AmountRaised>
              {formatCentsToDollars(card.amount)} raised of{' '}
              {formatCentsToDollars(card.goal)}
            </AmountRaised>
          </CardDetails>
        </Card>
      ))}
    </CardGroup>
  );
}
