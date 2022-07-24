import Link from 'next/link';
import {
  HeaderComponent,
  Logo,
  IndividualsNavItem,
  IndividualsList,
  IndividualsListItem,
  NavLink,
  NavButton,
} from './styles/styledHeader';
import { useState } from 'react';

export default function Header() {
  const [individualsHovered, setIndividualsHovered] = useState(false);

  return (
    <HeaderComponent>
      <div className="search">
        Search
        {/* <ClientOnly>
          // <Search />
        </ClientOnly> */}
      </div>
      <IndividualsNavItem
        onMouseEnter={() => setIndividualsHovered(true)}
        onMouseLeave={() => setIndividualsHovered(false)}>
        For individuals
        <IndividualsList individualsHovered={individualsHovered}>
          <IndividualsListItem>
            <Link href="/mario">
              <NavLink>Colin</NavLink>
            </Link>
          </IndividualsListItem>
          <IndividualsListItem>
            <Link href="/mario">
              <NavLink>Ryan</NavLink>
            </Link>
          </IndividualsListItem>
          <IndividualsListItem>
            <Link href="/mario">
              <NavLink>Rachael</NavLink>
            </Link>
          </IndividualsListItem>
          <IndividualsListItem>
            <Link href="/mario">
              <NavLink>Kate</NavLink>
            </Link>
          </IndividualsListItem>
        </IndividualsList>
      </IndividualsNavItem>
      <Link href="/mario">
        <NavLink>For charities</NavLink>
      </Link>
      <Logo>
        <Link href="/">
          <NavLink className="logo__anchor">Fundeserved</NavLink>
        </Link>
      </Logo>
      <Link href="/mario">
        <NavLink>How it works</NavLink>
      </Link>
      <Link href="/mario">
        <NavLink>Sign In</NavLink>
      </Link>
      <Link href="/mario">
        <NavButton>Start Fundeserving</NavButton>
      </Link>
    </HeaderComponent>
  );
}
