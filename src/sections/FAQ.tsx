'use client';
import QAComponent from '@/components/Q&A';
import Title from '@/components/Title';
import React from 'react';
import { useTranslations } from 'next-intl';

const FAQ = () => {
  const t = useTranslations('faq');
  const questions = t.raw('questions');

  return (
    <section id="faq" className="w-full col gap-4">
      <Title
        className="text-center"
        heading={t('heading')}
        subHeading={t('subHeading')}
      />

      <div className="flex flex-col mt-6 max-w-[60%] mx-auto gap-4">
        {questions.map((prop: any, i: number) => (
          <QAComponent key={i} {...prop} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;