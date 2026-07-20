import { useEffect } from 'react'
import { business } from '../data/business'
import { images } from '../data/images'
import { resolveImageSource } from '../lib/image'

type SeoProps = {
  title?: string
  description?: string
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title ? `${title} | ${business.name}` : business.name

    const metaDescription = description ?? business.tagline
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta')
    meta.setAttribute('name', 'description')
    meta.setAttribute('content', metaDescription)
    if (!meta.parentElement) {
      document.head.append(meta)
    }

    const faviconSource = resolveImageSource(images.favicon)

    if (faviconSource) {
      let icon = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null
      if (!icon) {
        icon = document.createElement('link')
        icon.rel = 'icon'
        document.head.append(icon)
      }
      icon.href = faviconSource
    }
  }, [description, title])

  return null
}