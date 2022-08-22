import styled from 'styled-components';

export const FooterComponent = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  max-width: 1080px;
  width: 90%;
`;

export const Logo = styled.div`
  width: 50%;
  /* margin-right: 10rem; */
  margin-bottom: 2rem;
`;

export const ListGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 5vw;
`;

export const ListTitle = styled.h4`
  font-size: 1.75rem;
  margin: 0 0;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3vw;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FundraiseList = styled(List)``;

export const LearnMoreList = styled(List)``;

export const ResourcesList = styled(List)``;

export const ListItem = styled.li`
  line-height: 1.5;
`;

export const ListLink = styled.a`
  &:hover {
    text-decoration: none;
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const RightsReserved = styled.p``;
