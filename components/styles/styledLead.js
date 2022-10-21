import styled from 'styled-components';

export const LeadComponent = styled.section`
  margin: 5rem 0;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  width: 90%;
  border: 1px solid red;
`;

export const Title = styled.h2`
  margin: 0 0 3rem 0;
  line-height: 1.2;
  width: 95%;
  font-size: 2.8rem;
  @media (min-width: 750px) {
    font-size: 4rem;
    margin: 0 0 5rem 0;
    width: 60%;
    align-self: flex-start;
    margin-left: 5rem;
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Step = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 5rem 0;
  line-height: 1.2;
  width: 100%;
  text-align: center;
  &.right {
    align-self: flex-end;
    background-color: yellow;
  }
  &:last-child {
    margin: 0;
  }
`;

export const StepImage = styled.div`
  width: 50%;
  max-width: 350px;
  position: relative;
  .step-image {
    width: 100%;
  }
`;

export const StepDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
`;

export const StepTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  line-height: 1;
  @media (min-width: 750px) {
    font-size: 3rem;
  }
  @media (min-width: 1110px) {
    font-size: 3rem;
  }
`;

export const StepSpan = styled.span`
  font-size: 3.5rem;
`;

export const StepParagraph = styled.p`
  margin: 0;
  font-size: 1.5rem;
  @media (min-width: 750px) {
    font-size: 2rem;
  }
`;
