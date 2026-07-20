import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { business } from '../data/business'
import { images } from '../data/images'
import { translations } from '../data/translations'
import { cn } from '../lib/cn'
import { useLanguage } from '../lib/language'
import { resolveImageSource } from '../lib/image'
import { Container } from './Container'
import { RouterButton } from './Button'
import { Seo } from './Seo'

const navItems = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/about' },
  { key: 'services', to: '/services' },
  { key: 'gallery', to: '/gallery' },
  { key: 'faq', to: '/faq' },
  { key: 'contact', to: '/contact' },
] as const

export function SiteLayout() {
  const [open, setOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const copy = translations[language]
  const logoSource = resolveImageSource(images.logo)

  return (
    <div className="relative overflow-hidden">
      <Seo
        description={
          language === 'en'
            ? `${business.tagline} | Premium computer, printing, and digital services in ${business.address}.`
            : `राज कंप्यूटर | कंप्यूटर, प्रिंटिंग और डिजिटल सेवाओं के लिए प्रीमियम अनुभव ${business.address} में.`
        }
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_24%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <Container className="flex items-center justify-between gap-4 py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {logoSource ? <img src={logoSource} alt={business.name} className="h-full w-full object-cover" /> : <span className="font-display text-lg font-semibold text-white">RC</span>}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{business.name}</p>
              <p className="text-xs text-slate-400">{business.tagline}</p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white',
                    isActive && 'bg-white/10 text-white'
                  )
                }
              >
                {copy.nav[item.key]}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={copy.header.languageToggleAria}
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copy.header.languageLabel}
            </button>
            <RouterButton variant="secondary" to="/contact">
              {copy.header.cta}
            </RouterButton>
          </div>

          <button
            type="button"
            aria-label={open ? (language === 'en' ? 'Close menu' : 'मेनू बंद करें') : language === 'en' ? 'Open menu' : 'मेनू खोलें'}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>

        {open ? (
          <div className="border-t border-white/10 bg-slate-950/95 lg:hidden">
            <Container className="space-y-3 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-300',
                      isActive && 'bg-white/10 text-white'
                    )
                  }
                >
                  {copy.nav[item.key]}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={toggleLanguage}
                className="block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-slate-200"
              >
                {copy.header.languageToggleAria}
              </button>
            </Container>
          </div>
        ) : null}
      </header>

      <main className="noise">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  {logoSource ? <img src={logoSource} alt={business.name} className="h-full w-full object-cover" /> : <span className="font-display text-lg font-semibold text-white">RC</span>}
              </span>
              <div>
                <p className="text-lg font-semibold text-white">{business.name}</p>
                <p className="text-sm text-slate-400">{business.address}</p>
              </div>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">{copy.footer.summary}</p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">{copy.footer.call}</p>
              <p className="mt-2 text-lg font-semibold text-white">{business.phone}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">{copy.footer.whatsapp}</p>
              <p className="mt-2 text-lg font-semibold text-white">{business.whatsapp}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">{copy.footer.email}</p>
              <p className="mt-2 text-sm font-semibold text-white">{business.email}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">{copy.footer.hours}</p>
              <p className="mt-2 text-sm font-semibold text-white">{copy.footer.hoursValue}</p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}