import styled, { css } from 'styled-components';

export const HeaderComponent = styled.header`
  width: 95%;
  display: flex;
  justify-content: ${(props) => (props.mobileMenu ? 'center' : 'center')};
  align-items: center;
  font-size: 1.5rem;
  padding: ${(props) => (props.mobileMenu ? '0 2rem' : '0 2rem')};
  margin: auto;
  @media (min-width: 1080px) {
    max-width: 1080px;
  }
  & > * {
    flex: 1;
    text-align: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 3rem;
  min-width: 85px;
  .logo__anchor {
    width: 100%;
    position: relative;
  }
  .logo-image {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const NavLink = styled.a`
  line-height: 1;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const NavButton = styled.a`
  color: var(--salmon);
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 2rem;
  border: 1px solid var(--salmon);
  white-space: nowrap;
  transition: all 0.4s ease;
  ${(props) =>
    props.mobileMenu &&
    css`
      width: 40%;
      min-width: 260px;
    `}
  &:hover {
    text-decoration: none;
    cursor: pointer;
    background-color: var(--salmon);
    color: white;
  }
`;

export const MobileWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const IconWrapper = styled.div`
  width: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-image {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 600px) {
    width: 2.2rem;
  }
`;

export const MobileDropdown = styled.div`
  flex-direction: column;
  align-items: center;
  background: white;
  width: 100%;
  margin: auto;
  padding: 1rem 0.5rem;
  position: absolute;
  top: 47px;
  height: 100vh;
  overflow: hidden;
  z-index: 3;
  font-size: 2rem;
  text-align: center;
  & > * {
    margin: 1rem 0;
  }
`;

export const MobileMenuWrapper = styled(MobileWrapper)``;

export const HamburgerIconWrapper = styled(IconWrapper)``;

export const MobileMenu = styled(MobileDropdown)`
  display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
`;

export const CloseIconWrapper = styled(IconWrapper)``;
