import styled from 'styled-components';

export const FundraisersLeadComponent = styled.div`
  width: 95%;
  margin: 25px 0 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  padding: 3.2rem 1.6rem;
  @media (min-width: 900px) {
    align-items: flex-start;
  }
`;

export const FundraisersTitle = styled.h1`
  font-size: 3.5rem;
  margin: 0 0 20px 0;
  width: 100%;
  line-height: 1;
`;

export const FundraisersSubtitle = styled.div`
  font-size: 2rem;
  width: 100%;
  margin: 0 0 20px 0;
  line-height: 1.2;
`;

export const CreateFundraiserButton = styled.button`
  width: 100%;
  max-width: 360px;
  background-color: var(--salmon);
  color: white;
  font-size: 1.8rem;
  border: none;
  padding: 1.6rem;
  border-radius: 1rem;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  @media (min-width: 900px) {
    max-width: 250px;
  }
`;
