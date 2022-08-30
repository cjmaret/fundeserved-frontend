import { featuredCards } from '../array-data/featured-data';
import Fundraiser from './Fundraiser';

export default function Fundraisers() {
  return featuredCards.map((card) => <Fundraiser key={card.id} {...card} />);
}
