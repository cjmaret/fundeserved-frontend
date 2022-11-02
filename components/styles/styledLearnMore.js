import styled from 'styled-components';

export const LearnMoreComponent = styled.section`
  margin: 25px 0 50px 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;

  @media (min-width: 400px) {
    width: 90%;
  }
  @media (min-width: 900px) {
    margin: 50px 0;
  }
`;

export const LearnMoreImageWrapper = styled.div`
  width: 95%;
  margin-bottom: 3rem;
  & > img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 500px) {
    width: 400px;
  }
`;

export const LearnMoreInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
  width: 100%;
  & > * {
    margin: 0 0 1rem 0;
    line-height: 1.5;
  }
`;

export const LearnMoreTitle = styled.h2`
  font-size: 2.5rem;
  @media (min-width: 900px) {
    font-size: 3rem;
  }
`;

export const LearnMoreQuestionGroup = styled.div`
  margin: 0 0 1rem 0;
`;

export const LearnMoreQuestion = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  margin: 1rem 0 1rem 0;
`;

export const LearnMoreParagraph = styled.p`
  margin: 0 0 1rem 0;
`;

export const SuccessStoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (min-width: 970px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const SuccessStory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(143, 204, 143, 0.4);
  border-radius: 10px;
  margin: 2rem 0;
  padding: 2rem 1rem;
  max-width: 780px;
  width: 100%;
  @media (min-width: 500px) {
    padding: 2rem;
    width: 90%;
  }
  @media (min-width: 970px) {
    max-width: 400px;
  }
`;

export const SuccessPersonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
`;

export const SuccessPersonImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  overflow: hidden;
  margin: 0 1rem 0 0;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 500px) {
    margin: 0 1rem 0 0;
  }
`;

export const SuccessPersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  & > * {
    margin: 0 0 1rem 0;
    line-height: 1.2;
    width: 100%;
  }
`;

export const SuccessPersonTitle = styled.h3``;

export const SuccessPersonDescription = styled.p`
  font-size: 1.5rem;
`;

export const SuccessPersonQuote = styled.p`
  font-style: italic;
  font-size: 1.7rem;
`;
