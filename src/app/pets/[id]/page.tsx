'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const product = {
  name: 'Poppy',
  breadcrumbs: [
    { id: 1, name: 'Start', href: '/' },
    { id: 2, name: 'Schützlinge', href: '/pets' },
  ],
  image: {
    imageSrc: '/animals/4.webp',
    imageAlt: "Back of women's Basic Tee in black.",
  },

  description:
    'Poppy und ihre Geschwister wurden auf der Straße gefunden, verlassen und allein. Sie ist eine kleine, aber mutige Seele, die sich nach einer liebevollen Familie sehnt, die ihr eine bessere Zukunft bieten kann. Als Welpe hat sie noch viel zu lernen und möchte das Leben in einem warmen Zuhause kennenlernen. Poppy sucht eine Familie mit viel Einfühlungsvermögen und idealerweise Erfahrung im Umgang mit Hunden. Sie wird es lieben, Teil einer einfühlsamen Familie zu sein, die ihr all die Liebe und Fürsorge schenkt, die sie braucht, um zu einer treuen Begleiterin heranzuwachsen.',
  details: ['Weiblich', '4 Monate', 'Geimpft, Gechipt, EU Ausweis'],
  contactPerson: {
    name: 'Carmen',
    contact: {
      whatsapp: '015712345678',
      phone: '015712345678',
      email: 'foo@foo.de',
    },
  },
};

export default function PetDetails() {
  return (
    <div className='bg-white'>
      <div className='pb-16 pt-6 sm:pb-24'>
        {/* Breadcrumbs */}
        <nav
          aria-label='Breadcrumb'
          className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        >
          <ol role='list' className='flex items-center space-x-4'>
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className='flex items-center'>
                  <a
                    href={breadcrumb.href}
                    className='mr-4 text-sm font-medium text-gray-900'
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    viewBox='0 0 6 20'
                    aria-hidden='true'
                    className='h-5 w-auto text-gray-300'
                  >
                    <path
                      d='M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
              </li>
            ))}
            <li className='text-sm'>
              <a
                href={product.href}
                aria-current='page'
                className='font-medium text-gray-500 hover:text-gray-600'
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='sr-only'>Images</h2>
              <Image
                width={750}
                height={1150}
                src={product.image.imageSrc}
                alt={product.image.imageAlt}
                className={clsx(
                  'lg:col-span-2 lg:row-span-2 rounded-lg w-full h-auto'
                )}
              />
            </div>

            <div>
              <div className='lg:col-span-5'>
                <div className='lg:col-span-5 lg:col-start-8 mb-4'>
                  <div className='flex justify-between'>
                    <h1 className='text-xl font-medium text-gray-900'>
                      {product.name}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Product details */}
              <div className='mt-10'>
                <h2 className='text-sm font-medium text-gray-900'>
                  Beschreibung
                </h2>

                <div className='prose prose-sm mt-4 text-gray-500'>
                  <p>{product.description}</p>
                </div>
              </div>

              <div className='mt-8 border-t border-gray-200 pt-8'>
                <h2 className='text-sm font-medium text-gray-900'>
                  Infos zu {product.name}
                </h2>

                <div className='prose prose-sm mt-4 text-gray-500'>
                  <ul role='list'>
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className='mt-8 border-t border-gray-200 pt-8'>
                  <p className='text-gray-500 text-sm'>
                    Du bist Interessiert? Dann melde dich bei{' '}
                    {product.contactPerson.name}!
                  </p>

                  <div className='flex gap-6'>
                    {product.contactPerson.contact.whatsapp && (
                      <Link
                        href={`https://wa.me/${product.contactPerson.contact.whatsapp}`}
                        className='block mt-2 opacity-75 hover:opacity-100'
                      >
                        <Image
                          src='/socials/whatsapp.png'
                          alt='WhatsApp Icon'
                          width={24}
                          height={24}
                        />
                      </Link>
                    )}
                    {product.contactPerson.contact.phone && (
                      <Link
                        href={`tel:${product.contactPerson.contact.phone}`}
                        className='block mt-2 opacity-75 hover:opacity-100'
                      >
                        <Image
                          src='/socials/viber.png'
                          alt='Telephone Icon'
                          width={24}
                          height={24}
                        />
                      </Link>
                    )}
                    {product.contactPerson.contact.email && (
                      <Link
                        href={`mailto:${product.contactPerson.contact.email}`}
                        className='block mt-2 opacity-75 hover:opacity-100'
                      >
                        <Image
                          src='/socials/gmail.png'
                          alt='Mail Icon'
                          width={24}
                          height={24}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
