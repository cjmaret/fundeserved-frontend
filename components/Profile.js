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
  PanelLink,
  PanelCardImageWrapper,
  PanelCardDetails,
  PanelCardTitle,
  PanelCardDescription,
  PanelTitle,
  PanelCardGroup,
} from './styles/styledProfile';
import { useUser } from './User';
import { useContext } from 'react';
import { MobileContext } from '../contexts/mobileContext';
import BlankProfileImage from '../images/blank-profile.jpg';
import { ALL_FUNDRAISERS_QUERY } from './Fundraisers';
import { useQuery } from '@apollo/client';
import { formatCentsToDollars } from '../lib/formatMoney';
import convertDate from '../lib/convertDate';

export default function Profile() {
  const user = useUser();
  const mobileWidth = useContext(MobileContext);

  const { data, error, loading } = useQuery(ALL_FUNDRAISERS_QUERY, {
    variables: {
      skip: 0,
      first: 3,
    },
  });

  const numOfCardsDisplayed = mobileWidth ? 2 : 3;

  return (
    <>
      <ProfileComponent>
        <ProfileLead>
          <ProfileBanner />
          <ProfileContentGroup>
            <ProfileImageWrapper>
              <ProfileImage
                src={user?.avatar.publicUrlTransformed || BlankProfileImage}
              />
            </ProfileImageWrapper>
            <ProfileDetails>
              <ProfileName>{user?.name}</ProfileName>
              <ProfileEmail>{user?.email}</ProfileEmail>
              <DateCreated>
                Funding since {user && convertDate(user.createdOn)}
              </DateCreated>
            </ProfileDetails>
          </ProfileContentGroup>
        </ProfileLead>
        <MyFundraisersPanel>
          <PanelTitle>Fundraisers you created</PanelTitle>
          <PanelCardGroup>
            <PanelLink href="/my-fundraisers" />
            {data?.allFundraisers.slice(0, numOfCardsDisplayed).map((card) => (
              <PanelCard>
                <PanelCardImageWrapper>
                  <img
                    src={card?.photo.image.publicUrlTransformed}
                    className="card-image"
                  />
                </PanelCardImageWrapper>
                <PanelCardDetails>
                  <PanelCardTitle>
                    {card.name?.length > 50
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
                </PanelCardDetails>
              </PanelCard>
            ))}
          </PanelCardGroup>
        </MyFundraisersPanel>
        <DonatedToPanel>
          <PanelTitle>Fundraisers you donated to</PanelTitle>
          <PanelCardGroup>
            <PanelLink href="/my-donees" />
            {data?.allFundraisers.slice(0, numOfCardsDisplayed).map((card) => (
              <PanelCard>
                <PanelCardImageWrapper>
                  <img
                    src={card?.photo.image.publicUrlTransformed}
                    className="card-image"
                  />
                </PanelCardImageWrapper>
                <PanelCardDetails>
                  <PanelCardTitle>
                    {card.name?.length > 50
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
                </PanelCardDetails>
              </PanelCard>
            ))}
          </PanelCardGroup>
        </DonatedToPanel>
      </ProfileComponent>
    </>
  );
}
