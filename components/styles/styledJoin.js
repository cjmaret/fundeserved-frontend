import styled from 'styled-components';

export const JoinComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 2rem;
  padding: 2rem 0;
  margin: 5rem auto 5rem auto;
  max-width: 1080px;
  border: 1px solid red;
  @media (min-width: 950px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const ImageWrapper = styled.div`
  padding: 2rem 0;
  width: 70%;
  max-width: 250px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 1rem 1rem;
  @media (min-width: 950px) {
    margin-bottom: 0;
    margin-right: 3rem;
    width: 60%;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  width: 95%;
  text-align: center;
  line-height: 1.2;
  margin: 0 0 3rem 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  background-color: var(--red);
  color: white;
  border-radius: 3rem;
  padding: 1.5rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.4s ease;
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const StartButton = styled(Button)`
  background-color: var(--red);
  color: white;
  margin-bottom: 2rem;
  @media (min-width: 950px) {
    margin-bottom: 0;
    margin-right: 4rem;
  }
`;

export const DonateButton = styled(Button)`
  border: 1px solid var(--grey);
  color: black;
  background-color: transparent;
`;
