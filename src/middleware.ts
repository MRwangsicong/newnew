import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale, requestLocale } from './i18n/settings';

// Handle redirects before the next-intl middleware
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect from / to /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Use next-intl middleware for all other cases
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/', '/(zh|en)/:path*']
}; 