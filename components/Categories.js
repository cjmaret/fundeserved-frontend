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
      <CategoriesTitle>Categories</CategoriesTitle>
      <CategoriesParagraph>Choose</CategoriesParagraph>

      <GridGroup>
        {categoriesCards.map((card) => (
          <Card key={card.id}>
            <LinkCover />
            <CardTitle>{card.title}</CardTitle>
            <FilmCover />
            <CardImageWrapper>
              <Image
                src={card.image}
                alt=""
                layout="fill"
                objectFit="cover"
                width="1000"
                height="1000"
                // style={{
                //   'object-fit': 'cover',
                //   'object-position': 'center',
                //   width: '1000px',
                //   height: '1000px',
                // }}
              />
            </CardImageWrapper>
          </Card>
        ))}
      </GridGroup>
    </CategoriesComponent>
  );
}
