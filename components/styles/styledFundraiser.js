import styled from 'styled-components';

const FundraiserCard = styled.div`
  display: grid;
  grid-auto-flow: row;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
`;

const FundraiserImageWrapper = styled.div`
  width: 100%;
  /* height: 25vw; */
  /* border: 1px solid red; */
  /* overflow: hidden; */
  .fundraiser-image {
    width: 100%;
  }
`;

const FundraiserTitle = styled.h1`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: black;
  /* border: 1px solid red; */
  /* height: 40px; */
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
  line-height: 1.5;
  font-weight: 700;
`;

export {
  FundraiserCard,
  FundraiserImageWrapper,
  FundraiserTitle,
  FundraiserParagraph,
  FundraiserAmount,
};
