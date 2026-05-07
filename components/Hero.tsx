'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex flex-col justify-end pb-20 px-8 md:px-16 overflow-hidden bg-ink"
    >
      {/* Background image — replace src with your photo */}
      <div
        className="absolute inset-0 bg-hero-bg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink/75" />

      {/* Vertical grid lines decoration */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(90deg,var(--color-gold-light)_0px,var(--color-gold-light)_1px,transparent_1px,transparent_80px)]" />

      {/* Content */}
      <div className="relative z-10">
        <p
          className={`text-gold-light text-xs tracking-[0.3em] uppercase mb-5 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Lumbarda · Otok Korčula · Dalmacija
        </p>

        <h1
          className={`font-cormorant text-cream font-light leading-none mb-8 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          {t('line1')}
          <br />
          {t('line2')}
          <br />
          <em className="text-gold-light">{t('line3')}</em>
        </h1>

        <p
          className={`text-cream/60 text-sm tracking-[0.12em] max-w-md transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t('tagline')}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 md:right-16 flex flex-col items-center gap-2 z-10">
        <div className="w-px bg-cream/30 animate-pulse" style={{ height: '60px' }} />
        <span className="text-cream/40 text-[0.65rem] tracking-[0.2em] uppercase rotate-90 mt-2">
          Scroll
        </span>
      </div>
    </section>
  );
}
