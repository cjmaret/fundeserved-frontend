import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  const token = query.token;

  if (!token) {
    return (
      <>
        <p style={{ 'font-size': '2.5rem' }}>
          Sorry, you need to request a password reset first
        </p>
        <RequestReset />
      </>
    );
  }

  return <Reset token={token} />;
}
