'use client';

import { ComponentType } from 'react';
import { useMDXComponent } from 'next-contentlayer2/hooks';

type MDXComponents = Record<string, ComponentType<Record<string, unknown>>>;

const components: MDXComponents = {
  h2: (props) => <h2 className="mt-10 text-2xl font-semibold text-primary-900" {...props} />,
  h3: (props) => <h3 className="mt-8 text-xl font-semibold text-primary-900" {...props} />,
  p: (props) => <p className="mt-4 text-base leading-relaxed text-primary-700/90" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-primary-700/90" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-primary-700/90" {...props} />,
};

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
