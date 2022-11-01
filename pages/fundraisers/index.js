import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Fundraisers from '../../components/Fundraisers';
import FundraisersLead from '../../components/FundraisersLead';
import Pagination from '../../components/Pagination';

export const FundraisersSection = styled.section`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function FundraisersPage() {
  const { query, pathname } = useRouter();
  const page = parseInt(query.page);
  return (
    <FundraisersSection>
      <FundraisersLead pathname={pathname} />
      <Pagination page={page || 1} />
      <Fundraisers pathname={pathname} page={page || 1} />
      <Pagination page={page || 1} />
    </FundraisersSection>
  );
}
