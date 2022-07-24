import styled from 'styled-components';

export const StatsComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rem 0 20rem 0;
  margin-bottom: 5rem;
`;

export const Title = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 5rem;
  line-height: 1.5;
`;

export const StatsGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  position: relative;
`;

export const StatTitle = styled.h3`
  font-size: 4rem;
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
  font-size: 1.5rem;
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
