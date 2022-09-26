import styled from 'styled-components';

export const FundraiserCard = styled.div`
  display: grid;
  grid-auto-flow: row;
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
  height: 250px;
  overflow: hidden;
  .fundraiser-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FundraiserDetails = styled.div`
  margin: 10px 0;
  width: 95%;
`;

export const FundraiserTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: black;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const FundraiserParagraph = styled.p`
  font-size: 2rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
`;

export const PercentageBarGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0;
  padding: 0;
`;

export const PercentageBar = styled.div`
  width: 100%;
  background-color: var(--red);
  opacity: 0.2;
  border-radius: 10px;
  height: 5px;
`;

export const PercentageBarFilled = styled.div`
  position: absolute;
  width: ${(props) => (props.filled <= 100 ? props.filled : 100)}%;
  height: 5px;
  background-color: var(--red);
  border-radius: 10px;
`;

export const FundraiserAmount = styled.p`
  margin: 0.5rem 0;
  font-size: 2.2rem;
  line-height: 1.5;
  font-weight: 400;
`;

export const AmountSpan = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;
