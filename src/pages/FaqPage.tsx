import { business } from '../data/business'
import { faqs } from '../data/faqs'
import { translations } from '../data/translations'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { FAQAccordion } from '../components/FAQAccordion'
import { Seo } from '../components/Seo'
import { useLanguage } from '../lib/language'
import { pickLocalized } from '../lib/localized'

export default function FaqPage() {
  const { language } = useLanguage()
  const copy = translations[language]
  const localizedFaqs = faqs.map((item) => ({
    id: item.id,
    question: pickLocalized(item.question, language),
    answer: pickLocalized(item.answer, language),
  }))

  return (
    <>
      <Seo
        title={language === 'en' ? 'FAQ' : 'सामान्य प्रश्न'}
        description={language === 'en' ? `Frequently asked questions for ${business.name}.` : `${business.name} के लिए अक्सर पूछे जाने वाले प्रश्न।`}
      />
      <Container className="py-16 lg:py-20">
        <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} description={copy.faq.description} />
        <div className="mt-12 max-w-4xl">
          <FAQAccordion items={localizedFaqs} />
        </div>
      </Container>
    </>
  )
}