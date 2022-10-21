import styled from 'styled-components';

export const PaginationComponent = styled.div`
  text-align: center;
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  max-width: 650px;
  & > * {
    flex: 1;
    justify-content: center;
    display: flex;
    margin: 0;
    padding: 0;
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;
