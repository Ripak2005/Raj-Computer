import { Container } from '../components/Container'
import { RouterButton } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import { translations } from '../data/translations'
import { useLanguage } from '../lib/language'

export default function NotFoundPage() {
  const { language } = useLanguage()
  const copy = translations[language]

  return (
    <Container className="flex min-h-[70vh] items-center justify-center py-20 text-center">
      <div>
        <SectionHeading eyebrow="404" title={copy.notFound.title} description={copy.notFound.description} className="mx-auto" />
        <div className="mt-8 flex justify-center gap-3">
          <RouterButton to="/">{copy.notFound.home}</RouterButton>
          <RouterButton to="/services" variant="secondary">
            {copy.notFound.services}
          </RouterButton>
        </div>
      </div>
    </Container>
  )
}