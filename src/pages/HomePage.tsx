import { ArrowRight, Clock3, MapPin, Phone, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { business } from '../data/business'
import { gallery } from '../data/gallery'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { translations } from '../data/translations'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { RouterButton, AnchorButton } from '../components/Button'
import { MediaFrame } from '../components/MediaFrame'
import { serviceIcons } from '../lib/service-icons'
import { FAQAccordion } from '../components/FAQAccordion'
import { faqs } from '../data/faqs'
import { Seo } from '../components/Seo'
import { useLanguage } from '../lib/language'
import { pickLocalized } from '../lib/localized'

const featuredServices = services.slice(0, 4)
const featuredGallery = gallery.slice(0, 6)
const featuredTestimonials = testimonials.slice(0, 3)

export default function HomePage() {
  const { language } = useLanguage()
  const copy = translations[language]
  const localizedFaqs = faqs.slice(0, 3).map((item) => ({
    id: item.id,
    question: pickLocalized(item.question, language),
    answer: pickLocalized(item.answer, language),
  }))

  return (
    <>
      <Seo
        title={language === 'en' ? 'Home' : 'होम'}
        description={
          language === 'en'
            ? `${business.name} - premium computer, printing, and digital services in ${business.address}.`
            : `${business.name} - कंप्यूटर, प्रिंटिंग और डिजिटल सेवाओं के लिए प्रीमियम अनुभव ${business.address} में.`
        }
      />
      <section className="relative">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <Reveal className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-sky-200">
              <Sparkles className="h-4 w-4" />
              {copy.home.badge}
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">{copy.home.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{copy.home.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <RouterButton to="/services">{copy.home.ctaPrimary}</RouterButton>
              <AnchorButton variant="secondary" href={`tel:${business.phone.replace(/\s+/g, '')}`}>
                <Phone className="h-4 w-4" />
                {copy.home.ctaSecondary}
              </AnchorButton>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <Clock3 className="h-5 w-5 text-sky-300" />
                <p className="mt-4 text-sm text-slate-300">{copy.home.stats[0].title}</p>
                <p className="mt-1 text-lg font-semibold text-white">{copy.home.stats[0].value}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="h-5 w-5 text-sky-300" />
                <p className="mt-4 text-sm text-slate-300">{copy.home.stats[1].title}</p>
                <p className="mt-1 text-lg font-semibold text-white">{copy.home.stats[1].value}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-sky-300" />
                <p className="mt-4 text-sm text-slate-300">{copy.home.stats[2].title}</p>
                <p className="mt-1 text-lg font-semibold text-white">{copy.home.stats[2].value}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute -right-4 bottom-12 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl" />
            
            {/* Hero Card Container */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-soft backdrop-blur-sm">
              <MediaFrame
                src={'https://drive.google.com/file/d/1PYzjJRZ_qEAnJnNzGt92iiAIO5BRfjAE/view?usp=sharing'}
                alt={business.name}
              />
              <div className="border-t border-white/10 bg-slate-950/90 p-4 text-center">
                <p className="text-sm font-medium text-slate-200">
                  {language === 'en'
                    ? 'Premium computer, print, and digital service center'
                    : 'प्रीमियम कंप्यूटर, प्रिंट और डिजिटल सेवा केंद्र'}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-soft backdrop-blur md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{language === 'en' ? 'Services' : 'सेवाएँ'}</p>
                <p className="mt-1 text-lg font-semibold text-white">{language === 'en' ? '8 core offerings' : '8 प्रमुख सेवाएँ'}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{language === 'en' ? 'Support' : 'सपोर्ट'}</p>
                <p className="mt-1 text-lg font-semibold text-white">{language === 'en' ? 'Helpful guidance' : 'सहायक मार्गदर्शन'}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{language === 'en' ? 'Pricing' : 'मूल्य'}</p>
                <p className="mt-1 text-lg font-semibold text-white">{language === 'en' ? 'Transparent rates' : 'पारदर्शी कीमतें'}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <Container className="grid gap-6 py-6 md:grid-cols-4">
          {copy.home.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <p className="text-sm font-semibold text-white">{card.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{card.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container className="py-20">
          <SectionHeading eyebrow={copy.home.featuredServices.eyebrow} title={copy.home.featuredServices.title} description={copy.home.featuredServices.description} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service, index) => {
              const Icon = serviceIcons[service.icon]
              const title = pickLocalized(service.title, language)
              const description = pickLocalized(service.description, language)
              const category = pickLocalized(service.category, language)
              const highlights = pickLocalized(service.highlights, language)

              return (
                <Reveal key={service.id} delay={index * 0.05}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                    <MediaFrame src={service.image} alt={title} className="aspect-[4/3]" overlay={`${category} • ${service.price}`} />
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/10 ring-1 ring-sky-300/20 transition duration-500 group-hover:scale-105 group-hover:bg-sky-400/15">
                          <Icon className="h-5 w-5 text-sky-300" />
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
                      <div className="mt-auto flex items-center justify-between pt-5 text-sm">
                        <span className="font-semibold text-white">{service.price}</span>
                        <RouterButton variant="ghost" to={`/services/${service.slug}`} className="px-0 py-0 text-sky-300">
                          {copy.services.details} <ArrowRight className="h-4 w-4" />
                        </RouterButton>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white/5">
        <Container className="py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <SectionHeading eyebrow={copy.home.why.eyebrow} title={copy.home.why.title} description={copy.home.why.description} />
              <div className="mt-8 space-y-4">
                {copy.home.why.points.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-200">
                    <Star className="mt-1 h-4 w-4 shrink-0 text-sky-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {featuredGallery.map((item, index) => (
                  <MediaFrame
                    key={item.id}
                    src={item.image}
                    alt={pickLocalized(item.title, language)}
                    className={index === 0 ? 'aspect-[16/9] sm:col-span-2' : 'aspect-[4/3]'}
                    overlay={`${pickLocalized(item.category, language)} • ${pickLocalized(item.title, language)}`}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20">
          <SectionHeading eyebrow={copy.home.testimonials.eyebrow} title={copy.home.testimonials.title} description={copy.home.testimonials.description} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredTestimonials.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                  <div className="flex items-center gap-4">
                    <MediaFrame src={item.image} alt={item.name} className="h-16 w-16 shrink-0 rounded-full ring-2 ring-white/10" />
                    <div>
                      <p className="text-lg font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-slate-400">{pickLocalized(item.role, language)}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-1 text-amber-300">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{pickLocalized(item.quote, language)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/5">
        <Container className="py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading eyebrow={copy.home.faq.eyebrow} title={copy.home.faq.title} description={copy.home.faq.description} />
              <div className="mt-8">
                <RouterButton to="/faq" variant="secondary">
                  {copy.home.faq.cta}
                </RouterButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <FAQAccordion
                items={localizedFaqs}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(8,15,34,0.88))] p-8 shadow-soft sm:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-200">{copy.home.cta.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">{copy.home.cta.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-200">{copy.home.cta.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <RouterButton to="/contact">{copy.home.cta.button}</RouterButton>
                <AnchorButton variant="secondary" href={`tel:${business.phone.replace(/\s+/g, '')}`}>
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </AnchorButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}