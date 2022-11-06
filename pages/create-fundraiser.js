import CreateFundraiser from '../components/CreateFundraiser';
import PleaseSignIn from '../components/PleaseSignIn';

export default function CreateFundraiserPage() {
  return (
    <PleaseSignIn>
      <CreateFundraiser />
    </PleaseSignIn>
  );
}
