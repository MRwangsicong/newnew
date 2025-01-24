'use client';
import Button from '@/components/Button'
import Title from '@/components/Title'
import React from 'react'
import { useTranslations } from 'next-intl'

const Collection = () => {
  const t = useTranslations('userFeedback')

  return (
    <section className="w-full flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-[1] text-start flex flex-col flex-wrap gap-4 items-start pr-4">
                <Title heading="better" subHeading={t('title')} />
                <span className="text-gray-500/80 font-nominee">
                {t('description')}
                </span>
                <div className="flex flex-col gap-2 mt-2">
                    {t.raw('points').map((point: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                            <span className="text-gray-300">{point}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-[2] overflow-x-scroll flex-grow max-w-[90vw] no-scrollbar inline-flex flex-row gap-4">
                {[1, 2].map((n, i) => (
                    <div className="min-w-[200px] rounded-[30px] overflow-hidden" key={i}>
                        <img
                            className="object-cover hover:scale-110 duration-300"
                            src={`/assets/av-${n}.png`}
                            alt="avatar"
                        />
                    </div>
                ))}
            </div>
        </section>
  )
}

export default Collection