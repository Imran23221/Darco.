import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import MorphSlider from './MorphSlider';
import FluidGlass from './FluidGlass';
import './App.css';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop';

const slides = [
  { image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop', caption: 'One' },
  { image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop', caption: 'Two' },
  { image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=1600&auto=format&fit=crop', caption: 'Three' }
];

const menu = [
  { name: 'Darko Ristretto', note: 'Dense, dark cocoa, a long sweet finish', price: '$4.50' },
  { name: 'Velvet Flat White', note: 'Silky microfoam over a double shot', price: '$5.00' },
  { name: 'Smoked Cortado', note: 'Oak-smoked sugar, equal parts milk and espresso', price: '$5.50' },
  { name: 'Cold Brew Reserve', note: 'Steeped 20 hours, served over a single clear cube', price: '$6.00' }
];

const origins = [
  { place: 'Yirgacheffe, Ethiopia', body: 'Washed beans with jasmine, bergamot and stone fruit.' },
  { place: 'Huila, Colombia', body: 'Panela sweetness, red apple and a clean cacao base.' },
  { place: 'Sidamo, Ethiopia', body: 'Natural process with blueberry and a winey body.' }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="darko">
      <header className={`darko-nav ${scrolled ? 'is-solid' : ''}`}>
        <a className="darko-logo" href="#top">Darko</a>
        <nav>
          <a href="#story">Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#menu">Menu</a>
          <a href="#origins">Origins</a>
          <a className="darko-nav-cta" href="#visit">Visit</a>
        </nav>
      </header>

      {/* HERO: FluidGlass */}
      <section id="top" className="darko-hero">
        <FluidGlass
          text="Darko"
          src={HERO_IMAGE}
          shape="torus"
          size={220}
          refraction={2}
          dispersion={1}
          interaction="drag"
          frost={0.2}
          color="#ffffff"
          tint={1}
          reflection={2}
          shadow={1}
          elevation={2}
          smoothness={1}
          wobble={1}
          spin={0.7}
          idle={false}
          morphOnClick
          intro
          fontFamily="'Cormorant Garamond', serif"
          fontWeight={500}
          textColor="#f3e6d3"
          background="#0b0705"
        />
        <div className="darko-hero-copy">
          <p>Slow-roasted coffee, poured in the dark hours of the morning.</p>
          <a className="darko-btn" href="#menu">See the menu</a>
        </div>
        <span className="darko-hint">Drag the glass</span>
      </section>

      {/* STORY: ScrollReveal */}
      <section id="story" className="darko-section darko-story">
        <ScrollReveal
          highlightColor=""
          mode="scrub"
          splitBy="words"
          effect="fade"
          stagger={0.05}
          duration={0.8}
          smoothing={0}
          baseOpacity={0.1}
          baseRotation={3}
          baseOffset={0}
          enableBlur
          blurStrength={4}
        >
          When does a man die? When he is hit by a bullet? No! When he suffers a disease?
          No! When he ate a soup made out of a poisonous mushroom?
          No! A man dies when he is forgotten!
        </ScrollReveal>
        <p className="darko-story-body">
          We roast in small batches so every cup is worth remembering. Darko beans are sourced
          directly from farms we visit each harvest, roasted dark and slow, and served within
          ten days of the roast date.
        </p>
      </section>

      {/* GALLERY: MorphSlider */}
      <section id="gallery" className="darko-section darko-gallery">
        <h2>Inside the roastery</h2>
        <div style={{ height: '500px', position: 'relative' }}>
          <MorphSlider
            items={slides}
            transition="melt"
            intensity={1.2}
            aberration={1}
            drift={1.5}
            autoplay={false}
            overlayColor="#05060a"
            duration={2.5}
            ease="power2.inOut"
            scale={6}
            autoplayDelay={4}
            loop
            radius={40}
            showCaptions
            showControls
            showIndicators
          />
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="darko-section darko-menu">
        <h2>The menu</h2>
        <ul>
          {menu.map(item => (
            <li key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ORIGINS */}
      <section id="origins" className="darko-section darko-origins">
        <h2>Where it grows</h2>
        <div className="darko-origin-grid">
          {origins.map(o => (
            <article key={o.place}>
              <h3>{o.place}</h3>
              <p>{o.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* VISIT: second FluidGlass moment */}
      <section id="visit" className="darko-visit">
        <FluidGlass
          text={'Come in\nfrom the cold.'}
          src={HERO_IMAGE}
          shape="lens"
          size={200}
          refraction={1.4}
          dispersion={0.6}
          interaction="follow"
          frost={0.1}
          fontFamily="'Cormorant Garamond', serif"
          textColor="#f3e6d3"
          background="#0b0705"
        />
        <div className="darko-visit-info">
          <p>Open daily, 6:30 to 20:00</p>
          <p>Bole Road, Addis Ababa</p>
        </div>
      </section>

      <footer className="darko-footer">
        <span className="darko-logo">Darko</span>
        <small>© 2026 Darko Coffee Roasters</small>
      </footer>
    </div>
  );
}