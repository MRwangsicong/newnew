import { ReactNode } from 'react';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

type ExtendedAppProps = AppProps & {
  children: ReactNode;
};

const I18nProvider = ({ children }: ExtendedAppProps) => {
  return <>{children}</>;
};

export default appWithTranslation(I18nProvider);
