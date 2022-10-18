import styled from 'styled-components';

export const StatsComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  max-width: 1080px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin: 0 0 5vw 0;
  line-height: 1.5;
  width: 90%;
  @media (min-width: 950px) {
    font-size: 5rem;
  }
`;

export const StatsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 950px) {
    flex-wrap: nowrap;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 50px 0;
  @media (min-width: 500px) {
    width: 50%;
  }
`;

export const StatTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  z-index: 1;
  color: black;
  margin: 0;
  line-height: 1.2;
`;

export const StatParagraph = styled.p`
  margin: 0;
  color: var(--grey);
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const StatCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--red);
  opacity: 0.3;
  width: 125px;
  height: 125px;
  border-radius: 50%;
`;
