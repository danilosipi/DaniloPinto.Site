import Image from 'next/image';
import Link from 'next/link';
import { type Project } from 'contentlayer/generated';
import clsx from 'clsx';
import dayjs from 'dayjs';

type InternalHref = Parameters<typeof Link>[0]['href'];

const statusLabels: Record<string, string> = {
  active: 'Ativos',
  completed: 'Concluídos',
  prototype: 'Protótipos & Explorações',
};

const statusOrder = ['active', 'completed', 'prototype'];

function groupProjects(projects: Project[]) {
  return statusOrder
    .map((status) => ({
      status,
      label: statusLabels[status] ?? status,
      items: projects.filter((project) => project.status === status),
    }))
    .filter((group) => group.items.length > 0);
}

export function ProjectsGallery({ projects }: { projects: Project[] }) {
  const grouped = groupProjects(projects);

  return (
    <div className="space-y-10">
      {grouped.map((group) => (
        <section
          key={group.status}
          aria-labelledby={`projects-${group.status}`}
          className="space-y-6"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 id={`projects-${group.status}`} className="text-2xl font-semibold text-default">
              {group.label}
            </h3>
            <span className="text-sm text-subtle">{group.items.length} projetos</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {group.items.map((project) => (
              <article
                key={project._id}
                className="bg-surface h-full p-6 transition hover:-translate-y-1"
              >
                <div className="relative mb-4 h-48 overflow-hidden rounded-xl border border-primary-500/10 bg-primary-500/5">
                  <Image
                    src={project.coverImage ?? '/images/projects/example-cover.jpg'}
                    alt={`Imagem do projeto ${project.title}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <span className={clsx('text-xs uppercase tracking-[0.25em]', 'text-primary-500')}>
                  {statusLabels[project.status] ?? project.status}
                </span>
                <h4 className="mt-2 text-xl font-semibold text-default">{project.title}</h4>
                <p className="mt-2 text-sm text-soft">{project.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-subtle">
                  <time
                    dateTime={project.date}
                    className="rounded-full bg-primary-500/10 px-3 py-1"
                  >
                    {dayjs(project.date).format('MMM YYYY')}
                  </time>
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary-500/10 px-3 py-1 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.url as InternalHref}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-700"
                >
                  Ver detalhes
                  <span aria-hidden>{'>'}</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
