'use client';

import Image from 'next/image';
import { Map, Marker } from 'pigeon-maps';
import de from '@/lang/de';
import Link from 'next/link';
import { Logo } from '@/components';

const navigation = de.footer;

export default function Footer() {
  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='lg:grid lg:grid-cols-6 lg:gap-8'>
          <div className='space-y-8 col-span-2 flex flex-col justify-between'>
            <div className='flex flex-col gap-2'>
              <div>
                <Logo />
              </div>
              <p className='text-sm leading-6 text-gray-600'>
                {navigation.slogan}
              </p>
            </div>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <Image
                    height={24}
                    width={24}
                    className='h-6 w-6 opacity-75 hover:opacity-100'
                    aria-hidden='true'
                    src={`/socials/${item.name.toLowerCase()}.png`}
                    alt=''
                  />
                </a>
              ))}
            </div>
          </div>

          <div className='mt-16 lg:mt-0'>
            {navigation.items.map((item, idx) => (
              <div key={idx}>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  {item.title}
                </h3>
                <ul role='list' className='mt-6 space-y-2'>
                  {item.items.map((subItem) => (
                    <li
                      key={subItem.name}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='mt-16 lg:mt-0 col-span-3 overflow-hidden rounded-lg h-52 bg-red-500'>
            <Map
              defaultCenter={[navigation.location.lat, navigation.location.lng]}
              defaultZoom={12}
            >
              <Marker
                width={50}
                anchor={[navigation.location.lat, navigation.location.lng]}
              />
            </Map>
          </div>
        </div>

        <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col gap-2 md:flex-row justify-between'>
          <p className='text-xs leading-5 text-gray-500'>
            {navigation.footnote}
          </p>
          <Link
            href='https://www.flaticon.com/free-icons/instagram-logo'
            title='instagram logo icons'
            target='_blank'
            className='text-xs leading-5 text-gray-500 hover:text-gray-600'
          >
            Logos & Icons created by Pixel perfect - Flaticon
          </Link>
        </div>
      </div>
    </footer>
  );
}
