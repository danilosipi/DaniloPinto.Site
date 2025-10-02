import type { InfoItem } from '@/config/site';
import Image from 'next/image';

import clsx from 'clsx';

interface InfoSectionProps {
  title: string;
  items: InfoItem[];
  layout?: 'list' | 'grid';
}

export function InfoSection({ title, items, layout = 'list' }: InfoSectionProps) {
  const isGrid = layout === 'grid';

  return (
    <section aria-labelledby={title.toLowerCase().replace(/ /g, '-')}>
      <div className="space-y-2">
        <h2 id={title.toLowerCase().replace(/ /g, '-')} className="section-title">
          {title}
        </h2>
      </div>
      <div
        className={clsx('mt-6', {
          'space-y-6': !isGrid,
          'grid gap-6 md:grid-cols-2': isGrid,
        })}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl border border-primary-500/10 bg-surface p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-default">{item.title}</h3>
              <span className="text-sm font-medium text-muted">{item.period}</span>
            </div>

            <div className="mt-4 flex items-center gap-4">
              {item.logo && (
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Image
                    src={item.logo}
                    alt={`Logo de ${item.institution}`}
                    fill
                    className="rounded-full object-cover"
                    sizes="60px"
                  />
                </div>
              )}
              <p className="font-semibold text-primary-500">{item.institution}</p>
            </div>

            <p className="mt-3 text-sm text-soft">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
