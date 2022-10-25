import { useRouter } from 'next/router';
import Fundraisers from '../components/Fundraisers';
import Profile from '../components/Profile';

export default function MyProfilePage() {
  const { query, pathname } = useRouter();
  const page = parseInt(query.page);
  return (
    <>
      <Profile />
    </>
  );
}
