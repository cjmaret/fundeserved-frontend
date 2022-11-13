import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';
import Footer from '../components/Footer';
import {
  FundraiserSection,
  TitleGroup,
  Title,
  UpdateButton,
  FundraiserInfo,
  Details,
  Sidebar,
  Image,
  Description,
  AmountGroup,
  AmountValue,
  AmountRaised,
  ButtonGroup,
  ShareButton,
  DonateButton,
  DonorList,
  DonorCard,
  DonorCardPhoto,
  DonorCardName,
  DonorCardAmount,
  DonorListSeeAllButton,
  DonorCardDetails,
  PercentageBarGroup,
  PercentageBar,
  PercentageBarFilled,
  UpdateModal,
  DeleteModal,
  UpdateForm,
  UpdateButtonGroup,
  DeleteFormTitle,
  DeleteFormButton,
  DeleteFormGroup,
  DonorsModal,
  DonateModalList,
  DonorsModalContentGroup,
  DonorsModalTitle,
  DonorsModalList,
  DonorsModalDetails,
  DonorsModalName,
  DonorsModalAmount,
  DonorsModalPhoto,
  DonorsModalCard,
  ShareModal,
  SharePopup,
  Dot,
  DonorsModalDate,
  ModalDot,
  DonorsModalDonationDetails,
  DonorCardDonationDetails,
  DonorCardDate,
} from './styles/styledSingleFundraiser';
import { CloseIcon } from './styles/styledModal';
import { donors } from '../array-data/donors';
import { formatCentsToDollars } from '../lib/formatMoney';
import useForm from '../lib/useForm';
import CloseIconImage from '../images/close-icon.png';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import BlankProfileImage from '../images/blank-profile.jpg';
import CopyIconImage from '../images/copy-icon.png';
import daysAgo from '../lib/daysAgo';
import { useUser } from './User';

