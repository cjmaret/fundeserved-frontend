import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px var(--red);
  }
  to {
    box-shadow: 0 0 10px 1px var(--red);
  }
`;

export const SearchStyles = styled.div`
  position: relative;
  border: 1px solid var(--grey);
  border-radius: 5px;
  padding: 1px;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    outline: none;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid var(--lightGrey);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  .no-items-found {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const DropDownItem = styled.a`
  border-bottom: 1px solid var(--lightGrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
`;
