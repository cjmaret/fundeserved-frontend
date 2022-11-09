import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { formatDollarsToCents } from '../lib/formatMoney';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import { Form } from './styles/styledForm';
import { ALL_FUNDRAISERS_QUERY } from './Fundraisers';
import { CURRENT_USER_QUERY } from './User';
import { PAGINATION_COUNT_QUERY } from './Pagination';
import {
  CreateFundraiserComponent,
  FormGroup,
  FormSection,
  InstructionsSection,
  InstructionsSubtitle,
  InstructionsTitle,
} from './styles/styledCreateFundraiser';
import { MobileContext } from '../contexts/mobileContext';
import { useContext } from 'react';

export const CREATE_FUNDRAISER_MUTATION = gql`
  mutation CREATE_FUNDRAISER_MUTATION(
    $name: String!
    $description: String!
    $goal: Int!
    $image: Upload
  ) {
    createFundraiser(
      data: {
        name: $name
        description: $description
        amount: 0
        goal: $goal
        status: "ACTIVE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      goal
      description
      name
    }
  }
`;

export default function CreateFundraiser() {
  const mobileWidth = useContext(MobileContext);
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: '',
    description: '',
    goal: '',
  });

  const [createFundraiser, { loading, error, data }] = useMutation(
    CREATE_FUNDRAISER_MUTATION,
    {
      variables: { ...inputs, goal: formatDollarsToCents(inputs.goal) },
      refetchQueries: [
        { query: ALL_FUNDRAISERS_QUERY },
        { query: CURRENT_USER_QUERY },
        { query: PAGINATION_COUNT_QUERY },
      ],
    }
  );

  const textAreaRows = mobileWidth ? 6 : 9;

  return (
    <CreateFundraiserComponent>
      <FormGroup>
        <InstructionsSection>
          <InstructionsTitle>
            Create your Fundeserved fundraiser here
          </InstructionsTitle>
          <InstructionsSubtitle>
            Tell us why your fundraiser won't help anyone
          </InstructionsSubtitle>
        </InstructionsSection>
        <FormSection>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              await createFundraiser()
                .then((res) => {
                  clearForm();
                  Router.push({
                    pathname: `/fundraiser/${res.data.createFundraiser.id}`,
                  });
                })
                .catch((err) => console.error(err));
            }}>
            <DisplayError error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="name">
                Fundraiser Name
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
                Fundraiser Image
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="description">
                Fundraiser Description
                <textarea
                  type="textarea"
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={inputs.description}
                  onChange={handleChange}
                  rows={textAreaRows}
                />
              </label>
              <label htmlFor="goal">
                Fundraiser Goal
                <input
                  type="number"
                  id="goal"
                  name="goal"
                  placeholder="Goal"
                  value={inputs.goal}
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
          </Form>
        </FormSection>
      </FormGroup>
    </CreateFundraiserComponent>
  );
}
