"use client"
import Button from '@/components/Button'
import React from 'react'
import {motion} from "framer-motion"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isZh = locale === 'zh';

  return (
    <section className="w-full flex flex-col md:flex-row items-center space-x-8">
            <div className="md:w-1/2 flex-col flex flex-wrap gap-8">
                <h1 className={`lg:text-7xl text-5xl font-redzone ${isZh ? 'lg:!leading-snug !leading-snug' : ''}`}>
                  {t('title')}
                </h1>
                <span className={`text-gray-400 leading-8 text-xl font-nominee ${isZh ? '!leading-relaxed tracking-wide' : ''}`}>
                  {t('description')}
                </span>
                <div className="flex-row flex flex-wrap mt-5 gap-4">
                <Button 
  className={isZh ? 'text-lg px-8' : ''} 
  onClick={() => window.open("/download.html", "_blank")}
>
  {t('getDownload')}
</Button> 
                    <Button outline={true} 
                      onClick={() => window.open("https://t.me/AGIBot_official", "_blank")}
                      className={isZh ? 'text-lg px-8' : ''}
                    >
                      {t('joinTelegram')}
                    </Button>
                </div>
            </div>
            <div className="relative md:w-1/2 flex flex-col flex-wrap gap-4 items-center justify-center md:mt-0 mt-5">
                <motion.img
                    src="/assets/etherum.png"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain"
                    animate={{
                        translateY : ["-60px", "30px"],
                        rotateY : 30,
                    }}
                    transition={{
                        duration : 2,
                        repeat :Infinity,
                        repeatType :"mirror",
                        ease:"linear"
                    }}
                />
            </div>
        </section>
  )
}

export default Hero