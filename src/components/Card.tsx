import { ReactNode } from "react";
import { useLocale } from 'next-intl';

export type CardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

export default function Card({ icon, description, title }: CardProps) {
    const locale = useLocale();
    const isZh = locale === 'zh';

    return (
        <div className="py-12 px-6 flex flex-col flex-wrap gap-4 flex-1 max-w-[320px] items-start">
            <div className="mb-4">{icon}</div>
            <h4 className={`text-3xl ${isZh ? 'tracking-wide mb-2' : ''}`}>{title}</h4>
            <span className={`text-gray-400 font-nominee ${isZh ? 'leading-relaxed tracking-wide' : ''}`}>
                {description}
            </span>
        </div>
    );
}
