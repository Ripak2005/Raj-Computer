import type { Language } from './language'

export type LocalizedValue<T> = {
  en: T
  hi: T
}

export type LocalizedText = LocalizedValue<string>

export function pickLocalized<T>(value: LocalizedValue<T>, language: Language) {
  return value[language]
}
