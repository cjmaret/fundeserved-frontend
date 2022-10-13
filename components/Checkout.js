import { gql, useMutation } from '@apollo/client';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
import { useState } from 'react';
import styled from 'styled-components';
import { formatDollarsToCents } from '../lib/formatMoney';
import { CURRENT_USER_QUERY } from './User';

const CheckoutFormComponent = styled.form`
  box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
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
  const router = useRouter();

  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  async function handleSubmit(e) {
    // stop form from submitting and turn loader on
    e.preventDefault();
    setLoading(true);
    // 2. start the page transition
    nProgress.start();
    // 3. create the payment method via stripe (token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    // 4. handle any errors from stripe
    if (error) {
      setError(error);
      nProgress.done();
      return; // stops the checkout from happening
    }
    // 5. send the token from step 3 to our keystone server, via a custom mutation
    await checkout({
      variables: {
        token: paymentMethod.id,
        amount: formatDollarsToCents(amount),
        fundraiserId,
      },
    })
      .then((res) => {
        router.push({
          pathname: `/my-fundraisers`,
        });
      })
      .catch((err) => console.error(err));
    // 6. change the page to view the order
    // 8. turn off loader
    setLoading(false);
    nProgress.done();
  }
  return (
    <CheckoutFormComponent onSubmit={handleSubmit}>
      {graphQLError && <p>{graphQLError.message}</p>}
      <CardElement />
      <button>Donate now</button>
    </CheckoutFormComponent>
  );
}

// useStripe needs to be wrapped in the Elements provider before it can be used
export default function Checkout({ amount, fundraiserId }) {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm amount={amount} fundraiserId={fundraiserId} />
    </Elements>
  );
}
