import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import { MobileContext } from '../contexts/mobileContext';
import { useEffect, useState } from 'react';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
  font-style: normal;
}

  html {
    --red: #A31621; /*#FE192F A31621 */
    --black: #393939;
    --grey: #424B54;
    --lightGrey: #e1e1e1;
    --offWhite: #ededed;
    --white: #ffffff;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'graphik', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    @media (min-width: 1080px) {
      /* max-width: 1080px; */
      margin: auto;
    }
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'graphik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  /* max-width: var(--maxWidth); */
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* @media (min-width: 640px) {
    padding: 1rem;
  } */
`;

export default function Page({ children }) {
  const [mobileMenu, setMobileMenu] = useState();

  useEffect(() => {
    function getWindowWidth() {
      const windowWidth = window.innerWidth;

      if (windowWidth < 640) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    }
    getWindowWidth();
    window.addEventListener('resize', getWindowWidth);
    return () => window.removeEventListener('resize', getWindowWidth);
  });

  return (
    <MobileContext.Provider value={mobileMenu}>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </MobileContext.Provider>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
