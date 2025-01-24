'use client';
import { CardContainer } from "@/components/3D-card";
import Title from "@/components/Title";
import React from "react";
import { useTranslations } from 'next-intl';

const Features = () => {
  const t = useTranslations('keyFeatures');
  
  const cards = [
    {
      id: 1,
      key: 'safetyMeasure',
    },
    {
      id: 2,
      key: 'security',
    },
    {
      id: 3,
      key: 'latency',
    },
  ];

  return (
    <section id="Features" className="w-full flex flex-col flex-wrap center gap-4">
      <Title heading={t('title')} subHeading={t('safetyMeasure.subtitle')} className="text-center" />
      <div className="">
        <CardContainer className="flex flex-row flex-wrap w-full justify-center gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-br from-white/10 hover:bg-gradient-to-tl hover:from-white/10 transition-colors flex flex-col flex-wrap rounded-2xl items-start gap-4 py-6 px-4 md:flex-1"
            >
              <img className="w-16 h-w-16" src={`/assets/${card.id}.png`} alt={t(`${card.key}.title`)} />
              <h4 className="text-2xl">{t(`${card.key}.title`)}</h4>
              <span className="text-gray-500/70 font-nominee">{t(`${card.key}.description`)}</span>
            </div>
          ))}
        </CardContainer>
      </div>
    </section>
  );
};

export default Features;
