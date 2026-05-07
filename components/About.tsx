'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const t = useTranslations('about');
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-surface">
      {/* Top full-width quote bar */}
      <div className="bg-ink px-8 md:px-16 py-10 text-center">
        <p className="font-cormorant text-gold-light text-2xl md:text-3xl font-light italic">
          {t('quote')}
        </p>
      </div>

      {/* Main content */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left — image */}
        <div
          className="relative min-h-[500px] md:min-h-[700px] bg-olive bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        >
          {/* Gold border accent */}
          <div className="absolute top-8 left-8 right-[-1px] bottom-[-1px] border border-gold pointer-events-none" />
        </div>

        {/* Right — text */}
        <div
          className={`px-10 md:px-16 py-16 md:py-24 flex flex-col justify-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">{t('label')}</p>

          <h2
            className="font-cormorant text-ink font-light leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            {t('title1')}
            <br />
            <em className="text-terra">{t('title2')}</em>
          </h2>

          <div className="w-12 h-px bg-gold mb-8" />

          {/* Generation 1 */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">{t('gen1label')}</p>
            <p className="text-ink-soft leading-relaxed text-sm">{t('gen1text')}</p>
          </div>

          {/* Generation 2 */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">{t('gen2label')}</p>
            <p className="text-ink-soft leading-relaxed text-sm">{t('gen2text')}</p>
          </div>

          {/* Generation 3 */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">{t('gen3label')}</p>
            <p className="text-ink-soft leading-relaxed text-sm">{t('gen3text')}</p>
          </div>

          <p className="font-cormorant text-terra text-xl italic border-l-2 border-gold pl-4">
            {t('closing')}
          </p>
        </div>
      </div>
    </section>
  );
}
