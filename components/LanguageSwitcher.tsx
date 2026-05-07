'use client';

import type { Locale } from 'next-intl';
import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';

type Variant = 'desktop' | 'mobile';

export function LanguageSwitcher({ variant }: { variant: Variant }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLang = (nextLocale: Locale) => {
    router.replace(pathname || '/', { locale: nextLocale });
  };

  const isDesktop = variant === 'desktop';
  const inactive = isDesktop ? 'bg-transparent opacity-60' : 'opacity-60';

  const btnClass = (l: Locale) =>
    `${isDesktop ? 'px-3 py-1 text-xs tracking-widest' : 'px-4 py-1.5 text-xs'} text-cream transition-all ${
      locale === l ? 'bg-gold' : inactive
    }`;

  return (
    <div className="flex border border-cream/30 rounded-sm overflow-hidden">
      <button type="button" onClick={() => switchLang('hr')} className={btnClass('hr')}>
        HR
      </button>
      <button type="button" onClick={() => switchLang('en')} className={btnClass('en')}>
        EN
      </button>
    </div>
  );
}
