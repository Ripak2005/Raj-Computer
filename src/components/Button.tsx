import { Link } from 'react-router-dom'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400/70 focus:ring-offset-2 focus:ring-offset-slate-950'

const variants: Record<Variant, string> = {
  primary: 'bg-white text-slate-950 hover:bg-slate-200 shadow-soft',
  secondary: 'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 backdrop-blur',
  ghost: 'text-slate-200 hover:bg-white/8',
}

type CommonProps = PropsWithChildren<{ variant?: Variant; className?: string }>

export function Button({ variant = 'primary', className, children }: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(base, variants[variant], className)}>{children}</button>
}

export function AnchorButton({ variant = 'primary', className, children, ...props }: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  )
}

export function RouterButton({ to, variant = 'primary', className, children }: CommonProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  )
}