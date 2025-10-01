import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

type CTAButtonProps = {
  href: string;
  label: string;
  external?: boolean;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  ariaLabel?: string;
};

type ButtonVariant = NonNullable<CTAButtonProps['variant']>;
type InternalHref = Parameters<typeof Link>[0]['href'];

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-700)]',
  secondary:
    'border border-[var(--color-primary-500)] text-[var(--color-primary-500)] hover:bg-[var(--color-primary-500)] hover:text-white',
  ghost: 'text-[var(--color-primary-500)] hover:text-[var(--color-primary-700)]',
};

export function CTAButton({
  href,
  label,
  external = false,
  icon,
  variant = 'primary',
  className,
  ariaLabel,
}: CTAButtonProps) {
  const classes = clsx(baseClasses, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        aria-label={ariaLabel ?? label}
        className={classes}
        target="_blank"
        rel="noreferrer noopener"
      >
        {icon}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href as InternalHref} aria-label={ariaLabel ?? label} className={classes}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}
