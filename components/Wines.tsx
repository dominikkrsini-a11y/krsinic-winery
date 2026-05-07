'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function Wines() {
  const t = useTranslations('wines');
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    { key: 'grk' as const },
    { key: 'plavac' as const },
  ];

  return (
    <section id="wines" ref={ref} className="bg-surface">
      <div className="px-8 md:px-16 py-20 md:py-28">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">{t('label')}</p>
        <h2
          className={`font-cormorant text-ink font-light leading-tight mb-10 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
        >
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(({ key }) => (
            <article
              key={key}
              className={`border border-gold/20 bg-cream/70 backdrop-blur-sm p-8 transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="text-gold text-xs tracking-[0.25em] uppercase mb-3">{t(`${key}.type`)}</p>
              <h3 className="font-cormorant text-ink text-3xl font-light mb-2">{t(`${key}.name`)}</h3>
              <p className="text-ink-soft text-sm tracking-[0.12em] uppercase mb-6">{t(`${key}.vintage`)}</p>
              <p className="text-ink-soft leading-relaxed">{t(`${key}.desc`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

