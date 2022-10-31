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
  EditProfileButton,
  EditModal,
  EditForm,
} from './styles/styledProfile';
import { useUser } from './User';
import { useContext, useEffect, useState } from 'react';
import { MobileContext } from '../contexts/mobileContext';
import BlankProfileImage from '../images/blank-profile.jpg';
import CloseIconImage from '../images/close-icon.png';
import convertDate from '../lib/convertDate';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { formatCentsToDollars } from '../lib/formatMoney';
import EditPen from '../images/edit-pen.png';
import DisplayError from './ErrorMessage';
import { CloseIcon } from './styles/styledSingleFundraiser';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from './User';

export const UPDATE_USER_WITH_AVATAR_MUTATION = gql`
  mutation UPDATE_USER_WITH_AVATAR_MUTATION(
    $id: ID!
    $name: String
    $email: String
    $avatar: Upload
  ) {
    updateUser(id: $id, data: { name: $name, email: $email, avatar: $avatar }) {
      name
      email
      avatar {
        publicUrlTransformed
      }
    }
  }
`;

export const UPDATE_USER_NO_AVATAR_MUTATION = gql`
  mutation UPDATE_USER_NO_AVATAR_MUTATION(
    $id: ID!
    $name: String
    $email: String
  ) {
    updateUser(id: $id, data: { name: $name, email: $email }) {
      name
      email
      avatar {
        publicUrlTransformed
      }
    }
  }
`;

export default function Profile() {
  let user = useUser();
  const mobileWidth = useContext(MobileContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: user?.name || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
  });

  const [
    updateUserWithAvatar,
    {
      data: dataWithAvatar,
      loading: loadingWithAvatar,
      error: errorWithAvatar,
    },
  ] = useMutation(UPDATE_USER_WITH_AVATAR_MUTATION, {
    variables: {
      id: '633e27614ff4a3208d756797',
      name: inputs.name,
      email: inputs.email,
      avatar: inputs.avatar,
    },
    refetchQueries: [
      {
        query: CURRENT_USER_QUERY,
      },
    ],
  });

  const [
    updateUserNoAvatar,
    { data: dataNoAvatar, loading: loadingNoAvatar, error: errorNoAvatar },
  ] = useMutation(UPDATE_USER_NO_AVATAR_MUTATION, {
    variables: {
      id: '633e27614ff4a3208d756797',
      name: inputs.name,
      email: inputs.email,
    },
    refetchQueries: [
      {
        query: CURRENT_USER_QUERY,
      },
    ],
  });

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

  function checkIfClickedOutside(e) {
    const innerEditFormDiv = document.getElementById('edit-form');
    if (isEditModalOpen) {
      if (!innerEditFormDiv.contains(e.target)) {
        setIsEditModalOpen(false);
      }
    }
  }

  async function runImageMutationOrNoImageMutation() {
    if (inputs.avatar === user?.avatar) {
      await updateUserNoAvatar()
        .then((res) => {
          console.log('res no: ', res);
          setIsEditModalOpen(false);
        })
        .catch((err) => console.error(err));
    } else {
      await updateUserWithAvatar()
        .then((res) => {
          console.log('res yes: ', res);
          setIsEditModalOpen(false);
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <>
      <ProfileComponent>
        <ProfileLead>
          <ProfileBanner />
          <ProfileContentGroup>
            <EditProfileButton onClick={() => setIsEditModalOpen(true)}>
              <img src={EditPen} alt="" className="edit-icon" />
            </EditProfileButton>
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
      <EditModal
        isEditModalOpen={isEditModalOpen}
        onClick={checkIfClickedOutside}>
        <EditForm
          id="edit-form"
          onSubmit={(e) => {
            e.preventDefault();
            runImageMutationOrNoImageMutation();
          }}>
          <CloseIcon
            src={CloseIconImage}
            alt="close icon"
            onClick={() => setIsEditModalOpen(false)}
          />
          <DisplayError error={errorWithAvatar || errorNoAvatar} />
          <fieldset
            disabled={loadingWithAvatar || loadingNoAvatar}
            aria-busy={loadingWithAvatar || loadingNoAvatar}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="avatar">
              Image
              <input
                type="file"
                id="avatar"
                name="avatar"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </label>
            <div className="button-group">
              <button type="submit">Update Profile</button>
              <button type="button" onClick={clearForm}>
                Clear Form
              </button>
            </div>
          </fieldset>
        </EditForm>
      </EditModal>
    </>
  );
}
