import { business } from '../data/business'
import { images } from '../data/images'
import { translations } from '../data/translations'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { MediaFrame } from '../components/MediaFrame'
import { Seo } from '../components/Seo'
import { useLanguage } from '../lib/language'

export default function AboutPage() {
  const { language } = useLanguage()
  const copy = translations[language]

  return (
    <>
      <Seo
        title={language === 'en' ? 'About' : 'हमारे बारे में'}
        description={language === 'en' ? `Learn more about ${business.name} and the service philosophy behind the business.` : `${business.name} और इसकी सेवा भावना के बारे में जानें।`}
      />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow={copy.about.eyebrow} title={copy.about.title} description={copy.about.description} />
            <p className="mt-6 text-base leading-8 text-slate-300">{copy.about.body}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <MediaFrame
                src={images.owner || images.about}
                alt={language === 'en' ? 'Raj Computer owner' : 'राज कंप्यूटर के मालिक'}
                className="aspect-[4/5]"
                overlay={
                  <div className="w-full bg-slate-900/80 p-3.5 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white">
                      {language === 'en' ? 'Togendra Kumar' : 'तोगेंद्र कुमार'}
                    </p>
                    <p className="text-xs text-sky-400">
                      {language === 'en' ? 'Founder & Support Lead' : 'संस्थापक और सपोर्ट प्रमुख'}
                    </p>
                  </div>
                }
              />
              <MediaFrame
                src={images.team1 || images.about}
                alt={language === 'en' ? 'Raj Computer co-founder' : 'राज कंप्यूटर के सह-संस्थापक'}
                className="aspect-[4/5]"
                overlay={
                  <div className="w-full bg-slate-900/80 p-3.5 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white">
                      {language === 'en' ? 'Bhim Raj Prasad' : 'भीम राज प्रसाद'}
                    </p>
                    <p className="text-xs text-sky-400">
                      {language === 'en' ? 'Founder & Support Lead' : 'संस्थापक और सपोर्ट प्रमुख'}
                    </p>
                  </div>
                }
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {copy.about.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                <div className="h-6 w-6 rounded-full bg-sky-300/20" />
                <h3 className="mt-5 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  )
}