import Image from 'next/image';
import {
  MobileMenuWrapper,
  MobileMenu,
  IconWrapper,
} from './styles/styledHeader';
import HamburgerIcon from '../images/hamburger-icon.png';
import CloseIcon from '../images/close-icon.png';

export default function MenuWrapper({
  children,
  mobileMenu,
  isMenuOpen,
  setIsMenuOpen,
}) {
  function toggleMenuOpen() {
    return isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  if (mobileMenu) {
    return (
      <>
        <MobileMenuWrapper>
          <IconWrapper onClick={() => toggleMenuOpen()}>
            <img
              src={isMenuOpen ? CloseIcon : HamburgerIcon}
              alt=""
              className="icon-image"
            />
          </IconWrapper>
        </MobileMenuWrapper>
        <MobileMenu isMenuOpen={isMenuOpen}>{children}</MobileMenu>
      </>
    );
  }
  return children;
}
