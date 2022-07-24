import styled from 'styled-components';

export const HeroComponent = styled.section`
  position: relative;
  width: 100%;
`;

export const HeroDetails = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, -50%);
  left: 5%;
  width: 50%;
`;

export const HeroTitle = styled.h1`
  color: white;
  text-shadow: 1px 1px 5px #000;
  line-height: 1.2;
`;

export const HeroButton = styled.button`
  padding: 10px 10px;
  border-radius: 2rem;
  border: none;
  box-shadow: 1px 1px 5px #000;
  color: var(--white);
  background-color: var(--red);
  font-weight: 600;
`;
