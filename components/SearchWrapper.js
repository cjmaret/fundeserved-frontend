import {
  IconWrapper,
  MobileSearch,
  MobileSearchWrapper,
} from './styles/styledHeader';
import MagnifyingGlassIcon from '../images/magnifying-glass.png';

export default function SearchWrapper({
  children,
  mobileMenu,
  isSearchMenuOpen,
  setIsSearchMenuOpen,
}) {
  function toggleSearchMenu() {
    return isSearchMenuOpen
      ? setIsSearchMenuOpen(false)
      : setIsSearchMenuOpen(true);
  }

  if (mobileMenu) {
    return (
      <>
        <MobileSearchWrapper>
          <IconWrapper onClick={() => toggleSearchMenu()}>
            <img
              src={MagnifyingGlassIcon}
              alt=""
              className="icon-image"
              name="mobile-search"
            />
          </IconWrapper>
        </MobileSearchWrapper>
        <MobileSearch isSearchMenuOpen={isSearchMenuOpen}>
          {children}
        </MobileSearch>
      </>
    );
  }
  return children;
}
