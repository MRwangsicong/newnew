import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'zh'] as const;
export const defaultLocale = 'en' as const;

export const requestLocale = async () => {
  return defaultLocale;
};

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales }); 