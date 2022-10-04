import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/Head';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import PaginationStyles from './styles/styledPagination';
import { perPage } from '../config';

export const PAGINATION_COUNT_QUERY = gql`
  query PAGINATION_COUNT_QUERY {
    _allFundraisersMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_COUNT_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;

  const { count } = data._allFundraisersMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>Fundeserved - Page {page} of ___</title>
      </Head>

      <Link href={`/fundraisers/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>Page __ of {pageCount}</p>
      <p>{count} Items Total</p>
      <Link href={`/fundraisers/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  );
}
