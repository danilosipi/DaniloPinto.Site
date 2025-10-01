import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

type CTAButtonProps = {
  href: string;
  label?: string;
  external?: boolean;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'linkedin';
  className?: string;
  ariaLabel?: string;
};

type ButtonVariant = NonNullable<CTAButtonProps['variant']>;
type InternalHref = Parameters<typeof Link>[0]['href'];

const baseClasses =
  'inline-flex items-center justify-center gap-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary-500 text-white hover:bg-primary-700',
  secondary:
    'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  ghost: 'text-primary-500 hover:text-primary-700',
  whatsapp: 'bg-[#25D366] text-black hover:bg-[#1EBE59] focus-visible:outline-[#25D366]',
  linkedin: 'bg-[#0077B5] text-white hover:bg-[#005E91] focus-visible:outline-[#0077B5]',
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
  const classes = clsx(
    baseClasses,
    variants[variant],
    {
      'px-4 py-2 rounded-md': label,
      'p-2 rounded-full': !label && icon,
    },
    className,
  );

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
        {label && <span>{label}</span>}
      </a>
    );
  }

  return (
    <Link href={href as InternalHref} aria-label={ariaLabel ?? label} className={classes}>
      {icon}
      {label && <span>{label}</span>}
    </Link>
  );
}
