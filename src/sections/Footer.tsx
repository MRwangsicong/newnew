'use client';
import { appLinks } from '@/utils/constant';
import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const socialIcons = [
  { Icon: AiOutlineTwitter, href: "https://x.com/AGIBotApp" },
  { Icon: FaTelegramPlane, href: "https://t.me/AGIBot_official" },
  { Icon: FaBook, href: "https://agibotapp.gitbook.io/agibot" },
];

const links = [
  ["", ""],
];

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="relative w-full flex flex-row flex-wrap gap-4 justify-between">
      {/* Left Section */}
      <div className="flex flex-col flex-wrap gap-4 min-w-[200px] justify-between">
        <div className="space-y-6">
          <h3 className="font-redzone text-4xl">AGIBOT.</h3>
          <div className="flex flex-row flex-wrap gap-4">
            {socialIcons.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/50 text-white"
              >
                <item.Icon size={18} color="inherit" />
              </a>
            ))}
          </div>
        </div>
        <span className="text-gray-500 font-nominee text-sm">
          {t('copyright')}
        </span>
      </div>
      {/* Right Section */}
      <div className="flex flex-row flex-wrap md:gap-24 gap-6">
        {links.map((group, idx) => (
          <ul key={idx + 1} className="flex flex-col flex-wrap gap-2">
            {group.map((link, i) => (
              <li key={link}>
                {i === 0 ? (
                  <span className="font-redzone mb-2">{link}</span>
                ) : (
                  <a
                    href={`#${appLinks[i]}`}
                    className={`font-nominee text-gray-500 text-xs hover:text-white duration-300`}
                  >
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
}

export default Footer;