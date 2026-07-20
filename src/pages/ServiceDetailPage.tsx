import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { business } from '../data/business'
import { services } from '../data/services'
import { translations } from '../data/translations'
import { Container } from '../components/Container'
import { MediaFrame } from '../components/MediaFrame'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { serviceIcons } from '../lib/service-icons'
import { RouterButton } from '../components/Button'
import { useLanguage } from '../lib/language'
import { pickLocalized } from '../lib/localized'

export default function ServiceDetailPage() {
  const { language } = useLanguage()
  const copy = translations[language]
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <Container className="py-20 text-center">
        <SectionHeading eyebrow={copy.serviceDetail.notFoundEyebrow} title={copy.serviceDetail.notFoundTitle} description={copy.serviceDetail.notFoundDescription} className="mx-auto" />
        <div className="mt-8">
          <RouterButton to="/services">{copy.serviceDetail.back}</RouterButton>
        </div>
      </Container>
    )
  }

  const Icon = serviceIcons[service.icon]
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3)
  const title = pickLocalized(service.title, language)
  const description = pickLocalized(service.description, language)
  const category = pickLocalized(service.category, language)
  const highlights = pickLocalized(service.highlights, language)

  return (
    <>
      <Seo title={title} description={`${title} at ${business.name}. ${description}`} />
      <Container className="py-16 lg:py-20">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
          <ArrowLeft className="h-4 w-4" /> {copy.serviceDetail.back}
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-sky-300">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 ring-1 ring-sky-300/20">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">{category}</p>
                <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-300">{description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">{service.price}</span>
              <RouterButton to="/contact">{copy.serviceDetail.enquire}</RouterButton>
            </div>
          </div>

          <MediaFrame src={service.image} alt={title} className="aspect-[4/3]" overlay={`${service.price} • ${category}`} />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {copy.serviceDetail.badges.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <CheckCircle2 className="h-5 w-5 text-sky-300" />
              <p className="mt-4 text-lg font-semibold text-white">{item}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{copy.serviceDetail.badgeDescription}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow={copy.serviceDetail.relatedEyebrow} title={copy.serviceDetail.relatedTitle} />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {relatedServices.map((item) => (
              <MediaFrame key={item.id} src={item.image} alt={pickLocalized(item.title, language)} className="aspect-[4/3]" overlay={`${pickLocalized(item.category, language)} • ${pickLocalized(item.title, language)}`} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}