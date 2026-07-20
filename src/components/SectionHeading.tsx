import { cn } from '../lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl space-y-3', className)}>
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.32em] text-sky-300">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-slate-300">{description}</p> : null}
    </div>
  )
}