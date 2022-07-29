import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Join from '../components/Join';
import Lead from '../components/Lead';
import Stats from '../components/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <Lead />
      <Featured />
      <Categories />
      <Stats />
      <Join />
      <Footer />
    </>
  );
}
