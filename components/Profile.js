import {
  ProfileComponent,
  ProfileLead,
  ProfileBanner,
  ProfileContentGroup,
  ProfileImageWrapper,
  ProfileImage,
  ProfileDetails,
  ProfileName,
  ProfileEmail,
  DateCreated,
  MyFundraisersPanel,
  DonatedToPanel,
  PanelCard,
  PanelCardImageWrapper,
  PanelCardDetails,
  PanelCardTitle,
  PanelCardDescription,
  PanelTitle,
  PanelCardGroup,
  PanelCardLink,
  PanelCardAmount,
  PanelCardDonationDate,
  PanelCardCreatedDate,
  EmptyFundraisers,
} from './styles/styledProfile';
import { useUser } from './User';
import { useContext, useEffect, useState } from 'react';
import { MobileContext } from '../contexts/mobileContext';
import BlankProfileImage from '../images/blank-profile.jpg';
import { ALL_FUNDRAISERS_QUERY } from './Fundraisers';
import { useQuery } from '@apollo/client';
import convertDate from '../lib/convertDate';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { formatCentsToDollars } from '../lib/formatMoney';

export default function Profile() {
  const user = useUser();
  const mobileWidth = useContext(MobileContext);
  const [fundraisersDonatedTo, setFundraisersDonatedTo] = useState([]);

  const [createdSliderRef] = useKeenSlider({
    loop: false,
    mode: 'free',
    slides: {
      perView: mobileWidth ? 2.5 : 3.5,
      spacing: mobileWidth ? 15 : 35,
    },
  });

  const [donatedSliderRef] = useKeenSlider({
    loop: false,
    mode: 'free',
    slides: {
      perView: mobileWidth ? 2.5 : 3.5,
      spacing: mobileWidth ? 15 : 35,
    },
  });

  // if multiple donations to one fundraiser, show only one fundraiser
  useEffect(() => {
    const uniqueIds = {};
    user?.donations.forEach((donation) => {
      const currentId = donation.fundraiser.id;
      if (!uniqueIds.hasOwnProperty(currentId)) {
        console.log('yay');
        uniqueIds[currentId] = 0;
        setFundraisersDonatedTo((prevFundraisers) => [
          ...prevFundraisers,
          donation.fundraiser,
        ]);
      }
    });
  }, [user]);

  const numOfCardsDisplayed = mobileWidth ? 2 : 3;

  console.log(user);

  return (
    <>
      <ProfileComponent>
        <ProfileLead>
          <ProfileBanner />
          <ProfileContentGroup>
            <ProfileImageWrapper>
              <ProfileImage
                src={user?.avatar?.publicUrlTransformed || BlankProfileImage}
              />
            </ProfileImageWrapper>
            <ProfileDetails>
              <ProfileName>{user?.name}</ProfileName>
              <ProfileEmail>{user?.email}</ProfileEmail>
              <DateCreated>
                Funding since {user?.createdOn && convertDate(user.createdOn)}
              </DateCreated>
            </ProfileDetails>
          </ProfileContentGroup>
        </ProfileLead>
        <MyFundraisersPanel>
          <PanelTitle>Your fundraisers</PanelTitle>
          <PanelCardGroup ref={createdSliderRef} className="keen-slider">
            {user?.fundraisers.length > 0 ? (
              user?.fundraisers.map((card, i) => (
                <PanelCard
                  key={card.id}
                  className={`keen-slider__slide number-slide${i}`}>
                  <PanelCardLink href={`/fundraiser/${card.id}`} />
                  <PanelCardImageWrapper>
                    <img
                      src={card?.photo.image.publicUrlTransformed}
                      className="card-image"
                    />
                  </PanelCardImageWrapper>
                  <PanelCardDetails>
                    <PanelCardTitle>
                      {card?.name.length > 50
                        ? `${card?.name.substring(0, 50)}...`
                        : card?.name}
                    </PanelCardTitle>
                    {!mobileWidth && (
                      <>
                        <PanelCardDescription>
                          {card?.description?.substring(0, 100)}...
                        </PanelCardDescription>
                      </>
                    )}
                    <PanelCardCreatedDate>
                      Created on {convertDate(card.dateCreated)}
                    </PanelCardCreatedDate>
                  </PanelCardDetails>
                </PanelCard>
              ))
            ) : (
              <EmptyFundraisers>
                Fundraisers you created will appear here!
              </EmptyFundraisers>
            )}
          </PanelCardGroup>
        </MyFundraisersPanel>
        <DonatedToPanel>
          <PanelTitle>Your donations</PanelTitle>
          <PanelCardGroup ref={donatedSliderRef} className="keen-slider">
            {user?.donations.length > 0 ? (
              user?.donations.map((donation, i) => (
                <PanelCard
                  key={donation.fundraiser.id}
                  className={`keen-slider__slide number-slide${i}`}>
                  <PanelCardLink
                    href={`/fundraiser/${donation.fundraiser.id}`}
                  />
                  <PanelCardImageWrapper>
                    <img
                      src={
                        donation.fundraiser?.photo.image.publicUrlTransformed
                      }
                      className="card-image"
                    />
                  </PanelCardImageWrapper>
                  <PanelCardDetails>
                    <PanelCardTitle>
                      {donation.fundraiser?.name.length > 50
                        ? `${donation.fundraiser?.name.substring(0, 50)}...`
                        : donation.fundraiser?.name}
                    </PanelCardTitle>
                    <PanelCardAmount>
                      You donated {formatCentsToDollars(donation.total)}
                    </PanelCardAmount>
                    <PanelCardDonationDate>
                      Donated on {convertDate(donation.dateCreated)}
                    </PanelCardDonationDate>
                  </PanelCardDetails>
                </PanelCard>
              ))
            ) : (
              <EmptyFundraisers>
                Donations you've made will appear here!
              </EmptyFundraisers>
            )}
          </PanelCardGroup>
        </DonatedToPanel>
      </ProfileComponent>
    </>
  );
}
