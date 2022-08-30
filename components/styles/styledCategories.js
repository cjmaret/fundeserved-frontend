import styled from 'styled-components';

export const CategoriesComponent = styled.section`
  margin: 5rem 0;
  padding: 2rem 0;
  max-width: 1080px;
  background-color: var(--offWhite);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoriesTitle = styled.h2`
  margin: 0 auto;
  font-size: 3rem;
  line-height: 1.5;
  width: 90%;
`;

export const CategoriesParagraph = styled.p`
  width: 90%;
  margin: 1rem auto 2rem auto;
`;

export const GridGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  @media (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 250px;
  height: 250px;
  margin: 0 1rem 2rem 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const CardTitle = styled.h3`
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 3rem;
`;

export const CardImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const LinkCover = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
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
  ${Card}:hover & {
    opacity: 0.7;
  }
`;
