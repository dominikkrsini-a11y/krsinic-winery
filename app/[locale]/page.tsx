import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Wines from '@/components/Wines';
import Vineyards from '@/components/Vineyards';
import Lumbarda from '@/components/Lumbarda';
import Oilmill from '@/components/Oilmill';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Wines />
      <Vineyards />
      <Lumbarda />
      <Oilmill />
      <Contact />
    </main>
  );
}
