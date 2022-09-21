import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { formatDollarsToCents } from '../lib/formatMoney';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/styledForm';
import { ALL_FUNDRAISERS_QUERY } from './Fundraisers';

export const CREATE_FUNDRAISER_MUTATION = gql`
  mutation CREATE_FUNDRAISER_MUTATION(
    $name: String!
    $description: String!
    $amount: Int!
    $image: Upload
  ) {
    createFundraiser(
      data: {
        name: $name
        description: $description
        amount: $amount
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      amount
      description
      name
    }
  }
`;

export default function CreateFundraiser() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: '',
    description: '',
    amount: 0,
  });

  const [createFundraiser, { loading, error, data }] = useMutation(
    CREATE_FUNDRAISER_MUTATION,
    {
      variables: { ...inputs, amount: formatDollarsToCents(inputs.amount) },
      refetchQueries: [
        { query: ALL_FUNDRAISERS_QUERY },
        // { query: CURRENT_USER_QUERY },
        // { query: PAGINATION_QUERY },
      ],
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await createFundraiser()
          .then((res) => {
            clearForm();
            console.log(res);
            Router.push({
              pathname: `/fundraiser/${res.data.createFundraiser.id}`,
            });
          })
          .catch((err) => console.error(err));
      }}>
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
            required
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
        <label htmlFor="amount">
          Amount
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            value={inputs.amount}
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
  );
}
