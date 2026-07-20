import { images } from './images'
import type { LocalizedText } from '../lib/localized'

export type GalleryItem = {
  id: string
  title: LocalizedText
  category: LocalizedText
  image: string
}

export const gallery: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: { en: 'Modern service counter', hi: 'आधुनिक सेवा काउंटर' },
    category: { en: 'Workspace', hi: 'कार्यस्थल' },
    image: images.gallery1,
  },
  { id: 'gallery-2', title: { en: 'Print finishing desk', hi: 'प्रिंट फिनिशिंग डेस्क' }, category: { en: 'Printing', hi: 'प्रिंटिंग' }, image: images.gallery2 },
  { id: 'gallery-3', title: { en: 'Passport photo setup', hi: 'पासपोर्ट फोटो सेटअप' }, category: { en: 'Studio', hi: 'स्टूडियो' }, image: images.gallery3 },
  { id: 'gallery-4', title: { en: 'Digital application help', hi: 'डिजिटल आवेदन सहायता' }, category: { en: 'Online Services', hi: 'ऑनलाइन सेवाएँ' }, image: images.gallery4 },
  { id: 'gallery-5', title: { en: 'Technician workbench', hi: 'टेक्नीशियन वर्कबेंच' }, category: { en: 'Repair', hi: 'मरम्मत' }, image: images.gallery5 },
  { id: 'gallery-6', title: { en: 'Premium paperwork station', hi: 'प्रीमियम पेपरवर्क स्टेशन' }, category: { en: 'Documentation', hi: 'दस्तावेज़ीकरण' }, image: images.gallery6 },
  { id: 'gallery-7', title: { en: 'Customer support corner', hi: 'ग्राहक सहायता कॉर्नर' }, category: { en: 'Support', hi: 'सपोर्ट' }, image: images.gallery7 },
  { id: 'gallery-8', title: { en: 'Retail display section', hi: 'रिटेल डिस्प्ले सेक्शन' }, category: { en: 'Shop', hi: 'दुकान' }, image: images.gallery8 },
]