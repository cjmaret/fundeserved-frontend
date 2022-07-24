import styled from 'styled-components';

export const LeadComponent = styled.section`
  margin: 4rem 0;
  font-size: 1.5rem;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5rem;
`;

export const Paragraph = styled.p`
  margin: 0 0 1rem 0;
  font-weight: 700;
  color: var(--grey);
`;

export const Title = styled.h2`
  margin: 0 0 5rem 0;
  line-height: 1.5;
  width: 70%;
  font-size: 4rem;
  text-align: center;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const Step = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 5rem;
  line-height: 1.2;
  width: 100%;
  text-align: center;
  &.right {
    align-self: flex-end;
    background-color: yellow;
  }
`;

export const StepImage = styled.div`
  width: 40%;
`;

export const StepDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

export const StepTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 3.5rem;
`;

export const StepSpan = styled.span`
  font-size: 5rem;
`;

export const StepParagraph = styled.p`
  margin: 0;
  font-size: 2.5rem;
`;
