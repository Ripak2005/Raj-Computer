import { images } from './images'
import type { LocalizedText, LocalizedValue } from '../lib/localized'

export type ServiceIconName =
  | 'laptop'
  | 'printer'
  | 'copy'
  | 'scanner'
  | 'camera'
  | 'globe'
  | 'hardDrive'
  | 'shield'

export type Service = {
  id: string
  title: LocalizedText
  description: LocalizedText
  icon: ServiceIconName
  image: string
  price: string
  category: LocalizedText
  slug: string
  highlights: LocalizedValue<string[]>
}

export const services: Service[] = [
  {
    id: 'laptop-service',
    title: { en: 'Laptop Repair & Setup', hi: 'लैपटॉप रिपेयर और सेटअप' },
    description: {
      en: 'Hardware diagnostics, OS installation, upgrades, and performance tuning for students, offices, and home users.',
      hi: 'हार्डवेयर डायग्नोस्टिक्स, ओएस इंस्टॉलेशन, अपग्रेड और परफॉर्मेंस ट्यूनिंग छात्रों, कार्यालयों और घरेलू उपयोगकर्ताओं के लिए।',
    },
    icon: 'laptop',
    image: images.hero,
    price: 'From ₹499',
    category: { en: 'Hardware', hi: 'हार्डवेयर' },
    slug: 'laptop-repair-setup',
    highlights: { en: ['Diagnostics', 'Windows install', 'SSD/RAM upgrade'], hi: ['डायग्नोस्टिक्स', 'विंडोज़ इंस्टॉल', 'SSD/RAM अपग्रेड'] },
  },
  {
    id: 'printer-service',
    title: { en: 'Printer Repair', hi: 'प्रिंटर रिपेयर' },
    description: {
      en: 'Reliable printer troubleshooting, head cleaning, cartridge support, and routine maintenance.',
      hi: 'विश्वसनीय प्रिंटर ट्रबलशूटिंग, हेड क्लीनिंग, कार्ट्रिज सपोर्ट और नियमित मेंटेनेंस।',
    },
    icon: 'printer',
    image: images.printer,
    price: 'From ₹299',
    category: { en: 'Hardware', hi: 'हार्डवेयर' },
    slug: 'printer-repair',
    highlights: { en: ['Ink issues', 'Paper jam fix', 'Maintenance'], hi: ['स्याही समस्या', 'पेपर जाम ठीक', 'मेंटेनेंस'] },
  },
  {
    id: 'photocopy-service',
    title: { en: 'Photocopy & Print', hi: 'फोटोकॉपी और प्रिंट' },
    description: {
      en: 'Fast black-and-white and color photocopying with premium paper options for bulk and urgent work.',
      hi: 'बल्क और तुरंत कार्य के लिए प्रीमियम पेपर विकल्पों के साथ तेज़ ब्लैक-एंड-व्हाइट और कलर फोटोकॉपी।',
    },
    icon: 'copy',
    image: images.photocopy,
    price: 'From ₹2/page',
    category: { en: 'Print & Copy', hi: 'प्रिंट और कॉपी' },
    slug: 'photocopy-print',
    highlights: { en: ['Color print', 'Bulk copy', 'Binding support'], hi: ['कलर प्रिंट', 'बल्क कॉपी', 'बाइंडिंग सहायता'] },
  },
  {
    id: 'scanner-service',
    title: { en: 'Document Scanning', hi: 'दस्तावेज़ स्कैनिंग' },
    description: {
      en: 'High-resolution scanning for records, certificates, forms, and archived documents.',
      hi: 'रिकॉर्ड, प्रमाणपत्र, फॉर्म और पुरालेखित दस्तावेज़ों के लिए उच्च-रिज़ॉल्यूशन स्कैनिंग।',
    },
    icon: 'scanner',
    image: images.scanner,
    price: 'From ₹5/page',
    category: { en: 'Digitization', hi: 'डिजिटाइजेशन' },
    slug: 'document-scanning',
    highlights: { en: ['PDF output', 'OCR-ready files', 'Archive bundles'], hi: ['PDF आउटपुट', 'OCR-रेडी फाइलें', 'आर्काइव पैकेज'] },
  },
  {
    id: 'passport-photo-service',
    title: { en: 'Passport Photo Studio', hi: 'पासपोर्ट फोटो स्टूडियो' },
    description: {
      en: 'Professional passport-size and ID photos with fast retouching and size compliance.',
      hi: 'तेज़ रिटचिंग और साइज अनुपालन के साथ प्रोफेशनल पासपोर्ट-साइज़ और आईडी फोटो।',
    },
    icon: 'camera',
    image: images.passportPhoto,
    price: 'From ₹79',
    category: { en: 'Imaging', hi: 'इमेजिंग' },
    slug: 'passport-photo',
    highlights: { en: ['Instant prints', 'Multiple sizes', 'Background edit'], hi: ['तुरंत प्रिंट', 'कई साइज', 'बैकग्राउंड एडिट'] },
  },
  {
    id: 'online-service',
    title: { en: 'Online Forms & Services', hi: 'ऑनलाइन फॉर्म और सेवाएँ' },
    description: {
      en: 'Assistance with government forms, admission applications, bill payments, and digital submissions.',
      hi: 'सरकारी फॉर्म, एडमिशन आवेदन, बिल भुगतान और डिजिटल सबमिशन में सहायता।',
    },
    icon: 'globe',
    image: images.onlineService,
    price: 'From ₹49',
    category: { en: 'Digital Services', hi: 'डिजिटल सेवाएँ' },
    slug: 'online-forms-services',
    highlights: { en: ['Form filing', 'Payment help', 'Printouts'], hi: ['फॉर्म भरना', 'भुगतान सहायता', 'प्रिंटआउट'] },
  },
  {
    id: 'data-recovery',
    title: { en: 'Data Recovery', hi: 'डेटा रिकवरी' },
    description: {
      en: 'Recover files from damaged drives, corrupted USB devices, memory cards, and accidental deletions.',
      hi: 'क्षतिग्रस्त ड्राइव, खराब USB डिवाइस, मेमोरी कार्ड और गलती से हटाई गई फाइलों से डेटा रिकवर करें।',
    },
    icon: 'hardDrive',
    image: images.shop,
    price: 'From ₹999',
    category: { en: 'Support', hi: 'सपोर्ट' },
    slug: 'data-recovery',
    highlights: { en: ['Lost files', 'USB recovery', 'Drive health check'], hi: ['खोई फाइलें', 'USB रिकवरी', 'ड्राइव हेल्थ चेक'] },
  },
  {
    id: 'security-support',
    title: { en: 'Security & Protection', hi: 'सुरक्षा और प्रोटेक्शन' },
    description: {
      en: 'Basic cyber hygiene setup, antivirus configuration, and system hardening for everyday use.',
      hi: 'रोज़मर्रा के उपयोग के लिए बेसिक साइबर हाइजीन सेटअप, एंटीवायरस कॉन्फ़िगरेशन और सिस्टम हार्डनिंग।',
    },
    icon: 'shield',
    image: images.shop,
    price: 'From ₹399',
    category: { en: 'Support', hi: 'सपोर्ट' },
    slug: 'security-protection',
    highlights: { en: ['Antivirus setup', 'Backup plan', 'Privacy tuning'], hi: ['एंटीवायरस सेटअप', 'बैकअप प्लान', 'प्राइवेसी ट्यूनिंग'] },
  },
]