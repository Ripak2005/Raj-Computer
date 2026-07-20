import { images } from './images'
import type { LocalizedText } from '../lib/localized'

export type Testimonial = {
  id: string
  name: string
  role: LocalizedText
  quote: LocalizedText
  rating: number
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Aman Kumar',
    role: { en: 'College Student', hi: 'कॉलेज छात्र' },
    quote: {
      en: 'I got a laptop issue fixed the same day, and the team explained everything clearly. The service felt premium and fast.',
      hi: 'मेरा लैपटॉप उसी दिन ठीक हो गया, और टीम ने सब कुछ स्पष्ट रूप से समझाया। सेवा प्रीमियम और तेज़ लगी।',
    },
    rating: 5,
    image: images.testimonial1,
  },
  {
    id: 'testimonial-2',
    name: 'Priya Singh',
    role: { en: 'Local Business Owner', hi: 'स्थानीय व्यवसायी' },
    quote: {
      en: 'Raj Computer handles all our print, scan, and online work. It is dependable, organized, and always customer friendly.',
      hi: 'राज कंप्यूटर हमारे सभी प्रिंट, स्कैन और ऑनलाइन काम संभालता है। यह भरोसेमंद, व्यवस्थित और हमेशा ग्राहक-अनुकूल है।',
    },
    rating: 5,
    image: images.testimonial2,
  },
  {
    id: 'testimonial-3',
    name: 'Rakesh Verma',
    role: { en: 'Teacher', hi: 'शिक्षक' },
    quote: {
      en: 'Their passport photo and document services are quick and precise. I recommend them whenever someone needs a trusted shop.',
      hi: 'उनकी पासपोर्ट फोटो और दस्तावेज़ सेवाएँ तेज़ और सटीक हैं। जब भी किसी को भरोसेमंद दुकान चाहिए, मैं इन्हें सुझाता हूँ।',
    },
    rating: 5,
    image: images.testimonial3,
  },
]