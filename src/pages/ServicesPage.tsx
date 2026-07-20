import { useMemo, useState } from 'react'
import { business } from '../data/business'
import { services } from '../data/services'
import { translations } from '../data/translations'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { ServiceCard } from '../components/ServiceCard'
import { Seo } from '../components/Seo'
import { useLanguage } from '../lib/language'
import { pickLocalized } from '../lib/localized'

const categories = Array.from(new Set(services.map((service) => service.category.en)))

export default function ServicesPage() {
  const { language } = useLanguage()
  const copy = translations[language]
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredServices = useMemo(
    () => (activeCategory === 'All' ? services : services.filter((service) => service.category.en === activeCategory)),
    [activeCategory]
  )

  const categoryLabel = (category: string) => {
    const service = services.find((item) => item.category.en === category)
    return service ? pickLocalized(service.category, language) : category
  }

  return (
    <>
      <Seo
        title={language === 'en' ? 'Services' : 'सेवाएँ'}
        description={language === 'en' ? `${business.name} service menu and pricing.` : `${business.name} की सेवा सूची और मूल्य जानकारी।`}
      />
      <Container className="py-16 lg:py-20">
        <Reveal>
          <SectionHeading eyebrow={copy.services.eyebrow} title={copy.services.title} description={copy.services.description} />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className={
              activeCategory === 'All'
                ? 'rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950'
                : 'rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200'
            }
          >
            {copy.services.all}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? 'rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950'
                  : 'rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200'
              }
            >
              {categoryLabel(category)}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <ServiceCard slug={service.slug} />
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  )
}