'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Link } from '@/i18n/navigation';

export default function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#wines', label: t('wines') },
    { href: '#vineyards', label: t('vineyards') },
    { href: '#lumbarda', label: t('lumbarda') },
    { href: '#oilmill', label: t('oilmill') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-400 ${
        scrolled ? 'py-4 bg-ink/95 backdrop-blur-sm' : 'py-6 bg-transparent'
      }`}
    >
      <Link href="/" className="font-cormorant text-cream text-2xl font-light tracking-widest">
        Kršinić Winery
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-cream/80 hover:text-cream text-xs tracking-[0.18em] uppercase transition-opacity"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <LanguageSwitcher variant="desktop" />
        </li>
      </ul>

      {/* Mobile burger */}
      <button
        className="md:hidden text-cream flex flex-col gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        type="button"
      >
        <span
          className={`block w-6 h-px bg-cream transition-all ${
            menuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span className={`block w-6 h-px bg-cream transition-all ${menuOpen ? 'opacity-0' : ''}`} />
        <span
          className={`block w-6 h-px bg-cream transition-all ${
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-ink/98 flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream/80 text-xs tracking-[0.18em] uppercase"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher variant="mobile" />
        </div>
      )}
    </nav>
  );
}
