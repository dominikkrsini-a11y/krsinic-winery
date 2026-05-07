'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function Oilmill() {
  const t = useTranslations('oilmill');
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
    <section id="oilmill" ref={ref} className="bg-surface">
      <div className="px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch">
          <div
            className={`relative min-h-[380px] md:min-h-[520px] border border-gold/20 bg-olive/10 transition-all duration-1000 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <Image
              src="/images/olive-tree.jpg.webp"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
              priority={false}
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">{t('label')}</p>
            <h2
              className={`font-cormorant text-ink font-light leading-tight mb-6 transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
            >
              {t('title')}
            </h2>
            <p
              className={`text-ink-soft leading-relaxed max-w-2xl transition-all duration-1000 delay-150 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('desc')}
            </p>

            <div
              className={`relative mt-10 h-[350px] w-full overflow-hidden border border-gold/20 bg-olive/10 transition-all duration-1000 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Image
                src="/images/stone-mill.jpg.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

