import styled from 'styled-components';

export const JoinComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 2rem;
  padding: 2rem;
  margin: 10rem;
  max-width: 1080px;
  background-color: var(--green);
  color: var(--white);
  @media (min-width: 950px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const ImageWrapper = styled.div`
  padding: 2rem 0;
  width: 100%;
  max-width: 200px;
  .join-image {
    width: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 950px) {
    margin-bottom: 0;
    width: 60%;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  line-height: 1.2;
  margin: 0 0 3rem 0;
  @media (min-width: 1110px) {
    font-size: 3.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Button = styled.a`
  background-color: var(--salmon);
  color: white;
  border-radius: 3rem;
  padding: .5rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.4s ease;
  border: none;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const StartButton = styled(Button)`
  background-color: var(--salmon);
  color: white;
  margin-bottom: 2rem;
  @media (min-width: 950px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

export const DonateButton = styled(Button)`
  border: 1px solid var(--white);
  color: var(--white);
  background-color: transparent;
`;
