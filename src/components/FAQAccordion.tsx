import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../lib/cn'

type FAQAccordionProps = {
  items: Array<{
    id: string
    question: string
    answer: string
  }>
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState(items[0]?.id ?? '')

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(isOpen ? '' : item.id)}
            className={cn(
              'w-full rounded-3xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/[0.07]',
              isOpen && 'bg-white/[0.08]'
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-base font-semibold text-white">{item.question}</span>
              <ChevronDown className={cn('h-5 w-5 text-slate-300 transition', isOpen && 'rotate-180')} />
            </div>
            <div className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr] pt-3' : 'grid-rows-[0fr]')}>
              <p className="overflow-hidden text-sm leading-7 text-slate-300">{item.answer}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}