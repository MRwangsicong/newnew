'use client';
import Title from "@/components/Title";
import React from "react";
import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('aboutUs');

  return (
    <section id="Aboutus" className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
      <div className="text md:w-1/2 flex flex-col flex-wrap gap-4 my-2">
        <Title
          className="max-w-[90%]"
          heading={t('heading')}
          subHeading={t('subHeading')}
        />
        <span className="text-gray-500/80 leading-8 text-xl">
          {t('description')}
        </span>
        <div className="flex flex-row flex-wrap gap-2">
          {t.raw('tags').map((tag: string, i: number) => (
            <button
              key={i}
              className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30 font-nominee text-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 my-2 h-full relative">
        <div className="max-w-[80%] max-h-[90%] mx-auto overflow-hidden rounded-[32px]">
          <img
            src="/assets/robo.png"
            alt="robo"
            className="object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
