import { read } from 'fs';
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
  disclosure: {
    title: 'Selbstauskunft',
    intro:
      'Um sicherzustellen, dass unsere Schützlinge in gute Hände kommen, bitten wir dich, die folgenden Fragen zu beantworten. Die Beantwortung der Fragen ist notwendig, um einen Schützling zu adoptieren. Alle Angaben werden vertraulich behandelt und nicht an Dritte weitergegeben. Bitte nimm dir Zeit und fülle das Formular vollständig und wahrheitsgemäß aus, sodass wir dich und deinen Schützling schnellstmöglich zusammenbringen können. Vielen Dank für dein Verständnis und deine Unterstützung!',
    adoptant: {
      headline: 'Deine Kontaktdaten',
      description:
        'Bitte fülle das Formular aus, um dich als Adoptant zu registrieren.',
      firstName: 'Vorname',
      lastName: 'Nachname',
      mail: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      address: 'Straße und Hausnummer',
      addressAditional: 'Adresszusatz',
      zip: 'Postleitzahl',
      city: 'Stadt',
      region: 'Bundesland',
      kids: 'Leben Kinder im Haushalt? Wenn ja, wie viele und wie alt?',
      birthdate: 'Geburtsdatum',
      nationality: 'Staatsangehörigkeit',
      car: 'Besitzt du ein Auto?',
      disability: 'Hast du eine physische oder psychische Behinderung?',
      addiction: 'Bist du von einer Sucht betroffen?',
    },
    partner: {
      headline: 'Kontaktdaten deines Partners (optional)',
      description:
        'Wir wollen nicht nur dich, sondern auch deinen Partner kennenlernen. Bitte fülle das Formular aus.',
      firstName: 'Vorname',
      lastName: 'Nachname',
      birthdate: 'Geburtsdatum',
      car: 'Besitzt dein Partner ein Auto?',
      disability:
        'Hat dein Partner eine physische oder psychische Behinderung?',
      addiction: 'Ist dein Partner von einer Sucht betroffen?',
    },
    job: {
      headline: 'Deine berufliche Situation',
      description:
        'Bitte gib uns einen Überblick über deine berufliche Situation.',
      job: 'Dein Beruf',
      jobPartner: 'Beruf deines Partners (optional)',
      workingHours: 'Deine Arbeitszeiten',
      workingHoursPartner: 'Arbeitszeiten deines Partners (optional)',
      petAloneTime: 'Wie lange wird das Tier am Tag alleine sein?',
    },
    livingSituation: {
      headline: 'Deine Wohnsituation',
      description: 'Bitte gib uns einen Überblick über deine Wohnsituation.',
      livingSituation: 'Wohnsituation',
      size: 'Größe der Wohnung/des Hauses',
      livingTime: 'Seit wann wohnst du dort?',
      plannedMovement: 'Ist in naher Zukunft ein Umzug geplant?',
      region: 'In welcher Umgebung wohnst du?',
      landlordAllowance: 'Liegt eine Erlaubnis des Vermieters vor?',
      allowanceFile: 'Erlaubnis des Vermieters',
      garden: 'Garten vorhanden?',
      gardenSize: 'Größe des Gartens',
      fence: 'Ist der Garten eingezäunt?',
      fenceHeight: 'Höhe des Zauns',
      nextGreen: 'Entfernung zur nächsten Grünflächen',
      balcony: 'Balkon vorhanden?',
      balconySafety: 'Ist der Balkon gesichert? (relevant bei Katzen)',
      otherPets: 'Hast du bereits andere Haustiere? Wenn ja, welche?',
      allergies: 'Gibt es in der Familie Allergien gegen Tierhaare?',
    },
    petInformation: {
      headline: 'Fragen zur Tierhaltung',
      description: 'Bitte beantworte die folgenden Fragen zur Tierhaltung.',
      petReturned:
        'Musstest du bereits ein anderes Tier abgeben? Wenn ja, warum?',
      careGiver:
        'Wer kümmert sich um das Tier, wenn du verreist oder krank bist?',
      travelPlans: 'Wie und wo werden Urlaube geplant?',
      prevSaved: 'Hast du bereits ein Tier gerettet oder adoptiert?',
      prevPetExpirience:
        'Hast du bereits Erfahrung mit Tieren? Bitte erzähle uns kurz davon.',
      petCharacterNot:
        'Welche Charaktereigenschaften sollte dein Tier nicht haben?',
      dogSchool: 'Planst du, eine Hundeschule zu besuchen?',
      holidayPetArrival: 'Planst du Urlaub für die Ankunft des Tieres?',
      newOrientation:
        'Du bist dir bewusst, dass das Tier Zeit zur Orientierung in der neuen Umgebung benötigt und es anfangs zu Unsauberkeiten kommen kann?',
      integration:
        'Die Integration eines Tieres in einen neuen Haushalt kann sich schwieriger gestalten als erwartet. Bist du dir dessen bewusst?',
      petTraining:
        'Bist du bereit, täglich mit dem neuen Familienmitglied zu trainieren und zu üben? (z.B. Stubenreinheit, Leinenführigkeit, Treppensteigen, Alleinebleiben)',
      motivation: 'Was motiviert dich dazu, ein Tier zu adoptieren?',
      imaginedLife: 'Wie stellst du dir das Leben mit einem Tier vor?',
      petRules: 'Was darf das Tier nicht?',
      returnMotivation:
        'Welche Gründe könnten dazu führen, das Tier abzugeben?',
      extraBudget:
        'Die Kosten für ein Tier können schnell steigen. Bist du dir bewusst, dass du im Falle einer OP, Krankheit oder anderen außergewöhnlichen Ereignissen finanziell für das Tier aufkommen musst?',
      budget:
        'Steuern, Versicherungen, Futter, Tierarzt, Zubehör, etc. - hast du ein Budget für das Tier eingeplant und abgesichert?',
      delivery: 'Bist du bereit, das Tier in Gerlingen abzuholen?',
    },
    general: {
      headline: 'Abschließende Fragen',
      prevContact:
        'Hast du bereits Kontakt zu einem unserer Vermittler? Wenn ja, zu wem?',
      prevControl: 'Wurde bei dir bereits eine Kontrolle durchgeführt?',
      otherClub:
        'Hast du dich bereits für ein Tier bei einem anderen Verein beworben?',
      review:
        'Fandest du die Fragen zu persönlich, zu umfangreich oder unangenhem?',
    },
    lastCheck: {
      controlAgreementTitle: 'Zustimmung der Vorkontrolle',
      controlAgreement:
        'Ich bin damit einverstanden, dass bei mir Zuhause eine Vorkontrolle durch ein Teammitglied von Hilfe für Streunerpfoten e.V. oder durch einen anderen Beauftragten durchgeführt wird.',
      dataProcessTitle: 'Einwilligung zur Datenerhebung und -verarbeitung',
      dataProcess:
        'Zur Durchführung der Vorkontrolle und zum Abschluss eines Schutzvertages ist die Erhebung und weitere Verarbeitung personenbezogener Daten erforderlich. Ohne die Angabe, der von uns gewünschten personenbezogenen Daten, ist eine Adoption eines Tieres nicht möglich. Ich erkläre mich ausdrücklich einverstanden mit der Speicherung, Verarbeitung und Weitergabe an Dritte, meiner Daten duch den Verein Hilfe für Streunerpfoten e.V. zum zweck der Tiervermittlung.',
      readRulesTitle: 'Datenschutzerklärung',
      readRules: 'Ich habe die Datenschutzerklärung zur Kenntnis genommen.',
    },
    yes: 'Ja',
    no: 'Nein',
    send: 'Absenden',
  },
};

export default de;
