import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import { PaginationComponent } from './styles/styledPagination';
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
    <PaginationComponent data-testid="pagination">
      <Head>
        <title>
          GoFundYourself - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/fundraisers/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p data-testid="page-count">
        Page {page} of {pageCount}
      </p>
      <Link href={`/fundraisers/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationComponent>
  );
}
