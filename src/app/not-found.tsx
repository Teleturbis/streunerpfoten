import { ChevronRightIcon } from '@heroicons/react/20/solid';
import {
  BanknotesIcon,
  IdentificationIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';

const links = [
  {
    name: 'Spenden',
    href: '/donate',
    description: 'Unterschiedliche Möglichkeiten, uns zu unterstützen.',
    icon: BanknotesIcon,
  },
  {
    name: 'Schützlinge',
    href: '/pets',
    description: 'Unsere Schützlinge, die auf ein neues Zuhause warten.',
    icon: IdentificationIcon,
  },
  {
    name: 'Neuigkeiten',
    href: '/blogs',
    description: 'Aktuelle Informationen und Berichte.',
    icon: NewspaperIcon,
  },
];

export default function NotFound() {
  return (
    <div className='mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8'>
      <div className='mx-auto mt-20 max-w-2xl text-center sm:mt-24'>
        <p className='text-base font-semibold leading-8 text-indigo-600'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Diese Seite konnte nicht gefunden werden.
        </h1>
        <p className='mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8'>
          Die Seite, die du suchst, existiert nicht. Vielleicht hast du dich
          vertippt oder die Seite wurde verschoben.
        </p>
      </div>
      <div className='mx-auto mt-16 flow-root max-w-lg sm:mt-20'>
        <h2 className='sr-only'>Popular pages</h2>
        <ul
          role='list'
          className='-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5'
        >
          {links.map((link, linkIdx) => (
            <li key={linkIdx} className='relative flex gap-x-6 py-6'>
              <div className='flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10'>
                <link.icon
                  className='h-6 w-6 text-indigo-600'
                  aria-hidden='true'
                />
              </div>
              <div className='flex-auto'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  <a href={link.href}>
                    <span className='absolute inset-0' aria-hidden='true' />
                    {link.name}
                  </a>
                </h3>
                <p className='mt-2 text-sm leading-6 text-gray-600'>
                  {link.description}
                </p>
              </div>
              <div className='flex-none self-center'>
                <ChevronRightIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </div>
            </li>
          ))}
        </ul>
        <div className='mt-10 flex justify-center'>
          <a
            href='/'
            className='text-sm font-semibold leading-6 text-indigo-600'
          >
            <span aria-hidden='true'>&larr;</span> Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}
