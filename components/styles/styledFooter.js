import styled from 'styled-components';

export const FooterComponent = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  padding: 3rem 3rem 3rem 0;
`;

export const Logo = styled.div`
  width: 25%;
  margin-right: 10rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FundraiseList = styled(List)``;

export const LearnMoreList = styled(List)``;

export const ResourcesList = styled(List)``;

export const ListTitle = styled.h4`
  font-size: 1.75rem;
`;

export const ListItem = styled.li``;

export const ListLink = styled.a`
  &:hover {
    text-decoration: none;
    cursor: pointer;
    opacity: 0.7;
  }
`;
