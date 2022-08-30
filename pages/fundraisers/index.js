import Fundraisers from '../../components/Fundraisers';
import styled from 'styled-components';

const FundraiserGroupStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
  width: 90%;
`;

export default function FundraisersPage() {
  return (
    <FundraiserGroupStyles>
      <Fundraisers />
    </FundraiserGroupStyles>
  );
}
