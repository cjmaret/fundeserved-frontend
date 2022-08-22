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
} from './styles/styledCategories';
import { categoriesCards } from '../array-data/categories-data';
import Image from 'next/image';

export default function Categories() {
  return (
    <CategoriesComponent>
      <CategoriesTitle>Choose your fundeserved category</CategoriesTitle>
      <CategoriesParagraph>Which fraud interests you most?</CategoriesParagraph>

      <GridGroup>
        {categoriesCards.map((card) => (
          <Card key={card.id}>
            <LinkCover href="" />
            <CardTitle>{card.title}</CardTitle>
            <FilmCover />
            <CardImageWrapper>
              <Image
                src={card.image}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </CardImageWrapper>
          </Card>
        ))}
      </GridGroup>
    </CategoriesComponent>
  );
}
