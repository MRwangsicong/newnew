"use client"
import Button from '@/components/Button'
import React, { useEffect, useState } from 'react'
import {motion, useAnimation} from "framer-motion"
import { useTranslations } from 'next-intl'

const Promotion = () => {
    const t = useTranslations('joinUs');
    const [isMdScreen, setIsMdScreen] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMdScreen(window.innerWidth >= 768); // Tailwind's 'md' breakpoint is 768px
        };

        // Initial check
        checkScreenSize();

        // Add event listener to handle screen resize
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useEffect(() => {
        if (isMdScreen) {
            controls.start({ x: 100 });
        } else {
            controls.stop();
        }
    }, [isMdScreen, controls]);

    return (
        <section className="relative w-full min-h-[400px] flex flex-row flex-wrap items-end justify-around gap-4">
            <motion.img
                className="object-scale-down max-w-[200px] sm:max-w-sm max-h-[inherit] overflow-hidden "
                src="/assets/vr-person.webp"
                alt="vr_person"
                animate={controls}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }}
            />
            <div className="bg-gradient-to-bl from-sky-700 via-purple-700 to-blue-800 rounded-3xl p-3 md:p-0 w-full sm:h-[320px] h-full absolute bottom-0 z-[-1] shadow-lg shadow-purple-600/70"></div>
            <article className="flex flex-col flex-wrap gap-6 items-start justify-center h-[inherit] md:max-w-[40%] m-2 lg:-translate-y-10">
                <h4 className=" text-6xl">{t('title')}</h4>
                <span className="text-gray-200 font-nominee">
                    {t('description')}
                </span>
                <div className="flex flex-col gap-3 w-full">
                    {t.raw('services').map((service: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                            <span className="text-gray-100 text-sm">{service}</span>
                        </div>
                    ))}
                </div>
                <Button outline={true} onClick={() => window.open("https://t.me/AGIBot_group", "_blank")}>
                    {t('button')}
                </Button>
            </article>
        </section>
    )
}

export default Promotion