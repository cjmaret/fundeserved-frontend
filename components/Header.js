import Link from 'next/link';
import {
  HeaderComponent,
  Logo,
  NavLink,
  NavButton,
} from './styles/styledHeader';
import { useContext, useEffect, useState } from 'react';
import HeaderLogoImage from '../images/header-logo-2.png';
import MenuWrapper from './MenuWrapper';
import { MobileContext } from '../contexts/mobileContext';
import { useUser } from './User';
import SignOut from './SignOut';
import Search from './Search';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const mobileMenu = useContext(MobileContext);
  const user = useUser();

  function closeAllMenus() {
    setIsMenuOpen(false);
    setIsSearchMenuOpen(false);
  }

  // one menu at a time
  useEffect(() => {
    function toggleMenus(e) {
      if (e.target.name === 'mobile-menu') {
        setIsSearchMenuOpen(false);
      } else if (e.target.name === 'mobile-search') {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('click', toggleMenus);
    return () => window.removeEventListener('click', toggleMenus);
  }, [isMenuOpen, isSearchMenuOpen]);

  function renderLogo() {
    return (
      <Logo mobileMenu={mobileMenu}>
        <Link href="/">
          <NavLink className="logo__anchor">
            <img
              className="logo-image"
              src={HeaderLogoImage}
              onClick={closeAllMenus}
              alt=""
            />
          </NavLink>
        </Link>
      </Logo>
    );
  }

  return (
    <HeaderComponent mobileMenu={mobileMenu}>
      <Search
        isSearchMenuOpen={isSearchMenuOpen}
        setIsSearchMenuOpen={setIsSearchMenuOpen}
        closeAllMenus={closeAllMenus}
        mobileMenu={mobileMenu}
      />
      {mobileMenu && renderLogo()}
      <MenuWrapper
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        mobileMenu={mobileMenu}>
        <Link href="/fundraisers">
          <NavLink onClick={closeAllMenus}>All Fundraisers</NavLink>
        </Link>
        <Link href="/learn-more">
          <NavLink onClick={closeAllMenus}>How it works</NavLink>
        </Link>
        {!mobileMenu && renderLogo()}
        {user && (
          <>
            <Link href="/profile">
              <NavLink onClick={closeAllMenus}>My Profile</NavLink>
            </Link>
            <SignOut />
          </>
        )}
        {!user && (
          <>
            <Link href="/sign-in">
              <NavLink onClick={closeAllMenus}>Sign In</NavLink>
            </Link>
            <Link href="/sign-up">
              <NavLink onClick={closeAllMenus}>Sign Up</NavLink>
            </Link>
          </>
        )}
        <Link href="/create-fundraiser">
          <NavButton onClick={closeAllMenus} mobileMenu={mobileMenu}>
            Start a Fundraiser
          </NavButton>
        </Link>
      </MenuWrapper>
    </HeaderComponent>
  );
}
