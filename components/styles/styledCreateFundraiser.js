import styled from 'styled-components';

export const CreateFundraiserComponent = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 75px;
  width: 75%;
  @media (max-width: 800px) {
    width: 85%;
    flex-direction: column;
  }
`;

export const InstructionsSection = styled.div`
  width: 40%;
  background: linear-gradient(
    0deg,
    rgba(255, 123, 111, 1) 0%,
    rgba(255, 194, 198, 1) 100%
  );

  padding: 10rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const InstructionsTitle = styled.h3`
  text-align: center;
  margin: 0 0 15px 0;
  line-height: 1.5;
  font-size: 2.5rem;
  color: white;
  @media (max-width: 550px) {
    font-size: 1.7rem;
    margin: 0 0 5px 0;
  }
`;

export const InstructionsSubtitle = styled.p`
  text-align: center;
  margin: 0;
  line-height: 1.2;
  font-size: 1.5rem;
  color: white;
  @media (max-width: 550px) {
    font-size: 1.1rem;
  }
`;

export const FormSection = styled.div`
  width: 60%;
  padding: 20px 0;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
