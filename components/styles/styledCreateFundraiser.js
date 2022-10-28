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
  width: 75%;
  margin-top: 25px;
  width: 85%;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
    margin: 50px 0;
  }
`;

export const InstructionsSection = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 123, 111, 1) 0%,
    rgba(255, 194, 198, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  @media (min-width: 800px) {
    width: 40%;
    padding: 10rem 2rem 2rem 2rem;
  }
`;

export const InstructionsTitle = styled.h3`
  text-align: center;
  line-height: 1.5;
  color: white;
  font-size: 1.7rem;
  margin: 0 0 5px 0;
  @media (min-width: 550px) {
    font-size: 2.5rem;
    margin: 0 0 15px 0;
  }
`;

export const InstructionsSubtitle = styled.p`
  text-align: center;
  margin: 0;
  line-height: 1.2;
  color: white;
  font-size: 1.1rem;
  @media (min-width: 550px) {
    font-size: 1.5rem;
  }
`;

export const FormSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    width: 60%;
    padding: 20px 0;
  }
`;
