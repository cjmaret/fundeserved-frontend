import styled from 'styled-components';

export const HeroComponent = styled.section`
  position: relative;
  width: 100%;
  background-color: var(--salmon);
  display: flex;
  justify-content: center;
  padding: 3rem;
  height: 70vh;
  @media (min-width: 750px) {
    height: 100vh;
  }
`;

export const HeroContentGroup = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeroDetails = styled.div`
  width: 55%;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  color: white;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  font-size: 3rem;
  @media (min-width: 500px) {
    font-size: 3.5rem;
    margin: 0 0 2rem 0;
  }
  @media (min-width: 700px) {
    font-size: 5rem;
    margin: 0 0 3rem 0;
  }
`;

export const HeroButton = styled.button`
  padding: .75rem 1.5rem;
  border-radius: 1.5rem;
  border: none;
  color: var(--white);
  background-color: var(--green);
  font-size: 1.8rem;
  font-weight: 600;
  transition: transform 0.4s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  @media (min-width: 500px) {
    font-size: 2.5rem;
    padding: 1rem 2rem;
  }
`;

export const HeroImageWrapper = styled.div`
  border: 1px solid green;
  overflow: hidden;
  height: 100vh;
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FlamingoImage = styled.img`
  object-fit: contain;
  max-width: 300px;
`;

export const FlamingoImage5 = styled(FlamingoImage)`
  max-width: 500px;
  width: 50%;
`;
