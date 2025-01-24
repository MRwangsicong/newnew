'use client';

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  locale: string;
};

const I18nProvider = ({ children, locale }: Props) => {
  const messages = useMessages();
  
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
};

export default I18nProvider;