import styled from 'styled-components';

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 1rem 1rem;
  margin: auto;
  @media (min-width: 1080px) {
    width: 1080px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  text-align: center;
  font-size: 1.5rem;
  .logo__anchor {
    color: var(--red);
    font-weight: 700;
  }
`;

export const NavLink = styled.a`
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const NavButton = styled.a`
  color: var(--red);
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 2rem;
  border: 1px solid var(--red);
  &:hover {
    text-decoration: none;
    cursor: pointer;
    background-color: var(--red);
    color: white;
  }
  transition: all 0.4s ease;
`;

export const IndividualsNavItem = styled.div``;

export const IndividualsList = styled.ul`
  position: absolute;
  z-index: 1;
  background-color: white;
  box-shadow: 1px 1px 10px #000000;
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.individualsHovered ? 'block' : 'none')};
`;

export const IndividualsListItem = styled.li``;