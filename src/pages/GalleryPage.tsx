import { business } from '../data/business'
import { gallery } from '../data/gallery'
import { translations } from '../data/translations'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { MediaFrame } from '../components/MediaFrame'
import { Seo } from '../components/Seo'
import { useLanguage } from '../lib/language'
import { pickLocalized } from '../lib/localized'

export default function GalleryPage() {
  const { language } = useLanguage()
  const copy = translations[language]

  return (
    <>
      <Seo
        title={language === 'en' ? 'Gallery' : 'गैलरी'}
        description={language === 'en' ? `${business.name} gallery and workspace showcase.` : `${business.name} की गैलरी और कार्यक्षेत्र झलक।`}
      />
      <Container className="py-16 lg:py-20">
        <Reveal>
          <SectionHeading eyebrow={copy.gallery.eyebrow} title={copy.gallery.title} description={copy.gallery.description} />
        </Reveal>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 xl:columns-3">
          {gallery.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04} className="mb-6 break-inside-avoid">
              <MediaFrame src={item.image} alt={pickLocalized(item.title, language)} className="aspect-[4/3]" overlay={`${pickLocalized(item.category, language)} • ${pickLocalized(item.title, language)}`} />
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  )
}