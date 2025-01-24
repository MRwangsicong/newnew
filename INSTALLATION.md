# AGIBOT Web Application Installation Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

## Installation Steps

1. **Clone the Repository**
```bash
git clone [repository-url]
cd agibotdome-main
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
The project uses Next.js 14 with App Router and next-intl for internationalization.

4. **Project Structure**
```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── globals.css
├── components/
├── sections/
├── i18n/
│   ├── settings.ts
│   └── request.ts
└── utils/
public/
├── locales/
│   ├── en/
│   │   └── common.json
│   └── zh/
│       └── common.json
└── assets/
```

5. **Key Features Implementation**
- Internationalization (i18n) setup with English and Chinese support
- Responsive design with Tailwind CSS
- Client-side navigation with Next.js App Router
- Framer Motion animations

6. **Running the Development Server**
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:3000`

## Important Notes

### Internationalization
- Language files are located in `public/locales/{language}/common.json`
- Supported languages: English (en) and Chinese (zh)
- Language switching is handled by the `LanguageSwitcher` component

### Component Structure
- All reusable components are in the `components/` directory
- Page sections are in the `sections/` directory
- Main layout and pages are in `app/[locale]/`

### Styling
- Uses Tailwind CSS for styling
- Custom fonts (Redzone, Nominee) are included in the project
- Global styles are in `app/globals.css`

### Navigation
- Uses Next.js App Router
- Internationalized routes with next-intl middleware
- Smooth transitions between pages and languages

## Development Guidelines

1. **Adding New Translations**
- Add new keys to both `en/common.json` and `zh/common.json`
- Use the `useTranslations` hook in components:
```typescript
const t = useTranslations('namespace');
// Usage: {t('key')}
```

2. **Creating New Components**
- Add 'use client' directive for client components
- Import translations if needed
- Follow existing component patterns

3. **Styling Guidelines**
- Use Tailwind CSS classes
- Follow the existing color scheme and design patterns
- Maintain responsive design principles

4. **Performance Considerations**
- Use Next.js Image component for images
- Implement proper loading states
- Follow React best practices for optimization

## Troubleshooting

Common issues and solutions:

1. **Language Switching Issues**
- Ensure middleware.ts is properly configured
- Check locale files exist and are properly formatted
- Verify route structure follows [locale] pattern

2. **Styling Issues**
- Run `npm run build` to verify Tailwind classes
- Check globals.css for custom styles
- Verify responsive design breakpoints

3. **Build Errors**
- Clear .next directory and node_modules
- Reinstall dependencies
- Verify Node.js version compatibility

## Contact and Support
For additional support or questions, contact the original development team or refer to the project documentation.

## License
All rights reserved AGIBOT © 2025. 