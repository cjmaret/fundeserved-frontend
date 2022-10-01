import styled from 'styled-components';

export const FundraisersLead = styled.div`
  width: 90%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
`;

export const FundraisersTitle = styled.h1`
  font-size: 40px;
  margin: 0 0 20px 0;
  width: 100%;
  line-height: 1;
`;

export const FundraisersSubtitle = styled.div`
  font-size: 25px;
  width: 100%;
  margin: 0 0 40px 0;
  line-height: 1;
`;

export const CreateFundraiserButton = styled.button`
  padding: 15px 60px;
  background-color: var(--red);
  color: white;
  font-size: 25px;
  border: none;
  border-radius: 5px;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const FundraisersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
  background-color: rgba(235, 235, 235, 0.3);
  padding: 25px;
  max-width: 1080px;
`;
