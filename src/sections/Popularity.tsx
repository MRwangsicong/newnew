'use client';
import Card, { CardProps } from '@/components/Card';
import NumberTicker from '@/components/NumberTicker';
import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { RiWallet3Line } from 'react-icons/ri';
import { useTranslations } from 'next-intl';

export default function Popularity() {
    const t = useTranslations();
    
    const values = [
        { value: 152, key: 'downloads' },
        { value: 102, key: 'activity' },
        { value: 82, key: 'reception' },
    ];

    const cards: CardProps[] = [
        {
            icon: <MdOutlineVerifiedUser size={44} color="#71dcf5" />,
            title: t('features.stability.title'),
            description: t('features.stability.description'),
        },
        {
            icon: <RiWallet3Line size={44} color="#948fe8" />,
            title: t('features.security.title'),
            description: t('features.security.description'),
        },
        {
            icon: <AiOutlineCheckCircle size={44} color="#ea9bfa" />,
            title: t('features.trustworthiness.title'),
            description: t('features.trustworthiness.description'),
        },
    ];

    return (
        <section id="achievements" className="bg-white/10 drop-shadow-md rounded-3xl flex-col flex flex-wrap w-full">
            <div className="px-4 flex flex-wrap flex-row border-b-2 border-[#290c36] py-6  items-center justify-around gap-4 ">
                {values.map((it, i) => (
                    <div key={i}>
                        <span className="md:text-8xl text-6xl font-redzone ">
                            <NumberTicker value={it.value} className='text-white' />
                            K+
                        </span>
                        <br />
                        <span className="text-xl pt-4">{t(`stats.${it.key}.label`)}</span>
                    </div>
                ))}
            </div>
            <div className=" flex flex-row flex-wrap justify-center w-full">
                {cards.map((content, i) => (
                    <div
                        key={i}
                        className={`flex-1 min-w-[200px] hover:bg-white/15 duration-300 ${
                            i !== cards.length - 1 && "md:border-r-2 md:border-[#290c36]"
                        }`}
                    >
                        <Card {...content} />
                    </div>
                ))}
            </div>
            
        </section>
    );
}