import styled from 'styled-components';

export const FundraiserCardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 0;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  justify-items: center;
`;

export const FundraiserLink = styled.a`
  position: absolute;
  background-color: none;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const FundraiserImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 30vw;
  max-height: 300px;
  .fundraiser-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FundraiserDetails = styled.div`
  margin: 0.5rem 0;
  width: 95%;
  @media (min-width: 500px) {
    margin: 1rem 0;
  }
`;

export const FundraiserTitle = styled.h1`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: var(--grey);
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

export const FundraiserParagraph = styled.p`
  font-size: .9rem;
  margin: 0 0 1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5; 
  @media (min-width: 500px) {
    font-size: 1.2rem;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const CreatedOn = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.2;
  @media (min-width: 500px) {
    font-size: 1.3rem;
  }
`;

export const PercentageBarGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 0.5rem 0 0 0;
  padding: 0;
  @media (min-width: 500px) {
    margin: 1rem 0 0 0;
  }
`;

export const PercentageBar = styled.div`
  width: 100%;
  background-color: var(--salmon);
  opacity: 0.2;
  border-radius: 10px;
  height: 5px;
`;

export const PercentageBarFilled = styled.div`
  position: absolute;
  width: ${(props) => (props.filled <= 100 ? props.filled : 100)}%;
  height: 5px;
  background-color: var(--salmon);
  border-radius: 10px;
`;

export const FundraiserAmount = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  @media (min-width: 500px) {
    font-size: 1.3rem;
  }
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const AmountSpan = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
  @media (min-width: 800px) {
    font-size: 1.7rem;
  }
`;
