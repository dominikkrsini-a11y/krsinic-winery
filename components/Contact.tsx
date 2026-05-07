'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
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
    <section id="contact" ref={ref} className="bg-surface border-t border-gold/10">
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

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="border border-gold/15 bg-cream/70 p-7">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">{t('locationLabel')}</p>
            <p className="text-ink-soft leading-relaxed">{t('location')}</p>
          </div>
          <div className="border border-gold/15 bg-cream/70 p-7">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">{t('emailLabel')}</p>
            <a
              className="text-ink-soft underline decoration-gold/30 underline-offset-4"
              href="mailto:dominikkrsini@gmail.com"
            >
              {t('email')}
            </a>
          </div>
          <div className="border border-gold/15 bg-cream/70 p-7">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">{t('phoneLabel')}</p>
            <a
              className="text-ink-soft underline decoration-gold/30 underline-offset-4"
              href="tel:+385977542009"
            >
              {t('phone')}
            </a>
          </div>
        </div>

        <div
          className={`mt-10 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://www.instagram.com/krsinicwinery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold text-gold px-5 py-3 text-xs tracking-[0.22em] uppercase hover:bg-gold/10 transition-colors"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="7" y="7" width="10" height="10" rx="3" />
              <path d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z" />
              <path d="M15.5 8.5h.01" />
            </svg>
            Instagram
          </a>
        </div>

        <div
          className={`relative mt-12 overflow-hidden rounded-sm border border-gold/20 transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(154,123,58,0.10),rgba(12,8,5,0.10))]" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.620810990122!2d17.166164575616783!3d42.923037499349654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a4f5b298a23b1%3A0x91b473233491937d!2sKrsinic%20winery!5e0!3m2!1sen!2shr!4v1778157013756!5m2!1sen!2shr"
            width="100%"
            height="450"
            style={{ border: 0, filter: 'grayscale(30%) sepia(20%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="relative block w-full"
            title="Kršinić Winery on Google Maps"
          />
        </div>
      </div>
    </section>
  );
}

