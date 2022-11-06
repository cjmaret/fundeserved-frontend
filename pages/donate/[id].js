import Donate from '../../components/Donate';
import PleaseSignIn from '../../components/PleaseSignIn';

export default function DonatePage({ query }) {
  return (
    <PleaseSignIn>
      <Donate id={query.id} />
    </PleaseSignIn>
  );
}
