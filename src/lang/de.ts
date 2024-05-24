import type { LangType } from './types';

const de: LangType = {
  company: 'Hilfe für Streuerpfoten e.V.',
  header: {
    navigation: [
      { name: 'Start', href: '/' },
      {
        name: 'Helfen',
        items: [
          {
            title: 'Spenden',
            items: [
              { name: 'Streuerpfoten-Armband', href: '#' },
              { name: 'Spenden', href: '#' },
            ],
          },
          {
            title: 'Vermittlung',
            items: [
              { name: 'Ablauf', href: '/procedure' },
              { name: 'Schützlinge', href: '/pets' },
              { name: 'Selbstauskunft', href: '/disclosure' },
            ],
          },
          {
            title: 'Patenschaft',
            items: [
              { name: 'Pate werden', href: '#' },
              { name: 'Paten gefunden', href: '#' },
            ],
          },
          {
            title: 'Mitgliedschaft',
            items: [{ name: 'Mitglied werden', href: '#' }],
          },
          {
            title: 'Pflegestelle',
            items: [{ name: 'Pflegestelle werden', href: '#' }],
          },
        ],
      },
      {
        name: 'Über uns',
        items: [
          {
            title: 'Unser Team',
            href: '#',
          },
          {
            title: 'Pflegestellen',
            href: '#',
          },
        ],
      },
      {
        name: 'Neuigkeiten',
        href: '/blogs',
      },
      { name: 'Kontakt', href: '/contact' },
    ],

    close: 'Menü schließen',
  },
  footer: {
    slogan: 'Mit Herz und Hand für Tiere in Not.',
    footnote: '© 2024 Hilfe für Streunerpfoten e.V. - Alle Rechte vorbehalten',
    items: [
      {
        title: 'Anschrift',
        items: [
          { name: 'Hilfe für Streunerpfoten e.V.' },
          { name: 'Siemensstr. 46' },
          { name: '70839 Gerlingen' },
        ],
      },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
      },
      {
        name: 'Instagram',
        href: '#',
      },
    ],
    location: {
      lat: 48.80595,
      lng: 9.07311,
    },
  },
  hero: {
    slogan: 'Mit Herz und Hand für Tiere in Not',
    intro:
      'Hilfe für Streunerpfoten e.V. ist für die Rettung und das Wohl rumänischer Streunertiere da. Wir bieten ihnen medizinische Hilfe, Kastrationen und ein neues Zuhause. Erfahre mehr über unsere Arbeit und wie auch du einen Unterschied machen kannst.',
    cta: 'Mitglied werden',
    donationCta: 'Jetzt spenden',
  },
  highlightSection: {
    title: 'Unsere Schützlinge',
    showAll: 'Alle anzeigen',
  },
  highlightCard: {
    cta: 'Mehr erfahren',
  },
  blogs: {
    title: 'Neuigkeiten',
    intro: 'Erfahre mehr über unsere Arbeit und die neuesten Entwicklungen.',
  },
};

export default de;
