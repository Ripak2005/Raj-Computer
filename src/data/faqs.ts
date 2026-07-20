import type { LocalizedText } from '../lib/localized'

export type Faq = {
  id: string
  question: LocalizedText
  answer: LocalizedText
}

export const faqs: Faq[] = [
  {
    id: 'faq-1',
    question: { en: 'Which services are available at Raj Computer?', hi: 'राज कंप्यूटर पर कौन-कौन सी सेवाएँ उपलब्ध हैं?' },
    answer: {
      en: 'We handle laptop repair, printer service, photocopying, scanning, passport photos, online forms, data recovery, and everyday digital support.',
      hi: 'हम लैपटॉप रिपेयर, प्रिंटर सेवा, फोटोकॉपी, स्कैनिंग, पासपोर्ट फोटो, ऑनलाइन फॉर्म, डेटा रिकवरी और रोज़मर्रा की डिजिटल सहायता प्रदान करते हैं।',
    },
  },
  {
    id: 'faq-2',
    question: { en: 'Do you offer same-day support?', hi: 'क्या आप उसी दिन सेवा देते हैं?' },
    answer: {
      en: 'Yes, many small repairs and print jobs are completed the same day depending on queue, part availability, and service complexity.',
      hi: 'हाँ, कई छोटे repair और print काम उसी दिन पूरे हो जाते हैं, यह कतार, पार्ट उपलब्धता और काम की जटिलता पर निर्भर करता है।',
    },
  },
  {
    id: 'faq-3',
    question: { en: 'Can I send a WhatsApp message before visiting?', hi: 'क्या मैं आने से पहले WhatsApp पर संदेश भेज सकता हूँ?' },
    answer: {
      en: 'Yes. You can use the WhatsApp number listed in the business data to confirm timing, pricing, or document requirements before you arrive.',
      hi: 'हाँ। आप आने से पहले समय, मूल्य या दस्तावेज़ आवश्यकताओं की पुष्टि के लिए business data में दिया गया WhatsApp नंबर इस्तेमाल कर सकते हैं।',
    },
  },
  {
    id: 'faq-4',
    question: { en: 'Do you help with online form submissions?', hi: 'क्या आप ऑनलाइन फॉर्म भरने में मदद करते हैं?' },
    answer: {
      en: 'Yes. We assist with admissions, government portals, bill payments, and form printing so the process stays simple and organized.',
      hi: 'हाँ। हम एडमिशन, सरकारी पोर्टल, बिल भुगतान और फॉर्म प्रिंटिंग में सहायता करते हैं ताकि प्रक्रिया सरल और व्यवस्थित रहे।',
    },
  },
  {
    id: 'faq-5',
    question: { en: 'Can the website images be replaced later?', hi: 'क्या वेबसाइट की तस्वीरें बाद में बदली जा सकती हैं?' },
    answer: {
      en: 'Absolutely. Replace only the URLs inside src/data/images.ts with your Google Drive image links and the whole site will update automatically.',
      hi: 'बिलकुल। बस src/data/images.ts के अंदर URLs को अपने Google Drive links से बदल दें और पूरी वेबसाइट अपने आप अपडेट हो जाएगी।',
    },
  },
  {
    id: 'faq-6',
    question: { en: 'Is the site mobile friendly?', hi: 'क्या साइट मोबाइल-फ्रेंडली है?' },
    answer: {
      en: 'Yes. The layout is built with a mobile-first Tailwind structure, responsive cards, and adaptive navigation for all screen sizes.',
      hi: 'हाँ। यह लेआउट mobile-first Tailwind structure, responsive cards और सभी स्क्रीन के लिए adaptive navigation के साथ बनाया गया है।',
    },
  },
]