export const SINGLE_FUNDRAISER_QUERY = gql`
  query SINGLE_FUNDRAISER_QUERY($id: ID!) {
    Fundraiser(where: { id: $id }) {
      id
      name
      description
      status
      amount
      goal
      user {
        id
      }
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
      donations {
        total
        dateCreated
        user {
          name
          avatar {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

const UPDATE_FUNDRAISER_WITH_IMAGE_MUTATION = gql`
  mutation UPDATE_FUNDRAISER_WITH_IMAGE_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $image: Upload
  ) {
    updateFundraiser(
      id: $id
      data: {
        name: $name
        description: $description
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      description
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

const UPDATE_FUNDRAISER_NO_IMAGE_MUTATION = gql`
  mutation UPDATE_FUNDRAISER_NO_IMAGE_MUTATION(
    $id: ID!
    $name: String
    $description: String
  ) {
    updateFundraiser(
      id: $id
      data: { name: $name, description: $description }
    ) {
      id
      name
      description
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

const DELETE_FUNDRAISER_MUTATION = gql`
  mutation DELETE_FUNDRAISER_MUTATION($id: ID!) {
    deleteFundraiser(id: $id) {
      id
    }
  }
`;

const DELETE_FUNDRAISER_IMAGE_MUTATION = gql`
  mutation DELETE_FUNDRAISER_IMAGE_MUTATION($fundraiserImageId: ID!) {
    deleteFundraiserImage(id: $fundraiserImageId) {
      id
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  cache.evict(cache.identify(payload.data.deleteFundraiser));
}

export default function SingleFundraiser({ id }) {
  const user = useUser();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDonorsModalOpen, setIsDonorsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const { data, loading, error } = useQuery(SINGLE_FUNDRAISER_QUERY, {
    variables: { id },
  });

  const [
    updateFundraiserWithImage,
    {
      data: updateDataWithImage,
      loading: updateLoadingWithImage,
      error: updateErrorWithImage,
    },
  ] = useMutation(UPDATE_FUNDRAISER_WITH_IMAGE_MUTATION, {
    refetchQueries: [
      {
        SINGLE_FUNDRAISER_QUERY,
      },
    ],
  });

  const [
    updateFundraiserNoImage,
    {
      data: updateDataNoImage,
      loading: updateLoadingNoImage,
      error: updateErrorNoImage,
    },
  ] = useMutation(UPDATE_FUNDRAISER_NO_IMAGE_MUTATION, {
    refetchQueries: [
      {
        SINGLE_FUNDRAISER_QUERY,
      },
    ],
  });

  const [
    deleteFundraiser,
    { loading: deleteFundraiserLoading, error: deleteFundraiserError },
  ] = useMutation(DELETE_FUNDRAISER_MUTATION, {
    variables: {
      id,
    },
    update,
  });

  const [
    deleteFundraiserImage,
    {
      loading: deleteFundraiserImageLoading,
      error: deleteFundraiserImageError,
    },
  ] = useMutation(DELETE_FUNDRAISER_IMAGE_MUTATION);

  const Fundraiser = data?.Fundraiser;
  const FundraiserImageSource = Fundraiser?.photo?.image?.publicUrlTransformed;
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: Fundraiser?.name || '',
    description: Fundraiser?.description || '',
    image: FundraiserImageSource,
  });

  function checkIfClickedOutside(e) {
    const innerUpdateFormDiv = document.getElementById('update-form');
    const innerDeleteFormDiv = document.getElementById('delete-form');
    const innerDonorsDiv = document.getElementById('donors-div');
    const innerShareDiv = document.getElementById('share-div');
    if (isUpdateModalOpen) {
      if (!innerUpdateFormDiv.contains(e.target)) {
        setIsUpdateModalOpen(false);
      }
    }
    if (isDeleteModalOpen) {
      if (!innerDeleteFormDiv.contains(e.target)) {
        setIsDeleteModalOpen(false);
      }
    }
    if (isDonorsModalOpen) {
      if (!innerDonorsDiv.contains(e.target)) {
        setIsDonorsModalOpen(false);
      }
    }
    if (isShareModalOpen) {
      if (!innerShareDiv.contains(e.target)) {
        setIsShareModalOpen(false);
      }
    }
  }

  async function runImageMutationOrNoImageMutation() {
    if (inputs.image === FundraiserImageSource) {
      await updateFundraiserNoImage({
        variables: {
          id,
          name: inputs.name,
          description: inputs.description,
        },
      })
        .then((res) => {
          setIsUpdateModalOpen(false);
        })
        .catch((err) => console.error(err));
    } else {
      await updateFundraiserWithImage({
        variables: {
          id,
          name: inputs.name,
          description: inputs.description,
          image: inputs.image,
        },
      })
        .then((res) => {
          deleteFundraiserImage({
            variables: {
              fundraiserImageId: Fundraiser.photo.id,
            },
          });
          setIsUpdateModalOpen(false);
        })
        .catch((err) => console.error(err));
    }
  }

  function handleDeleteFundraiser() {
    deleteFundraiser()
      .then((res) => {
        deleteFundraiserImage({
          variables: {
            fundraiserImageId: Fundraiser.photo.id,
          },
        });
        Router.push({
          pathname: `/fundraisers`,
        });
        alert('Fundraiser deleted');
      })
      .catch((err) => console.error(err));
  }

  if (loading) return <p>Loading...</p>;
  if (
    error ||
    updateErrorWithImage ||
    updateErrorNoImage ||
    deleteFundraiserError ||
    deleteFundraiserImageError
  ) {
    return (
      <DisplayError
        error={
          error ||
          updateErrorWithImage ||
          updateErrorNoImage ||
          deleteFundraiserError ||
          deleteFundraiserImageError
        }
      />
    );
  }

  return (
    <>
      <FundraiserSection data-testid="single-fundraiser">
        <TitleGroup>
          {Fundraiser.user?.id === user?.id && (
            <UpdateButtonGroup>
              <UpdateButton onClick={() => setIsUpdateModalOpen(true)}>
                Edit Fundraiser
              </UpdateButton>
              <UpdateButton onClick={() => setIsDeleteModalOpen(true)}>
                Delete Fundraiser
              </UpdateButton>
            </UpdateButtonGroup>
          )}
          <Title>{Fundraiser.name}</Title>
        </TitleGroup>
        <FundraiserInfo>
          <Details>
            <Image src={FundraiserImageSource} alt="" />
            <Description>{Fundraiser.description}</Description>
          </Details>
          <Sidebar>
            <AmountGroup>
              <AmountRaised>
                {formatCentsToDollars(Fundraiser.amount)}{' '}
              </AmountRaised>
              raised of {formatCentsToDollars(Fundraiser.goal)} goal
            </AmountGroup>
            <PercentageBarGroup>
              <PercentageBarFilled
                filled={(Fundraiser.amount / Fundraiser.goal) * 100}
              />
              <PercentageBar />
            </PercentageBarGroup>
            <ButtonGroup>
              <ShareButton onClick={() => setIsShareModalOpen(true)}>
                Share
              </ShareButton>
              <DonateButton href={`/donate/${Fundraiser.id}`}>
                Donate now
              </DonateButton>
            </ButtonGroup>
            <DonorList>
              {Fundraiser.donations.slice(0, 3).map((donor, i) => (
                <DonorCard key={i}>
                  <DonorCardPhoto
                    src={
                      donor.user?.avatar?.publicUrlTransformed ||
                      BlankProfileImage
                    }
                    alt=""
                  />
                  <DonorCardDetails>
                    <DonorCardName>{donor.user?.name}</DonorCardName>
                    <DonorCardDonationDetails>
                      <DonorCardAmount>
                        Donated {formatCentsToDollars(donor.total)}
                      </DonorCardAmount>
                      <DonorCardDate>
                        {daysAgo(donor.dateCreated)} days ago
                      </DonorCardDate>
                    </DonorCardDonationDetails>
                  </DonorCardDetails>
                </DonorCard>
              ))}
            </DonorList>
            <DonorListSeeAllButton onClick={() => setIsDonorsModalOpen(true)}>
              See all
            </DonorListSeeAllButton>
          </Sidebar>
        </FundraiserInfo>
      </FundraiserSection>
      <Footer />
      <UpdateModal
        isUpdateModalOpen={isUpdateModalOpen}
        onClick={checkIfClickedOutside}>
        <UpdateForm
          id="update-form"
          onSubmit={(e) => {
            e.preventDefault();
            runImageMutationOrNoImageMutation();
          }}>
          <CloseIcon
            src={CloseIconImage}
            alt="close icon"
            onClick={() => setIsUpdateModalOpen(false)}
          />
          <DisplayError error={updateErrorNoImage || updateErrorWithImage} />
          <fieldset
            disabled={loading || updateLoadingNoImage || updateLoadingNoImage}
            aria-busy={loading || updateLoadingNoImage || updateLoadingNoImage}>
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
            <label htmlFor="image">
              Image
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="description">
              Description
              <textarea
                type="textarea"
                id="description"
                name="description"
                placeholder="description"
                value={inputs.description}
                onChange={handleChange}
                rows="11"
              />
            </label>
            <div className="button-group">
              <button type="submit">Update Fundraiser</button>
              <button type="button" onClick={clearForm}>
                Clear Form
              </button>
            </div>
          </fieldset>
        </UpdateForm>
      </UpdateModal>
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        onClick={checkIfClickedOutside}>
        <DeleteFormGroup id="delete-form">
          <CloseIcon
            src={CloseIconImage}
            alt=""
            onClick={() => setIsDeleteModalOpen(false)}
          />
          <DeleteFormTitle>Delete Fundraiser?</DeleteFormTitle>
          <DeleteFormButton
            onClick={handleDeleteFundraiser}
            aria-busy={deleteFundraiserLoading}
            disabled={deleteFundraiserLoading}>
            Delete
          </DeleteFormButton>
        </DeleteFormGroup>
      </DeleteModal>
      <DonorsModal
        isDonorsModalOpen={isDonorsModalOpen}
        onClick={checkIfClickedOutside}>
        <DonorsModalContentGroup>
          <CloseIcon
            src={CloseIconImage}
            alt=""
            onClick={() => setIsDonorsModalOpen(false)}
          />
          <DonorsModalTitle>All Donors</DonorsModalTitle>
          <DonorsModalList id="donors-div">
            {Fundraiser.donations.map((donor, i) => (
              <DonorsModalCard key={i}>
                <DonorsModalPhoto
                  src={
                    donor.user?.avatar?.publicUrlTransformed ||
                    BlankProfileImage
                  }
                  alt=""
                />
                <DonorsModalDetails>
                  <DonorsModalName>{donor.user?.name}</DonorsModalName>
                  <DonorsModalDonationDetails>
                    <DonorsModalAmount>
                      Donated {formatCentsToDollars(donor.total)}
                    </DonorsModalAmount>
                    <DonorsModalDate>
                      {daysAgo(donor.dateCreated)} days ago
                    </DonorsModalDate>
                  </DonorsModalDonationDetails>
                </DonorsModalDetails>
              </DonorsModalCard>
            ))}
          </DonorsModalList>
        </DonorsModalContentGroup>
      </DonorsModal>
      <ShareModal
        isShareModalOpen={isShareModalOpen}
        onClick={checkIfClickedOutside}>
        <SharePopup id="share-div">
          <CloseIcon
            src={CloseIconImage}
            alt=""
            onClick={() => setIsShareModalOpen(false)}
          />
          <h3>Share this fundraiser!</h3>
          <div>
            <p>{`www.gofundyourself.com/fundraiser/${id}`}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `www.gofundyourself.com/fundraiser/${id}`
                );
              }}>
              <img src={CopyIconImage} alt="" />
            </button>
          </div>
        </SharePopup>
      </ShareModal>
    </>
  );
}
