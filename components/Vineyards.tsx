'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function Vineyards() {
  const t = useTranslations('vineyards');
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vineyards"
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundImage: "url('/images/photo1.webp')" }}
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/photo1.webp')" }} />
      <div className="absolute inset-0 bg-ink/80" />

      <div className="relative z-10 px-8 md:px-16 py-24 md:py-32">
        <p className="text-gold-light text-xs tracking-[0.3em] uppercase mb-4">{t('label')}</p>
        <h2
          className={`font-cormorant text-cream font-light leading-tight mb-6 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)' }}
        >
          {t('title')}
        </h2>
        <p
          className={`text-cream/70 max-w-2xl leading-relaxed transition-all duration-1000 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t('desc')}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {t('tags')
            .split('|')
            .map((tag) => tag.trim())
            .filter(Boolean)
            .map((tag) => (
              <span key={tag} className="border border-cream/25 text-cream/70 px-4 py-2 text-xs tracking-[0.2em] uppercase">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}

