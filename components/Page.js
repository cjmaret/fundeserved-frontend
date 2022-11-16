import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import { MobileContext } from '../contexts/mobileContext';
import { useEffect, useState } from 'react';

const GlobalStyles = createGlobalStyle`

  html {
    --red: #A31621; /*#FE192F A31621 */
    --black: #393939;
     --grey: #3A3A3A;
    --lightGrey: #e1e1e1;
    --offWhite: #ededed;
    --white: #ffffff;
    --salmon: #ff7b6f;
    --green: #8fcc8f;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Lato', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    color: var(--grey);
    @media (min-width: 1080px) {
    }
  }

  a {
    text-decoration: none;
    color: var(--grey);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Page({ children }) {
  const [mobileMenu, setMobileMenu] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  useEffect(() => {
    function getWindowWidth() {
      const windowWidth = window.innerWidth;

      if (windowWidth < 850) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    }
    getWindowWidth();
    window.addEventListener('resize', getWindowWidth);
    return () => window.removeEventListener('resize', getWindowWidth);
  });

  useEffect(() => {
    if (isMenuOpen || isSearchMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen, isSearchMenuOpen]);

  return (
    <MobileContext.Provider value={mobileMenu}>
      <GlobalStyles />
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isSearchMenuOpen={isSearchMenuOpen}
        setIsSearchMenuOpen={setIsSearchMenuOpen}
      />
      <InnerStyles id="scrollable">{children}</InnerStyles>
    </MobileContext.Provider>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
