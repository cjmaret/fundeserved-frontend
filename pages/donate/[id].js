import Donate from '../../components/Donate';

export default function DonatePage({ query }) {
  return <Donate id={query.id} />;
}
