import Link from 'next/link';
import {
  HeaderComponent,
  Logo,
  NavLink,
  NavButton,
} from './styles/styledHeader';
import { useContext, useEffect, useState } from 'react';
import LogoImage from '../images/logo.jpg';
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

  return (
    <HeaderComponent mobileMenu={mobileMenu}>
      <Search
        isSearchMenuOpen={isSearchMenuOpen}
        setIsSearchMenuOpen={setIsSearchMenuOpen}
        closeAllMenus={closeAllMenus}
        mobileMenu={mobileMenu}
      />
      {mobileMenu && (
        <Logo mobileMenu={mobileMenu}>
          <Link href="/">
            <NavLink className="logo__anchor">
              <img
                className="logo-image"
                src={LogoImage}
                onClick={() => setIsMenuOpen(false)}
                alt=""
              />
            </NavLink>
          </Link>
        </Logo>
      )}
      <MenuWrapper
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        mobileMenu={mobileMenu}>
        <Link href="/fundraisers">
          <NavLink onClick={() => closeAllMenus(false)}>
            All Fundraisers
          </NavLink>
        </Link>
        <Link href="/mario">
          <NavLink onClick={() => closeAllMenus()}>How it works</NavLink>
        </Link>
        {!mobileMenu && (
          <Logo>
            <Link href="/">
              <NavLink className="logo__anchor">
                <img className="logo-image" src={LogoImage} alt="" />
              </NavLink>
            </Link>
          </Logo>
        )}
        {user && (
          <>
            <Link href="/my-fundraisers">
              <NavLink onClick={() => closeAllMenus(false)}>
                My Fundraisers
              </NavLink>
            </Link>
            <SignOut />
          </>
        )}
        {!user && (
          <>
            <Link href="/sign-in">
              <NavLink onClick={() => closeAllMenus(false)}>Sign In</NavLink>
            </Link>
            <Link href="/sign-up">
              <NavLink onClick={() => closeAllMenus(false)}>Sign Up</NavLink>
            </Link>
          </>
        )}
        <Link href="/create-fundraiser">
          <NavButton onClick={() => closeAllMenus(false)}>
            Start Fundeserving
          </NavButton>
        </Link>
      </MenuWrapper>
    </HeaderComponent>
  );
}
