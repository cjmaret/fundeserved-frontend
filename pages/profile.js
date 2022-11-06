import { useRouter } from 'next/router';
import Fundraisers from '../components/Fundraisers';
import PleaseSignIn from '../components/PleaseSignIn';
import Profile from '../components/Profile';

export default function MyProfilePage() {
  const { query, pathname } = useRouter();
  const page = parseInt(query.page);
  return (
    <>
      <PleaseSignIn>
        <Profile />
      </PleaseSignIn>
    </>
  );
}
