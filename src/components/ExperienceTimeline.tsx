import Image from 'next/image';

import { corporateExperience, ExperienceItem } from '@/config/site';

const typeLabels: Record<ExperienceItem['type'], string> = {
  andamento: 'Em andamento',
  concluido: 'Concluido',
  marco: 'Marco de carreira',
};

export function ExperienceTimeline() {
  return (
    <ol className="relative border-s border-primary-500/20 pl-6">
      {corporateExperience.map((experience, index) => (
        <li key={`${experience.company}-${index}`} className="mb-10 last:mb-0">
          <div className="absolute -left-[10px] mt-1 h-4 w-4 rounded-full border-2 border-background bg-primary-500 shadow-soft" />
          <div className="bg-surface p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary-500">
                  {typeLabels[experience.type]}
                </p>
                <h3 className="text-xl font-semibold text-default">{experience.role}</h3>
              </div>
              <span className="text-sm font-medium text-muted">{experience.period}</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              {experience.logo && (
                <Image
                  src={experience.logo}
                  alt={`Logo da ${experience.company}`}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-contain"
                />
              )}
              <p className="text-sm text-subtle">
                {experience.company} - {experience.location}
              </p>
            </div>
            <ul className="mt-4 list-inside space-y-2 text-sm text-soft">
              {experience.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary-500"
                  />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
