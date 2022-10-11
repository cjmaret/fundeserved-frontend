import Link from 'next/link';
import {
  HeaderComponent,
  Logo,
  NavLink,
  NavButton,
} from './styles/styledHeader';
import { useContext, useState } from 'react';
import Image from 'next/image';
import LogoImage from '../images/logo.jpg';
import MenuWrapper from './MenuWrapper';
import { MobileContext } from '../contexts/mobileContext';
import IndividualsHeaderList from './IndividualsHeaderList';
import { useUser } from './User';
import SignOut from './SignOut';
import Search from './Search';

// Only mount `Search` component on the client to stop infinite re-renders
function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenu = useContext(MobileContext);
  const user = useUser();

  return (
    <HeaderComponent mobileMenu={mobileMenu}>
      {process.env.NEXT_PUBLIC_STRIPE_KEY}
      <Search
        mobileMenu={mobileMenu}
        isMenuOpen={isMenuOpen}
        onClick={() => console.log('heehoo')}>
        Search
        <ClientOnly>
          <Search />
        </ClientOnly>
      </Search>
      {mobileMenu && (
        <>
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
        </>
      )}
      <MenuWrapper
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        mobileMenu={mobileMenu}>
        {/* <CloseIconWrapper onClick={() => setIsMenuOpen(false)}>
          <Image src={CloseIcon} alt="" />
        </CloseIconWrapper> */}
        <Link href="/fundraisers">
          <NavLink onClick={() => setIsMenuOpen(false)}>
            All Fundraisers
          </NavLink>
        </Link>
        <Link href="/mario">
          <NavLink onClick={() => setIsMenuOpen(false)}>How it works</NavLink>
        </Link>
        {!mobileMenu && (
          <Logo>
            <Link href="/">
              <NavLink className="logo__anchor">
                <img className="logo-image" src={LogoImage} alt="" />
                {/* <Image src={LogoImage} alt="" objectFit="cover" layout="fill" /> */}
              </NavLink>
            </Link>
          </Logo>
        )}
        {user && (
          <>
            <Link href="/my-fundraisers">
              <NavLink onClick={() => setIsMenuOpen(false)}>
                My Fundraisers
              </NavLink>
            </Link>
            <SignOut />
          </>
        )}
        {!user && (
          <Link href="/signin">
            <NavLink onClick={() => setIsMenuOpen(false)}>Sign In</NavLink>
          </Link>
        )}
        <Link href="/create-fundraiser">
          <NavButton onClick={() => setIsMenuOpen(false)}>
            Start Fundeserving
          </NavButton>
        </Link>
      </MenuWrapper>
    </HeaderComponent>
  );
}
