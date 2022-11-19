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
import {
  EmptyFundraisers,
  PanelCardAmount,
  PanelCardCreatedDate,
  PanelCardDonationDate,
} from './styles/styledProfile';
import convertDate from '../lib/convertDate';

export default function KeenSlider({ data, sliderType }) {
  const mobileWidth = useContext(MobileContext);

  function findPerView() {
    if (sliderType !== 'featured') {
      return mobileWidth ? 2.5 : 3.5;
    }
    return 2.5;
  }

  const sliderOptions = {
    loop: false,
    mode: 'free',
    slides: {
      perView: findPerView(),
      spacing: mobileWidth ? 15 : 35,
    },
  };
  const [sliderRef, slider] = useKeenSlider(sliderOptions);

  // prevent sliders from collapsing
  useEffect(() => {
    slider.current?.update({
      ...sliderOptions,
    });
  }, [slider, sliderOptions]);

  return (
    <CardGroup ref={sliderRef} className="keen-slider">
      {data?.length > 0 ? (
        data?.map((singleCard, i) => {
          let card =
            sliderType === 'profile-donated'
              ? singleCard?.fundraiser
              : singleCard;
          return (
            <Card key={i} className={`keen-slider__slide number-slide${i}`}>
              <CardLink href={`/fundraiser/${card.id}`} />
              <CardImageWrapper>
                <img
                  src={card.photo.image.publicUrlTransformed}
                  className="card-image"
                />
              </CardImageWrapper>
              <CardDetails sliderType={sliderType}>
                <CardTitle
                  className={`${
                    sliderType === 'profile-fundraisers' || 'profile-donated'
                      ? 'panel-title'
                      : ''
                  }`}>
                  {card.name?.length > 50
                    ? `${card.name?.substring(0, 50)}...`
                    : card.name}
                </CardTitle>

                {sliderType !== 'profile-donated' && !mobileWidth && (
                  <CardParagraph
                    className={`${
                      sliderType === 'profile-fundraisers'
                        ? 'panel-paragraph'
                        : ''
                    }`}>
                    {card?.description?.substring(0, 90)}...
                  </CardParagraph>
                )}
                {sliderType === 'featured' && (
                  <AmountRaised>
                    {formatCentsToDollars(card.amount)} raised of{' '}
                    {formatCentsToDollars(card.goal)}
                  </AmountRaised>
                )}

                {sliderType === 'profile-fundraisers' && (
                  <PanelCardCreatedDate>
                    Created on {convertDate(card.dateCreated)}
                  </PanelCardCreatedDate>
                )}
                {sliderType === 'profile-donated' && (
                  <>
                    <PanelCardAmount>
                      You donated {formatCentsToDollars(singleCard.total)}
                    </PanelCardAmount>
                    <PanelCardDonationDate>
                      Donated on {convertDate(singleCard.dateCreated)}
                    </PanelCardDonationDate>
                  </>
                )}
              </CardDetails>
            </Card>
          );
        })
      ) : (
        <EmptyFundraisers>
          Fundraisers you created will appear here!
        </EmptyFundraisers>
      )}
    </CardGroup>
  );
}
