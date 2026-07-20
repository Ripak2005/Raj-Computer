import { MessageCircleMore, Mail, MapPin, Phone } from 'lucide-react'
import { business } from '../data/business'
import { translations } from '../data/translations'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { RouterButton, AnchorButton } from '../components/Button'
import { Seo } from '../components/Seo'
import { useLanguage } from '../lib/language'

export default function ContactPage() {
  const { language } = useLanguage()
  const copy = translations[language]

  return (
    <>
      <Seo
        title={language === 'en' ? 'Contact' : 'संपर्क'}
        description={language === 'en' ? `Contact ${business.name} for service enquiries and visit information.` : `${business.name} से सेवा, पूछताछ और विज़िट जानकारी के लिए संपर्क करें।`}
      />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} description={copy.contact.description} />

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">{copy.contact.sections.address}</p>
                <p className="mt-3 flex items-center gap-3 text-white"><MapPin className="h-5 w-5 text-sky-300" /> {business.address}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">{copy.contact.sections.phone}</p>
                <p className="mt-3 flex items-center gap-3 text-white"><Phone className="h-5 w-5 text-sky-300" /> {business.phone}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">{copy.contact.sections.whatsapp}</p>
                <p className="mt-3 flex items-center gap-3 text-white"><MessageCircleMore className="h-5 w-5 text-sky-300" /> {business.whatsapp}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">{copy.contact.sections.email}</p>
                <p className="mt-3 flex items-center gap-3 text-white"><Mail className="h-5 w-5 text-sky-300" /> {business.email}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft lg:p-8">
              <h2 className="font-display text-2xl font-semibold text-white">{copy.contact.panelTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{copy.contact.panelBody}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AnchorButton href={`tel:${business.phone.replace(/\s+/g, '')}`}>
                  <Phone className="h-4 w-4" /> {language === 'en' ? 'Call' : 'कॉल करें'}
                </AnchorButton>
                <AnchorButton variant="secondary" href={`https://wa.me/${business.whatsapp.replace(/\D/g, '')}`}>
                  <MessageCircleMore className="h-4 w-4" /> {language === 'en' ? 'WhatsApp' : 'व्हाट्सऐप'}
                </AnchorButton>
                <RouterButton variant="secondary" to="/services">
                  {copy.contact.viewServices}
                </RouterButton>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">{copy.contact.visitNoteTitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{copy.contact.visitNoteBody}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow={language === 'en' ? 'Branches' : 'शाखाएँ'}
            title={language === 'en' ? 'Find both Raj Computer locations' : 'राज कंप्यूटर की दोनों शाखाएँ देखें'}
            description={language === 'en' ? 'Each branch is listed below with its own map embed so customers can find the nearest location.' : 'हर शाखा नीचे अपने अलग map embed के साथ दी गई है ताकि ग्राहक नज़दीकी स्थान आसानी से ढूँढ सकें।'}
          />

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {business.branches.map((branch) => (
              <article key={branch.label} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-soft">
                <div className="border-b border-white/10 p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">{branch.name}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{branch.label}</h3>
                  <p className="mt-2 text-sm text-slate-300">{branch.address}</p>
                </div>
                <iframe
                  src={branch.mapEmbedUrl}
                  title={branch.label}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="h-[340px] w-full border-0"
                  allowFullScreen
                />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}