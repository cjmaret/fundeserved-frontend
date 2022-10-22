import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MobileContext } from '../contexts/mobileContext';

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
  GuaranteeDetailsGroup,
  GuaranteeGroup,
  GuaranteeImage,
  GuaranteeSubtitle,
  GuaranteeTitle,
  InfoDetailsGroup,
  InfoGroup,
  InfoImage,
  MainGroup,
  ReturnButton,
  TallySidebarGroup,
  TallyAmount,
  TallyDue,
  TallyTitle,
  TallyMobileGroup,
} from '../components/styles/styledDonate';
import DisplayError from './ErrorMessage';
import GuaranteeImageIcon from '../images/guarantee.png';

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
  const mobileWidth = useContext(MobileContext);
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

  function addCommasToNumber(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <DonateSection>
      <MainGroup mobileWidth={mobileWidth}>
        <ReturnButton href={`/fundraiser/${id}`}>
          Return to fundraiser
        </ReturnButton>
        <InfoGroup>
          <InfoImage
            src={Fundraiser?.photo?.image.publicUrlTransformed}
            alt={Fundraiser?.name}
          />
          <DetailsTitle>
            You're supporting <span>{Fundraiser?.name}</span>
          </DetailsTitle>
        </InfoGroup>
        <DonateGroup>
          <DonateTitle>Enter your donation</DonateTitle>
          <DonateInputGroup inputError={inputError}>
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
        {mobileWidth && (
          <TallyMobileGroup>
            <TallyTitle>Your donation</TallyTitle>
            <TallyAmount>
              <span>Your donation</span>
              <span>${addCommasToNumber(amountValue)}.00</span>
            </TallyAmount>
            <TallyDue>
              <span>Total due today</span>
              <span>${addCommasToNumber(amountValue)}.00</span>
            </TallyDue>
          </TallyMobileGroup>
        )}
        <Checkout amount={amountValue} fundraiserId={Fundraiser?.id} />
        <GuaranteeGroup>
          <GuaranteeImage src={GuaranteeImageIcon} alt="guarantee icon" />
          <GuaranteeDetailsGroup>
            <GuaranteeTitle>Fundeserved donation protection</GuaranteeTitle>
            <GuaranteeSubtitle>
              Fundeserved guarantees 100% of your donation will go to whatever
              legal/ethical misuse this fundraiser claims to be perpetrating.
              However, if any of our staff members are skimming or otherwise
              embezzling donations to satisfy their own personal greed, then of
              course your donation is not protected by this guarantee.
            </GuaranteeSubtitle>
          </GuaranteeDetailsGroup>
        </GuaranteeGroup>
      </MainGroup>
      {!mobileWidth && (
        <TallySidebarGroup>
          <TallyTitle>Your donation</TallyTitle>
          <TallyAmount>
            <span>Your donation</span>
            <span>${addCommasToNumber(amountValue)}.00</span>
          </TallyAmount>
          <TallyDue>
            <span>Total due today</span>
            <span>${addCommasToNumber(amountValue)}.00</span>
          </TallyDue>
        </TallySidebarGroup>
      )}
    </DonateSection>
  );
}
