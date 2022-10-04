import { useRouter } from 'next/dist/client/router';
import AllFundraisers from '../../components/AllFundraisers';
import Pagination from '../../components/Pagination';

export default function FundraisersPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <>
      <Pagination page={page || 1} />
      <AllFundraisers page={page || 1}/>
      <Pagination page={page || 1} />
    </>
  );
}
