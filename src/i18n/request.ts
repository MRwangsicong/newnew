import { getRequestConfig, setRequestLocale } from 'next-intl/server';
import { requestLocale } from '@/i18n/settings';

export default getRequestConfig(async () => {
  const loc = await requestLocale();
  setRequestLocale(loc);
  return {
    messages: (await import(`../../public/locales/${loc}/common.json`)).default,
    locale: loc
  };
});
