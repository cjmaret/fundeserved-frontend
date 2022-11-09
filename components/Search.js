import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import {
  DropDown,
  DropDownItem,
  SearchComponent,
  SearchIconWrapper,
  SearchMenu,
  SearchHeaderGroup,
} from './styles/styledSearch';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import MagnifyingGlassIcon from '../images/magnifying-glass.png';

// // Only mount `Search` component on the client to stop infinite re-renders
// function ClientOnly({ children, ...delegated }) {
//   const [hasMounted, setHasMounted] = useState(false);
//   useEffect(() => {
//     setHasMounted(true);
//   }, []);
//   if (!hasMounted) {
//     return null;
//   }
//   // return <div {...delegated}>{children}</div>;
//   return children;
// }

const SEARCH_FUNDRAISERS_QUERY = gql`
  query SEARCH_FUNDRAISERS_QUERY($searchTerm: String!) {
    #renaming allFundraisers to searchTerms
    searchTerms: allFundraisers(
      where: {
        #name or description
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search({
  isSearchMenuOpen,
  setIsSearchMenuOpen,
  closeAllMenus,
  mobileMenu,
}) {
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_FUNDRAISERS_QUERY,
    {
      // bypass apollo cache and fetch directly from network
      fetchPolicy: 'no-cache',
    }
  );
  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(findItems, 350);

  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items: [],
    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      Router.push({
        pathname: `/fundraiser/${selectedItem.id}`,
      });
    },
    itemToString: (item) => item?.name || '',
  });

  function toggleSearchMenu() {
    return isSearchMenuOpen
      ? setIsSearchMenuOpen(false)
      : setIsSearchMenuOpen(true);
  }
  return (
    <>
      <SearchHeaderGroup mobileMenu={mobileMenu}>
        <SearchIconWrapper onClick={() => toggleSearchMenu()}>
          <img
            src={MagnifyingGlassIcon}
            alt=""
            className="icon-image"
            name="mobile-search"
          />
        </SearchIconWrapper>
      </SearchHeaderGroup>
      <SearchMenu isSearchMenuOpen={isSearchMenuOpen}>
        {/* <ClientOnly> */}
        <SearchComponent>
          <div {...getComboboxProps()}>
            <input
              {...getInputProps({
                type: 'search',
                placeholder: 'Search for a fundraiser',
                id: 'search',
                className: loading ? 'loading' : '',
              })}
            />
          </div>
          <DropDown {...getMenuProps()} isOpen={isOpen}>
            {isOpen &&
              items.map((item, index) => (
                <DropDownItem
                  key={item.id}
                  {...getItemProps({ item, index })}
                  highlighted={index === highlightedIndex}
                  href={`/fundraiser/${item.id}`}
                  onClick={() => closeAllMenus()}>
                  {item.photo && (
                    <img
                      src={item.photo?.image.publicUrlTransformed}
                      alt={item.name}
                      width="50"
                    />
                  )}
                  {item.name}
                </DropDownItem>
              ))}
            {isOpen && !items.length && !loading && (
              <DropDownItem className="no-items-found">
                Sorry, no items found for {inputValue}
              </DropDownItem>
            )}
          </DropDown>
        </SearchComponent>
        {/* </ClientOnly> */}
      </SearchMenu>
    </>
  );
}
