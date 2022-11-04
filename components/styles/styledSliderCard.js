import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1rem;
  margin: 0;
  position: relative;
  max-width: 200px;
  box-sizing: border-box;
`;

export const CardLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 30vw;
  max-height: 200px;
  border-radius: 1rem;
  overflow: hidden;
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 0 0.5rem;
  color: var(--white);
  @media (min-width: 500px) {
    padding: 1rem;
  }
`;

export const CardTitle = styled.h3`
  margin: 0.25rem 0;
  width: 95%;
  font-size: 1.2rem;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  @media (min-width: 450px) {
    font-size: 1.7rem;
    margin: 0.5rem 0;
  }
  @media (min-width: 850px) {
    font-size: 1.9rem;
  }
`;

export const CardParagraph = styled.p`
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
  font-size: 1.4rem;
`;

export const AmountRaised = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
  @media (min-width: 450px) {
    font-size: 1.5rem;
  }
  @media (min-width: 850px) {
    font-size: 1.7rem;
  }
`;
