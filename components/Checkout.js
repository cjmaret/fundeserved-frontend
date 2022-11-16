import { gql, useMutation } from '@apollo/client';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Router from 'next/dist/client/router';
import nProgress from 'nprogress';
import { useState } from 'react';
import styled from 'styled-components';
import { formatDollarsToCents } from '../lib/formatMoney';
import { CURRENT_USER_QUERY } from './User';

const CheckoutFormComponent = styled.form`
  display: grid;
  grid-gap: 1rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  & > button {
    background-color: ${(props) => (props.loading ? 'grey' : 'var(--salmon)')};
    color: white;
    font-size: 2rem;
    width: 175px;
    margin: 20px auto 0 auto;
    border: none;
    border-radius: 5px;
    padding: 1rem 0;
    transition: opacity 0.4s ease;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
  .card {
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px 10px;
  }
`;

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION(
    $token: String!
    $amount: Int!
    $fundraiserId: String!
  ) {
    checkout(token: $token, amount: $amount, fundraiserId: $fundraiserId) {
      id
    }
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm({ amount, fundraiserId }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    nProgress.start();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (error) {
      setError(error);
      nProgress.done();
      return; 
    }
    await checkout({
      variables: {
        token: paymentMethod.id,
        amount: formatDollarsToCents(amount),
        fundraiserId,
      },
    })
      .then((res) => {
        Router.push({
          pathname: `/fundraiser/${fundraiserId}`,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    setLoading(false);
    nProgress.done();
  }
  return (
    <CheckoutFormComponent onSubmit={handleSubmit}>
      {graphQLError && <p>{graphQLError.message}</p>}
      <CardElement className="card" />
      <button disabled={loading} loading={loading}>
        {loading ? 'One moment' : 'Donate now'}
      </button>
    </CheckoutFormComponent>
  );
}

export default function Checkout({ amount, fundraiserId }) {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm amount={amount} fundraiserId={fundraiserId} />
    </Elements>
  );
}
