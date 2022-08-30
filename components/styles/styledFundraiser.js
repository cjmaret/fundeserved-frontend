import styled from 'styled-components';

const FundraiserCard = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: minmax(20px, auto);
  border: 1px solid blue;
  background-color: white;
  padding: 5px;
`;

const FundraiserImageWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid red;
  /* height: 80px; */
  overflow: hidden;
  border-radius: 5px;
`;

const FundraiserTitle = styled.h1`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: black;
  border: 1px solid red;
  height: 40px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const FundraiserParagraph = styled.p`
  font-size: 1rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
`;

const FundraiserAmount = styled.p`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export {
  FundraiserCard,
  FundraiserImageWrapper,
  FundraiserTitle,
  FundraiserParagraph,
  FundraiserAmount,
};
