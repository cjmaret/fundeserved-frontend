import {
  FeaturedComponent,
  FeaturedTitle,
  FeaturedParagraph,
  CardGroup,
  FeaturedTitleGroup,
  FeaturedContentGroup,
} from './styles/styledFeatured';
import {
  Card,
  CardLink,
  CardImageWrapper,
  CardDetails,
  CardTitle,
  CardParagraph,
  AmountRaised,
} from './styles/styledSliderCard';
import { useContext, useEffect, useState } from 'react';
import { MobileContext } from '../contexts/mobileContext';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { formatCentsToDollars } from '../lib/formatMoney';
import { gql, useQuery } from '@apollo/client';

export const ALL_FUNDRAISERS_QUERY = gql`
  query ALL_FUNDRAISERS_QUERY {
    allFundraisers(skip: 0, first: 7, sortBy: dateCreated_ASC) {
      id
      name
      amount
      description
      goal
      dateCreated
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Featured() {
  const mobileWidth = useContext(MobileContext);

  const { data, error, loading } = useQuery(ALL_FUNDRAISERS_QUERY);

  // const [sliderRef] = useKeenSlider({
  //   loop: false,
  //   mode: 'free',
  //   slides: {
  //     perView: 2.5,
  //     spacing: mobileWidth ? 15 : 35,
  //   },
  // });

  const [sliderOptions, setSliderOptions] = useState({});
  const [sliderRef] = useKeenSlider(sliderOptions);

  useEffect(() => {
    setSliderOptions({
      loop: false,
      mode: 'free',
      slides: {
        perView: 2.5,
        spacing: mobileWidth ? 15 : 35,
      },
    });
  }, [data]);

  return (
    <FeaturedComponent>
      <FeaturedContentGroup>
        <FeaturedTitleGroup>
          <FeaturedTitle>
            GoFundYourself <span>Spotlight</span>
          </FeaturedTitle>
          <FeaturedParagraph>
            Featuring some of our least deserving fundraisers
          </FeaturedParagraph>
        </FeaturedTitleGroup>
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
      </FeaturedContentGroup>
    </FeaturedComponent>
  );
}
