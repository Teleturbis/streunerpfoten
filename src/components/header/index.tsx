'use client';

import { Fragment, useState } from 'react';
import {
  Dialog,
  Popover,
  Transition,
  DialogPanel,
  TransitionChild,
  PopoverPanel,
  PopoverGroup,
  PopoverButton,
  CloseButton,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

import de from '@/lang/de';
import { Logo } from '@/components';

const navigation = de.header.navigation;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className='sticky top-0 z-50 bg-white'>
      {/* Mobile menu */}
      <Transition show={open} as={Fragment}>
        <Dialog className='relative z-50 lg:hidden' onClose={setOpen}>
          <TransitionChild
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>

          <div className='fixed inset-0 z-40 flex'>
            <TransitionChild
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <DialogPanel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                <div className='flex px-4 pb-2 pt-5'>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>{de.header.close}</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                <ul className='flex flex-col divide-y-2'>
                  {navigation.map((navItem, itemIdx) =>
                    navItem.href ? (
                      <li key={navItem.name} className='py-2'>
                        <CloseButton
                          as={Link}
                          href={navItem.href}
                          className='block px-5 font-semibold text-gray-900 hover:text-gray-800'
                        >
                          {navItem.name}
                        </CloseButton>
                      </li>
                    ) : (
                      <li key={itemIdx} className='pb-5 pt-2'>
                        <p className='block px-5 pb-2 font-semibold text-gray-900'>
                          {navItem.name}
                        </p>
                        <ul className='pl-6 flex flex-col gap-2'>
                          {navItem.items?.map((item, itemIdx) =>
                            item.href ? (
                              <li
                                key={itemIdx}
                                className='block text-sm text-gray-900 hover:text-gray-800'
                              >
                                <CloseButton as={Link} href={item.href}>
                                  {item.title}
                                </CloseButton>
                              </li>
                            ) : (
                              <div key={itemIdx}>
                                <p className='block text-sm text-gray-900 font-semibold'>
                                  {item.title}
                                </p>
                                <ul className='pl-1'>
                                  {item.items?.map((subItem, subItemIdx) => (
                                    <li
                                      key={subItemIdx}
                                      className='block text-sm text-gray-900 hover:text-gray-800'
                                    >
                                      <CloseButton
                                        as={Link}
                                        href={subItem.href}
                                      >
                                        {subItem.name}
                                      </CloseButton>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className='relative'>
        <nav aria-label='Top'>
          <div className='bg-white'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='border-b border-gray-200'>
                <div className='flex h-16 items-center justify-between'>
                  {/* Logo (lg+) */}
                  <div className='hidden lg:flex lg:items-center'>
                    <Link href='/'>
                      <span className='sr-only'>{de.company}</span>
                      <Logo withHoverEffect />
                    </Link>
                  </div>

                  <div className='hidden h-full lg:flex'>
                    {/* Mega menus */}
                    <PopoverGroup className='ml-8'>
                      <div className='flex h-full justify-center space-x-8'>
                        {navigation.map((navItem) =>
                          navItem.href ? (
                            <CloseButton
                              as={Link}
                              key={navItem.name}
                              href={navItem.href}
                              className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                            >
                              {navItem.name}
                            </CloseButton>
                          ) : (
                            <Popover key={navItem.name} className='flex'>
                              {({ open }) => (
                                <>
                                  <div className='relative flex'>
                                    <PopoverButton
                                      className={clsx(
                                        open
                                          ? 'border-indigo-600 text-indigo-600'
                                          : 'border-transparent text-gray-700 hover:text-gray-800',
                                        'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none'
                                      )}
                                    >
                                      {navItem.name}
                                    </PopoverButton>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter='transition ease-out duration-200'
                                    enterFrom='opacity-0'
                                    enterTo='opacity-100'
                                    leave='transition ease-in duration-150'
                                    leaveFrom='opacity-100'
                                    leaveTo='opacity-0'
                                  >
                                    <PopoverPanel className='absolute inset-x-0 top-full text-gray-500 sm:text-sm'>
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div
                                        className='absolute inset-0 top-1/2 bg-white shadow'
                                        aria-hidden='true'
                                      />

                                      <div className='relative bg-white'>
                                        <div className='mx-auto max-w-7xl px-8'>
                                          <div className='items-start gap-x-8 gap-y-10 pb-12 pt-10'>
                                            <div className='grid grid-cols-4 gap-x-8 gap-y-10'>
                                              {navItem.items?.map(
                                                (item, itemIdx) =>
                                                  item.href ? (
                                                    <div key={itemIdx}>
                                                      <CloseButton
                                                        as={Link}
                                                        id={`desktop-featured-heading-${itemIdx}`}
                                                        href={item.href}
                                                        className='font-medium text-gray-900'
                                                      >
                                                        {item.title}
                                                      </CloseButton>
                                                    </div>
                                                  ) : (
                                                    <div key={itemIdx}>
                                                      <p
                                                        id={`desktop-featured-heading-${itemIdx}`}
                                                        className='font-medium text-gray-900'
                                                      >
                                                        {item.title}
                                                      </p>
                                                      <ul
                                                        role='list'
                                                        aria-labelledby={`desktop-featured-heading-${itemIdx}`}
                                                        className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                                      >
                                                        {item.items?.map(
                                                          (subItem) => (
                                                            <li
                                                              key={subItem.name}
                                                              className='flex'
                                                            >
                                                              <CloseButton
                                                                as={Link}
                                                                href={
                                                                  subItem.href
                                                                }
                                                                className='hover:text-gray-800'
                                                              >
                                                                {subItem.name}
                                                              </CloseButton>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </div>
                                                  )
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </PopoverPanel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          )
                        )}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className='flex flex-1 items-center lg:hidden'>
                    <button
                      type='button'
                      className='-ml-2 rounded-md bg-white p-2 text-gray-400'
                      onClick={() => setOpen(true)}
                    >
                      <span className='sr-only'>Open menu</span>
                      <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <Link href='/' className='lg:hidden'>
                    <span className='sr-only'>{de.company}</span>
                    <Logo />
                  </Link>

                  <div className='flex flex-1 items-center justify-end'></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
