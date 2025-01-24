import { getRequestConfig } from 'next-intl/server';
import { requestLocale } from '@/i18n/settings';

export default getRequestConfig(async ({ locale }) => {
  const loc = await requestLocale();
  return {
    messages: (await import(`../../public/locales/${locale}/common.json`)).default,
    locale: loc
  };
}); 