import Fundraisers from '../../components/Fundraisers';
import styled from 'styled-components';

const FundraiserGroupStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
  background-color: var(--lightGrey);
  padding: 25px;
`;

export default function FundraisersPage() {

  return (
    <FundraiserGroupStyles>
      <Fundraisers />
    </FundraiserGroupStyles>
  );
}
