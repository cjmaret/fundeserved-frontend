import styled from 'styled-components';

export const HeaderComponent = styled.header`
  width: 95%;
  display: flex;
  justify-content: ${(props) =>
    props.mobileMenu ? 'center' : 'space-between'};
  align-items: center;
  font-size: 2rem;
  padding: ${(props) => (props.mobileMenu ? 'none' : '1rem 1rem')};
  margin: auto;
  @media (min-width: 1080px) {
    max-width: 1080px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.mobileMenu ? '5%' : '15%')};
  max-width: 150px;
  min-width: 150px;
  text-align: center;
  font-size: 1.5rem;
  flex: ${(props) => (props.mobileMenu ? '1' : 'none')};
  .logo__anchor {
    width: 100%;
    position: relative;
  }
  .logo-image {
    width: 100%;
    height: 100%;
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

export const MobileMenuWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const IconWrapper = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-image {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerIconWrapper = styled(IconWrapper)``;

export const MobileMenu = styled.div`
  display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  background: white;
  width: 100%;
  margin: auto;
  padding: 1rem 0.5rem;
  position: absolute;
  top: 64px;
  height: 100vh;
  overflow: hidden;
  z-index: 2;
  font-size: 2rem;
  text-align: center;
  & > * {
    margin: 0.5rem 0;
  }
`;

export const CloseIconWrapper = styled(IconWrapper)``;

export const Search = styled.div`
  visibility: ${(props) => (props.isMenuOpen ? 'hidden' : 'visible')};
  flex: ${(props) => (props.mobileMenu ? '1' : 'none')};
`;

// export const IndividualsNavItem = styled.div``;

// export const IndividualsList = styled.ul`
//   position: ${(props) => (props.isMenuOpen ? 'relative' : 'absolute')};
//   z-index: 1;
//   background-color: white;
//   box-shadow: 1px 1px 10px #000000;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: ${(props) => (props.individualsActive ? 'block' : 'none')};
// `;

// export const IndividualsListItem = styled.li``;
