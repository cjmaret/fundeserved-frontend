import styled from 'styled-components';
import HeroImage from '../../images/hero.jpg';

export const HeroComponent = styled.section`
  position: relative;
  width: 100%;
  /* max-height: 700px; */
`;

export const HeroDetails = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, -50%);
  left: 10%;
  width: 50%;
`;

export const HeroTitle = styled.h1`
  color: white;
  text-shadow: 1px 1px 5px #000;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  font-size: 3rem;
`;

export const HeroButton = styled.button`
  padding: 1rem;
  border-radius: 1.5rem;
  border: none;
  box-shadow: 1px 1px 5px #000;
  color: var(--white);
  background-color: var(--red);
  font-size: 1.5rem;
  font-weight: 600;
`;

export const HeroImageWrapper = styled.div`
  /* border-radius: 2rem; */
  border: 1px solid green;
  overflow: hidden;
  /* height: 100%;
  max-height: 700px; */
  height: 70vh;
  .hero-image {
    width: 100%;
    height: 100%;
  }
`;
