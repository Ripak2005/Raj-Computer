import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { MediaFrame } from './MediaFrame'
import { cn } from '../lib/cn'
import { useLanguage } from '../lib/language'
import { serviceIcons } from '../lib/service-icons'
import { pickLocalized } from '../lib/localized'

type ServiceCardProps = {
  slug: string
  compact?: boolean
}

export function ServiceCard({ slug, compact = false }: ServiceCardProps) {
  const { language } = useLanguage()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return null
  }

  const Icon = serviceIcons[service.icon]
  const title = pickLocalized(service.title, language)
  const description = pickLocalized(service.description, language)
  const category = pickLocalized(service.category, language)
  const highlights = pickLocalized(service.highlights, language)

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]',
        compact && 'rounded-[1.5rem]'
      )}
    >
      <MediaFrame src={service.image} alt={title} className="aspect-[4/3]" overlay={`${category} • ${service.price}`} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3 text-sky-300">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/10 ring-1 ring-sky-300/20 transition duration-500 group-hover:scale-105 group-hover:bg-sky-400/15">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">{category}</p>
            <h3 className="mt-1 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-sky-100">{title}</h3>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span key={highlight} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              {highlight}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          {/* <p className="text-sm font-semibold text-white">{service.price}</p> */}
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-sky-300 transition duration-300 hover:gap-3 hover:text-white"
          >
            View details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}