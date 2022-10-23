import {
  Card,
  CardImageWrapper,
  CardTitle,
  CategoriesComponent,
  CategoriesParagraph,
  CategoriesTitle,
  GridGroup,
  FilmCover,
  LinkCover,
  CategoriesContentGroup,
  CategoriesTitleGroup,
} from './styles/styledCategories';
import { categoriesCards } from '../array-data/categories-data';

export default function Categories() {
  return (
    <CategoriesComponent>
      <CategoriesContentGroup>
        <CategoriesTitleGroup>
          <CategoriesTitle>Choose your fundeserved category</CategoriesTitle>
          <CategoriesParagraph>
            Which fraud interests you most?
          </CategoriesParagraph>
        </CategoriesTitleGroup>
        <GridGroup>
          {categoriesCards.map((card) => (
            <Card key={card.id}>
              <LinkCover href="" />
              <CardTitle>{card.title}</CardTitle>
              <FilmCover />
              <CardImageWrapper>
                <img src={card.image} alt="" className="card-image" />
              </CardImageWrapper>
            </Card>
          ))}
        </GridGroup>
      </CategoriesContentGroup>
    </CategoriesComponent>
  );
}
