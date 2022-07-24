import styled from 'styled-components';

export const JoinComponent = styled.section`
  display: flex;
  align-items: center;
  width: 95%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 2rem;
  padding: 5rem 0;
  margin: auto;
  margin-bottom: 50rem;
`;

export const Details = styled.div`
  min-width: 60%;
  padding: 2rem 2rem;
  margin-right: 3rem;
`;

export const ImageWrapper = styled.div`
  padding: 2rem 2rem;
  width: 60%;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 3rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: var(--red);
  color: white;
  border-radius: 3rem;
  padding: 1.5rem 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  transition: all 0.4s ease;
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.1)
  }
`;

export const StartButton = styled(Button)`
  background-color: var(--red);
  color: white;
  margin-right: 4rem;
`;

export const DonateButton = styled(Button)`
  border: 1px solid var(--grey);
  color: black;
  background-color: transparent;
`;
