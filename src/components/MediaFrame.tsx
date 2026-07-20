import { useState } from 'react'
import { cn } from '../lib/cn'
import { resolveImageSource } from '../lib/image'

type MediaFrameProps = {
  src: string
  alt: string
  className?: string
  overlay?: React.ReactNode
}

export function MediaFrame({ src, alt, className, overlay }: MediaFrameProps) {
  const imageSource = resolveImageSource(src)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn('relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft transition-transform duration-500 ease-out', className)}>
      {imageSource && !hasError ? (
        <img
          src={imageSource}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full min-h-[240px] items-end bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.35),_transparent_30%),linear-gradient(135deg,#0f172a_0%,#111827_45%,#0b1220_100%)] p-5">
          <div className="max-w-xs rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-200 backdrop-blur">
            {alt}
          </div>
        </div>
      )}
      {overlay ? <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 text-sm text-slate-100">{overlay}</div> : null}
    </div>
  )
}