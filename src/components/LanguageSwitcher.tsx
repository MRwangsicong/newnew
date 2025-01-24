'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { IoLanguage } from "react-icons/io5";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    startTransition(() => {
      router.push(`/${newLocale}`);
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={`
        group
        relative
        flex items-center gap-2
        px-4 py-2
        rounded-full
        bg-gradient-to-r from-[#65d6f4]/20 to-purple-500/20
        hover:from-[#65d6f4]/30 hover:to-purple-500/30
        border border-white/10
        transition-all duration-300
        ${isPending ? 'opacity-50 cursor-not-allowed' : 'hover:border-white/20 hover:scale-105'}
      `}
    >
      <IoLanguage className="w-5 h-5 text-[#65d6f4] group-hover:rotate-12 transition-transform duration-300" />
      <span className="font-nominee">
        {locale === 'zh' ? 'En' : 'Cn'}
      </span>
      <div className={`
        absolute bottom-0 left-0 right-0
        h-[2px] rounded-full
        bg-gradient-to-r from-[#65d6f4] to-purple-500
        transform origin-left
        transition-transform duration-300
        ${isPending ? 'scale-x-0' : 'group-hover:scale-x-100 scale-x-0'}
      `} />
    </button>
  );
};

export default LanguageSwitcher; 