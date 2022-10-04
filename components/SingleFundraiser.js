import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';
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
  UpdateForm,
  CloseIcon,
  UpdateButtonGroup,
  UpdateFormContainer,
  DeleteFormContainer,
  DeleteFormTitle,
  DeleteFormButton,
  DeleteFormGroup,
} from './styles/styledSingleFundraiser';
import { donors } from '../array-data/donors';
import { formatCentsToDollars } from '../lib/formatMoney';
import useForm from '../lib/useForm';
import CloseIconImage from '../images/close-icon.png';
import { useEffect, useState } from 'react';
import Router from 'next/router';

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

function update(cache, payload) {
  console.log(payload);
  cache.evict(cache.identify(payload.data.deleteFundraiser));
}

export default function SingleFundraiser({ id }) {
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
  ] = useMutation(UPDATE_FUNDRAISER_WITH_IMAGE_MUTATION);

  const [
    updateFundraiserNoImage,
    {
      data: updateDataNoImage,
      loading: updateLoadingNoImage,
      error: updateErrorNoImage,
    },
  ] = useMutation(UPDATE_FUNDRAISER_NO_IMAGE_MUTATION);

  const [deleteFundraiser, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_FUNDRAISER_MUTATION, {
      variables: {
        id,
      },
      update,
    });

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const Fundraiser = data?.Fundraiser;
  const FundraiserImageSource = Fundraiser?.photo?.image?.publicUrlTransformed;
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: Fundraiser?.name || '',
    description: Fundraiser?.description || '',
    image: FundraiserImageSource,
  });

  function checkIfClickedOutside(e) {
    const innerDiv = document.getElementById('form');
    if (isUpdateModalOpen) {
      if (!innerDiv.contains(e.target)) {
        setIsUpdateModalOpen(false);
      }
    }
  }

  function runImageQueryOrNoImageQuery() {
    if (inputs.image === FundraiserImageSource) {
      updateFundraiserNoImage({
        variables: {
          id,
          name: inputs.name,
          description: inputs.description,
        },
      })
        .then((res) => {
          clearForm();
          console.log(res);
          setIsUpdateModalOpen(false);
        })
        .catch((err) => console.error(err));
    } else {
      updateFundraiserWithImage({
        variables: {
          id,
          name: inputs.name,
          description: inputs.description,
          image: inputs.image,
        },
      })
        .then((res) => {
          clearForm();
          console.log(res);
          setIsUpdateModalOpen(false);
        })
        .catch((err) => console.error(err));
    }
  }

  function handleDeleteFundraiser() {
    deleteFundraiser()
      .then((res) => {
        console.log(res);
        Router.push({
          pathname: `/fundraisers`,
        });
        alert('Fundraiser deleted');
      })
      .catch((err) => console.error(err));
  }

  if (loading) return <p>Loading...</p>;
  if (error || updateErrorWithImage || updateErrorNoImage) {
    return (
      <DisplayError
        error={error || updateErrorWithImage || updateErrorNoImage}
      />
    );
  }

  return (
    <>
      <FundraiserSection>
        <TitleGroup>
          <Title>{Fundraiser.name}</Title>
          <UpdateButtonGroup>
            <UpdateButton onClick={() => setIsUpdateModalOpen(true)}>
              Edit Fundraiser
            </UpdateButton>
            <UpdateButton onClick={() => setIsDeleteModalOpen(true)}>
              Delete Fundraiser
            </UpdateButton>
          </UpdateButtonGroup>
        </TitleGroup>
        <FundraiserInfo>
          <Details>
            <Image src={FundraiserImageSource} alt="" />
            <Description>{Fundraiser.description}</Description>
          </Details>
          <Sidebar>
            <AmountGroup>
              <AmountRaised>
                {formatCentsToDollars(Fundraiser.amount)}
              </AmountRaised>{' '}
              raised of {formatCentsToDollars(Fundraiser.goal)} goal
            </AmountGroup>
            <PercentageBarGroup>
              <PercentageBarFilled
                filled={(Fundraiser.amount / Fundraiser.goal) * 100}
              />
              <PercentageBar />
            </PercentageBarGroup>
            <ButtonGroup>
              <ShareButton>Share</ShareButton>
              <DonateButton>Donate now</DonateButton>
            </ButtonGroup>
            <DonorList>
              {donors.map((donor, i) => (
                <DonorCard key={i}>
                  <DonorCardPhoto src={donor.image} alt="" />
                  <DonorCardDetails>
                    <DonorCardName>{donor.name}</DonorCardName>
                    <DonorCardAmount>Donated ${donor.amount}</DonorCardAmount>
                  </DonorCardDetails>
                </DonorCard>
              ))}
            </DonorList>
            <DonorListSeeAllButton>See all</DonorListSeeAllButton>
          </Sidebar>
        </FundraiserInfo>
      </FundraiserSection>
      <UpdateFormContainer
        isUpdateModalOpen={isUpdateModalOpen}
        onClick={checkIfClickedOutside}>
        <UpdateForm
          id="form"
          onSubmit={async (e) => {
            e.preventDefault();
            await runImageQueryOrNoImageQuery();
          }}>
          <CloseIcon
            src={CloseIconImage}
            alt="close icon"
            onClick={() => setIsUpdateModalOpen(false)}
          />
          <DisplayError error={error} />
          <fieldset disabled={loading} aria-busy={loading}>
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
              />
            </label>
            <div className="button-group">
              <button type="submit">Create Fundraiser</button>
              <button type="button" onClick={clearForm}>
                Clear Form
              </button>
            </div>
          </fieldset>
        </UpdateForm>
      </UpdateFormContainer>
      <DeleteFormContainer isDeleteModalOpen={isDeleteModalOpen}>
        <DeleteFormGroup>
          <DeleteFormTitle>Delete Fundraiser?</DeleteFormTitle>
          <DeleteFormButton onClick={handleDeleteFundraiser}>
            Delete
          </DeleteFormButton>
        </DeleteFormGroup>
      </DeleteFormContainer>
    </>
  );
}
