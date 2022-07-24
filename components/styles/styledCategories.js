import styled from 'styled-components';

export const CategoriesComponent = styled.section``;

export const CategoriesTitle = styled.h2`
  margin: 0;
  font-size: 3rem;
  line-height: 1.5;
`;

export const CategoriesParagraph = styled.p``;

export const GridGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5rem;
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 5rem;
`;

export const CardImageWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`;

export const FilmCover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.4s ease;
  /* ${LinkCover}:hover & {
    opacity: 0;
  } */
`;

export const LinkCover = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  transition: all 0.4s ease;
  &:hover {
    cursor: pointer;
    ${FilmCover} {
      opacity: 0;
      display: none;
    }
  }
`;
