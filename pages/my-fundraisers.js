import { useRouter } from 'next/router';
import Fundraisers from '../components/Fundraisers';
import FundraisersLead from '../components/FundraisersLead';
import Pagination from '../components/Pagination';

export default function MyFundraisersPage() {
  const { query, pathname } = useRouter();
  const page = parseInt(query.page);
  return (
    <>
      <FundraisersLead pathname={pathname} />
      <Pagination page={page || 1} />
      <Fundraisers pathname={pathname} page={page || 1} />
      <Pagination page={page || 1} />
    </>
  );
}

