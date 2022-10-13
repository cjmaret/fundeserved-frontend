import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import Checkout from '../components/Checkout';
import {
  Cents,
  DetailsSubtitle,
  DetailsTitle,
  Dollar,
  DonateGroup,
  DonateInput,
  DonateInputError,
  DonateInputGroup,
  DonateSection,
  DonateTitle,
  InfoDetailsGroup,
  InfoGroup,
  InfoImage,
  MainGroup,
  ReturnButton,
  Sidebar,
  SidebarAmount,
  SidebarDue,
  SidebarTitle,
} from '../components/styles/styledDonate';
import DisplayError from './ErrorMessage';

const SINGLE_FUNDRAISER_QUERY = gql`
  query SINGLE_FUNDRAISER_QUERY($id: ID!) {
    Fundraiser(where: { id: $id }) {
      id
      name
      description
      status
      amount
      goal
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Donate({ id }) {
  const { data, loading, error } = useQuery(SINGLE_FUNDRAISER_QUERY, {
    variables: {
      id,
    },
  });

  const Fundraiser = data?.Fundraiser || null;
  const [amountValue, setAmountValue] = useState('');
  const [inputError, setInputError] = useState(false);

  function handleAmountChange(e) {
    let amount = e.target.value.replace(/[^0-9.]/g, '');
    // let limitedAmount = Math.max(0, Math.min(50000, amount)).toString();
    setAmountValue(amount);
  }

  useEffect(() => {
    if (amountValue > 50000) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }, [amountValue]);

  console.log(typeof amountValue);

  function addCommasToNumber(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <DonateSection>
      <MainGroup>
        <ReturnButton>Return to fundraiser</ReturnButton>
        <InfoGroup>
          <InfoImage
            src={Fundraiser?.photo?.image.publicUrlTransformed}
            alt={Fundraiser?.name}
          />
          <InfoDetailsGroup>
            <DetailsTitle>
              You're supporting <span>{Fundraiser?.name}</span>
            </DetailsTitle>
            <DetailsSubtitle></DetailsSubtitle>
          </InfoDetailsGroup>
        </InfoGroup>
        <DonateGroup>
          <DonateTitle>Enter your donation</DonateTitle>
          <DonateInputGroup>
            <Dollar>$</Dollar>
            <DonateInput
              type="text"
              onChange={handleAmountChange}
              value={amountValue}
              maxLength="5"
            />
            <Cents>.00</Cents>
          </DonateInputGroup>
          {inputError && (
            <DonateInputError>Donation limit is $50,000.00</DonateInputError>
          )}
        </DonateGroup>
        <Checkout amount={amountValue} fundraiserId={Fundraiser?.id} />
      </MainGroup>
      <Sidebar>
        <SidebarTitle>Your donation</SidebarTitle>
        <SidebarAmount>
          <span>Your donation</span>
          <span>${addCommasToNumber(amountValue)}.00</span>
        </SidebarAmount>
        <SidebarDue>
          <span>Total due today</span>
          <span>${addCommasToNumber(amountValue)}.00</span>
        </SidebarDue>
      </Sidebar>
    </DonateSection>
  );
}
