import { useRouter } from 'next/dist/client/router';
import MyFundraisers from '../components/MyFundraisers';
import Pagination from '../components/Pagination';

export default function MyFundraisersPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <>
      <Pagination page={page || 1} />
      <MyFundraisers page={page || 1} />
      <Pagination page={page || 1} />
    </>
  );
}
