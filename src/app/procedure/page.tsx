import {
  CheckCircleIcon,
  InformationCircleIcon,
  HomeIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function Procedure() {
  return (
    <>
      <nav
        className='sticky top-16 flex bg-white mb-8 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8'
        aria-label='Breadcrumb'
      >
        <ol
          role='list'
          className='mx-auto border-b border-gray-300 flex w-full max-w-screen-xl space-x-4'
        >
          <li className='flex'>
            <div className='flex items-center'>
              <Link href='/' className='text-gray-400 hover:text-gray-500'>
                <HomeIcon
                  className='h-5 w-5 flex-shrink-0'
                  aria-hidden='true'
                />
                <span className='sr-only'>Home</span>
              </Link>
            </div>
          </li>
          <li className='flex'>
            <div className='flex items-center'>
              <svg
                className='h-full w-6 flex-shrink-0 text-gray-300'
                viewBox='0 0 24 44'
                preserveAspectRatio='none'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
              </svg>
              <Link
                href='/pets'
                className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                aria-current='page'
              >
                Schützlinge
              </Link>
            </div>
          </li>
          <li className='flex'>
            <div className='flex items-center'>
              <svg
                className='h-full w-6 flex-shrink-0 text-gray-300'
                viewBox='0 0 24 44'
                preserveAspectRatio='none'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
              </svg>
              <div
                className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                aria-current='page'
              >
                Der Ablauf einer Adoption
              </div>
            </div>
          </li>
        </ol>
      </nav>

      <div className='bg-white px-6 pb-32 lg:px-8'>
        <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
          <p className='text-base font-semibold leading-7 text-indigo-600'>
            Adoption
          </p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Der Ablauf einer Adoption
          </h1>
          <p className='mt-6 text-xl leading-8'>
            Pflegestellen in Deutschland sind knapp, Tierheime im Ausland
            überfüllt. Unsere Tiere leben bei Tierschützerinnen in
            West-Rumänien. Erfahre mehr über unsere Arbeit, die medizinische
            Versorgung und wie du helfen kannst.
          </p>

          <div className='mt-10 max-w-2xl'>
            <p>
              Die Pflegestellen in Deutschland sind knapp, die Auffangstationen
              und Tierheime im Ausland sind überfüllt. Leider entspricht die
              Unterbringung und Betreuung im Ausland oft nicht dem Standard der
              deutschen Tierheime. Es fehlt an Personal, ehrenamtlichen Helfern,
              Spenden und es gibt zu viele Tiere.
            </p>

            <h2 className='mt-8 text-2xl font-bold tracking-tight text-gray-900'>
              Betreuung durch Tierschützerinnen in Rumänien
            </h2>
            <p className='mt-4'>
              Unsere Tiere leben bei einer unserer Tierschützerinnen Gianina,
              Ioana oder Daniela vor Ort in West-Rumänien. Die drei können die
              Tiere gut einschätzen und testen vorher, wie sie in bestimmten
              Situationen reagieren. Die meisten Hunde kennen ein Leben im Haus
              noch nicht, deshalb sollte man Verständnis und Geduld mitbringen,
              wenn man ein Tierschutztier adoptieren möchte. Es dauert einige
              Monate, bis das Tier sich richtig eingewöhnt.
            </p>

            <h2 className='mt-8 text-2xl font-bold tracking-tight text-gray-900'>
              Informationen zu den Tieren
            </h2>
            <p className='mt-4'>
              Wir erstellen zu unseren Tieren eine Annonce, in der wir Alter,
              Größe, Gewicht, die Geschichte des Tieres und den jetzigen Zustand
              angeben und beschreiben. (Bitte beachte, dass Gewicht, Größe und
              Alter nur Schätzungen sind. Bei den Tieren handelt es sich seit
              Generationen um Mischlinge, daher sind genaue Angaben schwierig.)
              Auf Anfrage kannst du gerne weitere Bilder und Videos des Tieres
              erhalten, für das du dich interessierst.
            </p>

            <h2 className='mt-8 text-2xl font-bold tracking-tight text-gray-900'>
              Passt ein Tier in dein Leben?
            </h2>
            <p className='mt-4'>
              Bevor es weitergeht, ist es wichtig zu klären, ob ein Hund oder
              eine Katze in dein Leben passt. Hast du genügend Zeit, Geduld,
              Erfahrung und auch das nötige Kleingeld, einem Vierbeiner bis an
              das Ende seines Lebens ein Zuhause zu schenken?
            </p>

            <figure className='mt-4 border-l border-indigo-600 pl-9'>
              <blockquote className='font-semibold text-gray-900'>
                <p>
                  “Die Kosten der Grundausstattung sind für jeden Hund ziemlich
                  ähnlich, egal ob groß oder klein. Man benötigt Näpfe für
                  Futter und Wasser, ein Körbchen oder eine Decke zum Schlafen,
                  sowie ein Halsband, ein Geschirr und eine Leine. Ich empfehle,
                  sowohl eine längere als auch eine kurze Leine zu haben. Dazu
                  kommen die Hundesteuer, die je nach Kreis variiert (bei uns
                  sind es 40€/Jahr für einen 25 kg Hund), sowie Versicherungen.
                  Wir haben eine Kranken- und OP-Versicherung bei Petolo, die
                  ca. 35€/Monat kostet und 80% der Kosten deckt, und eine
                  Haftpflichtversicherung, die dringend benötigt wird und etwa
                  60€/Jahr kostet.
                  <br />
                  <br />
                  Zu guter Letzt kommen noch die Kosten für Futter und
                  Leckerlis. Diese hängen stark von der Größe, Aktivität und dem
                  Gewicht des Hundes ab. Wir barfen unseren 25 kg Hund mit
                  bestem Rindfleisch vom Metzger, was uns ca. 200€/Monat kostet
                  (bei 3% des Körpergewichts). Für Trockenfutter kann man etwa
                  60€/Monat rechnen. Für Leckerlis kann man durchaus 30€/Monat
                  einplanen, da man seinem besten Freund ja auch etwas gönnen
                  möchte. So kommen unterm Strich monatliche Kosten von etwa
                  270€ beim Barf und 130€ bei Trockenfutter zusammen.”
                </p>
              </blockquote>
              <figcaption className='mt-6 flex gap-x-4'>
                <div className='text-sm leading-6'>
                  <strong className='font-semibold text-gray-900'>
                    Kevin Poppe
                  </strong>{' '}
                  – Adoptant von Blue
                </div>
              </figcaption>
            </figure>

            <h2 className='mt-12 text-2xl font-bold tracking-tight text-gray-900'>
              Selbstauskunft und Vorkontrolle
            </h2>
            <p className='mt-6'>
              Wenn du denkst, es passt, fülle bitte den Selbstauskunftsbogen auf
              unserer Homepage aus. Nimm dir genügend Zeit, um diesen Bogen
              korrekt auszufüllen. Wir werden deinen Selbstauskunftsbogen
              auswerten und uns bei dir melden. In einem Gespräch möchten wir
              gerne mehr über dich erfahren. Wenn wir auch der Meinung sind,
              unser Schützling könnte in dein Leben passen, werden wir einen
              Termin für eine Vorkontrolle vereinbaren.
            </p>
            <p className='mt-6'>
              Du brauchst keine Angst vor diesem Termin zu haben. Die
              Vorkontrolle dient dazu, zu schauen, ob die Angaben im
              Selbstauskunftsbogen mit der Wohnsituation und dem Umfeld
              übereinstimmen. Wir prüfen, ob die Möglichkeit besteht, dass unser
              Schützling ein glückliches Leben bei dir führen kann. Bei unserem
              Besuch besprechen wir auch die Vorbereitungen, die du treffen
              musst, die Eingewöhnungszeit und die Notwendigkeit eines
              Sicherheitsgeschirrs bei einem Hund. Du kannst dir in Ruhe
              überlegen, welche offenen Fragen du noch hast und diese bei der
              Vorkontrolle stellen. Wir möchten sicherstellen, dass unser
              Schützling sein Zuhause für immer bei dir findet und nicht wieder
              ausziehen muss, wenn die Anfangszeit schwierig oder anstrengend
              wird.
            </p>

            <h2 className='mt-8 text-2xl font-bold tracking-tight text-gray-900'>
              Planung der Ausreise
            </h2>
            <p className='mt-4'>
              Nach der Vorkontrolle besprechen wir uns im Team. Sind du und wir
              der Meinung, dass die Fellnase bei dir einziehen kann, planen wir
              zusammen die Ausreise. Wir klären, wann der Einzug bei dir am
              besten ist. In den ersten Wochen solltest du viel Zeit und Ruhe
              mitbringen.
            </p>

            <h2 className='mt-8 text-2xl font-bold tracking-tight text-gray-900'>
              Schutzvertrag und Schutzgebühr
            </h2>
            <p className='mt-4'>
              Wir senden dir dann einen Schutzvertrag zu, in dem du in die
              Adoption des Tieres einwilligst und versprichst, es artgerecht zu
              halten und zu versorgen. Diesen sendest du uns unterschrieben
              zurück. Eine Woche bevor die Fellnase bei dir einzieht, ist die
              Schutzgebühr zu begleichen. Die Schutzgebühr ist eine
              Aufwandsentschädigung. Sie beinhaltet die Auslagen, die wir für
              das Tier hatten, wie z.B. Impfung, Chippen, Entwurmung,
              Kastration, EU-Ausweis und den Transport. Die Kosten für das
              Sicherheitsgeschirr werden separat berechnet.
            </p>

            <h2 className='mt-8 text-2xl font-bold tracking-tight text-gray-900'>
              Transport und Ankunft
            </h2>
            <p className='mt-4'>
              Bei einem Tiertransportunternehmen, mit dem wir schon lange
              zusammenarbeiten, organisieren wir dann einen Platz für die
              Ausreise deiner Fellnase. Meistens kommen die Tiere
              Samstagnachmittags an. Die Übergabe erfolgt in der Regel bei
              unserem Vereinssitz in Gerlingen inklusive Sicherheitsgeschirr.
              Dieses haben wir im Vorfeld für deine Fellnase anfertigen lassen.
              Bei einer Katze bringst du bitte eine Transportbox mit, diese wird
              direkt in dein Auto geladen. Die Tiere werden direkt in euer Auto
              verladen und ihr tretet eure Heimreise ins Für-Immer-Zuhause an.
              Es empfiehlt sich, den Hund im Auto in eine Transportbox zu laden.
              Bei Ankunft tragt ihr diese dann mitsamt dem Hund in euer Zuhause
              und öffnet die Box erst, wenn alle Türen zu sind.
            </p>

            <h2 className='mt-8 text-2xl font-bold tracking-tight text-gray-900'>
              Eingewöhnungszeit
            </h2>
            <p className='mt-4'>
              Der Transport ist Stress für die Tiere, und plötzlich sind sie in
              einem fremden Land, in einer komplett neuen Umgebung, mit einer
              neuen Sprache. Einige Tiere könnten mit Fluchtverhalten reagieren
              und manche benötigen am Anfang viel Ruhe und Schlaf, um den
              Transport zu verarbeiten. Deshalb solltest du im Vorfeld zu Hause
              alles bereitgestellt haben.
            </p>
            <p className='mt-4'>
              Die Anfangszeit ist aufregend und manchmal auch sehr anstrengend.
              Es braucht einige Zeit, bis euer neuer Mitbewohner euch, eure
              Abläufe und die neue Umgebung kennenlernt. Ebenso dauert es einige
              Zeit, bis IHR euren Schützling kennenlernt. Gebt euch die Zeit,
              baut eine Verbindung mit Herz und Verstand zueinander auf, und ihr
              werdet als Lohn einen treuen Begleiter an eurer Seite haben.
            </p>
          </div>

          <figure className='mt-16'>
            <Image
              height={873}
              width={1310}
              className='aspect-video rounded-xl bg-gray-50 object-cover'
              src='https://images.unsplash.com/photo-1557495235-340eb888a9fb?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
            <figcaption className='mt-4 flex gap-x-2 text-sm leading-6 text-gray-500'>
              <InformationCircleIcon
                className='mt-0.5 h-5 w-5 flex-none text-gray-300'
                aria-hidden='true'
              />
              Faucibus commodo massa rhoncus, volutpat.
            </figcaption>
          </figure>

          <div className='mt-16 max-w-2xl'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
              Bereit, ein Zuhause zu schenken?
            </h2>
            <p className='mt-6'>
              Du bist bereit, einer Tierschutzfellnase ein Zuhause zu schenken?
              Dann melde dich gerne bei uns, wir freuen uns auf deine
              Kontaktaufnahme.
            </p>
            <p className='mt-8'>Dein Team von Hilfe für Streunerpfoten e.V.</p>
          </div>

          <div className='mt-16 max-w-2xl'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
              Checkliste für die Adoption
            </h2>
            <p className='mt-6'>
              Die Checkliste soll dir helfen, dich auf die Adoption eines
              Tierschutztieres vorzubereiten. Bitte beachte, dass es sich hier
              um eine grobe Liste handelt. Jedes Tier ist anders und hat andere
              Bedürfnisse. Bitte kläre vor der Adoption, ob das Tier in dein
              Leben passt und ob du ihm ein Zuhause auf Lebenszeit schenken
              kannst.
            </p>
            <Checklist />
          </div>
        </div>
      </div>
    </>
  );
}

function Circle() {
  return <div className='h-3.5 w-3.5 border border-gray-400 rounded-full' />;
}

function Checklist() {
  return (
    <ul role='list' className='mt-8 max-w-xl space-y-2 text-gray-600'>
      <li className='flex flex-col'>
        <div className='flex gap-x-3'>
          <CheckCircleIcon
            className='mt-1 h-5 w-5 flex-none text-indigo-600'
            aria-hidden='true'
          />
          <span className='font-semibold text-gray-900'>Grundausstattung</span>
        </div>
        <ul className='ml-12'>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Näpfe für Futter und Wasser
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Körbchen/Decke zum Schlafen
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Halsband und Geschirr
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Leine (eine längere und eine kurze Leine)
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Transportbox (für Katzen oder kleine Hunde)
          </li>
        </ul>
      </li>

      <li className='flex flex-col'>
        <div className='flex gap-x-3'>
          <CheckCircleIcon
            className='mt-1 h-5 w-5 flex-none text-indigo-600'
            aria-hidden='true'
          />
          <span className='font-semibold text-gray-900'>Vor der Adoption</span>
        </div>
        <ul className='ml-12'>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Selbstauskunftsbogen ausfüllen
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Wohnsituation prüfen
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Zeit und Geduld mitbringen
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Finanzielle Mittel sicherstellen
          </li>
        </ul>
      </li>

      <li className='flex flex-col'>
        <div className='flex gap-x-3'>
          <CheckCircleIcon
            className='mt-1 h-5 w-5 flex-none text-indigo-600'
            aria-hidden='true'
          />
          <span className='font-semibold text-gray-900'>Versicherungen</span>
        </div>
        <ul className='ml-12'>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Haftpflichtversicherung (dringend benötigt)
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Kranken- und OP-Versicherung (empfohlen)
          </li>
        </ul>
      </li>

      <li className='flex flex-col'>
        <div className='flex gap-x-3'>
          <CheckCircleIcon
            className='mt-1 h-5 w-5 flex-none text-indigo-600'
            aria-hidden='true'
          />
          <span className='font-semibold text-gray-900'>
            Vorbereitungen für den Einzug
          </span>
        </div>
        <ul className='ml-12'>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Schutzvertrag unterschreiben
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Schutzgebühr zahlen
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Transport vorbereiten
          </li>
        </ul>
      </li>

      <li className='flex flex-col'>
        <div className='flex gap-x-3'>
          <CheckCircleIcon
            className='mt-1 h-5 w-5 flex-none text-indigo-600'
            aria-hidden='true'
          />
          <span className='font-semibold text-gray-900'>Nach der Ankunft</span>
        </div>
        <ul className='ml-12'>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Eingewöhnungszeit einplanen
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Sicherheitsvorkehrungen treffen
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Tierarztbesuch vereinbaren
          </li>
        </ul>
      </li>

      <li className='flex flex-col'>
        <div className='flex gap-x-3'>
          <CheckCircleIcon
            className='mt-1 h-5 w-5 flex-none text-indigo-600'
            aria-hidden='true'
          />
          <span className='font-semibold text-gray-900'>
            Tipps für die Anfangszeit
          </span>
        </div>
        <ul className='ml-12'>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Routinen etablieren
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Geduld und Verständnis zeigen
          </li>
        </ul>
      </li>

      <li className='flex flex-col'>
        <div className='flex gap-x-3'>
          <CheckCircleIcon
            className='mt-1 h-5 w-5 flex-none text-indigo-600'
            aria-hidden='true'
          />
          <span className='font-semibold text-gray-900'>
            Fragen und Unterstützung
          </span>
        </div>
        <ul className='ml-12'>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Offene Fragen klären
          </li>
          <li className='flex justify-start items-center gap-2'>
            <Circle />
            Vorkontrolle nutzen, um Unsicherheiten zu besprechen
          </li>
        </ul>
      </li>
    </ul>
  );
}
