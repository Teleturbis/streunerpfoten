'use client';

import HighlightCard, { PetType } from '@/components/cards/HighlightCard';
import { getPets } from '@/mocks/pets';
import React, { useEffect } from 'react';
import { Fragment, useState } from 'react';
import {
  Dialog,
  Disclosure,
  Transition,
  DialogPanel,
  TransitionChild,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';

import de from '@/lang/de';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {};

const filters = {
  type: {
    id: 'type',
    name: 'Tierart',
    options: [
      { value: 'dog', label: 'Hund' },
      { value: 'cat', label: 'Katze' },
    ],
  },
  age: {
    id: 'age',
    name: 'Alter',
    options: [
      { value: [0, 6], label: 'bis 6 Monate' },
      { value: [0, 12], label: 'bis 12 Monate' },
      { value: [6, null], label: 'ab 6 Monate' },
      { value: [12, null], label: 'ab 12 Monate' },
      { value: [18, null], label: 'ab 18 Monate' },
      { value: [24, null], label: 'ab 24 Monate' },
    ],
  },
  sizes: {
    id: 'sizes',
    name: 'Tiergröße (Fraglich?)',
    options: [
      { value: [0, 20], label: 'unter 20cm Schulterhöhe' },
      { value: [20, 30], label: '20-30cm Schulterhöhe' },
      { value: [30, 40], label: '30-40cm Schulterhöhe' },
      { value: [40, null], label: 'ab 40cm Schulterhöhe' },
    ],
  },
};

export default function Pets({}: Props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [pets, setPets] = useState<PetType[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<{
    type?: string;
    age?: [number | null, number | null];
  }>({});

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps -- fetchData should only run if selectedFilters change or on mount
  }, [selectedFilters]);

  const fetchData = async () => {
    try {
      const response = await getPets(selectedFilters);
      setPets(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-white'>
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            className='relative z-40 lg:hidden'
            onClose={setMobileFiltersOpen}
          >
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
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <DialogPanel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
                  <div className='flex items-center justify-between px-4'>
                    <h2 className='text-lg font-medium text-gray-900'>
                      Filters
                    </h2>
                    <button
                      type='button'
                      className='-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500'
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className='mt-4'>
                    <Disclosure
                      as='div'
                      key={filters.type.name}
                      className='border-t border-gray-200 pb-4 pt-4'
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className='w-full px-2'>
                            <DisclosureButton className='flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500'>
                              <span className='text-sm font-medium text-gray-900'>
                                {filters.type.name}
                              </span>
                              <span className='ml-6 flex h-7 items-center'>
                                <ChevronDownIcon
                                  className={clsx(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-5 w-5 transform'
                                  )}
                                  aria-hidden='true'
                                />
                              </span>
                            </DisclosureButton>
                          </legend>
                          <DisclosurePanel className='px-4 pb-2 pt-4'>
                            <div className='space-y-6'>
                              {filters.type.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className='flex items-center'
                                >
                                  <input
                                    id={`${filters.type.id}-${optionIdx}-mobile`}
                                    name={`${filters.type.id}[]`}
                                    defaultValue={option.value}
                                    type='checkbox'
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                  />
                                  <label
                                    htmlFor={`${filters.type.id}-${optionIdx}-mobile`}
                                    className='ml-3 text-sm text-gray-500'
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </DisclosurePanel>
                        </fieldset>
                      )}
                    </Disclosure>
                  </form>

                  <form className='mt-4'>
                    <Disclosure
                      as='div'
                      key={filters.age.name}
                      className='border-t border-gray-200 pb-4 pt-4'
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className='w-full px-2'>
                            <DisclosureButton className='flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500'>
                              <span className='text-sm font-medium text-gray-900'>
                                {filters.age.name}
                              </span>
                              <span className='ml-6 flex h-7 items-center'>
                                <ChevronDownIcon
                                  className={clsx(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-5 w-5 transform'
                                  )}
                                  aria-hidden='true'
                                />
                              </span>
                            </DisclosureButton>
                          </legend>
                          <DisclosurePanel className='px-4 pb-2 pt-4'>
                            <div className='space-y-6'>
                              {filters.age.options.map((option, optionIdx) => (
                                <div
                                  key={option.label}
                                  className='flex items-center'
                                >
                                  <input
                                    id={`${filters.age.id}-${optionIdx}-mobile`}
                                    name={`${filters.age.id}[]`}
                                    type='checkbox'
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    onChange={(e) => {
                                      const sectionId = filters.age
                                        .id as keyof typeof selectedFilters;

                                      setSelectedFilters({
                                        ...selectedFilters,
                                        [sectionId]:
                                          selectedFilters[sectionId] ===
                                          JSON.parse(e.target.value)
                                            ? undefined
                                            : JSON.parse(e.target.value),
                                      });
                                    }}
                                    value={JSON.stringify(option.value)}
                                  />
                                  <label
                                    htmlFor={`${filters.age.id}-${optionIdx}-mobile`}
                                    className='ml-3 text-sm text-gray-500'
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </DisclosurePanel>
                        </fieldset>
                      )}
                    </Disclosure>
                  </form>

                  {/* Tiergröße - Implementation fraglich */}
                  {/* <form className='mt-4'>
                    <Disclosure
                      as='div'
                      key={filters.sizes.name}
                      className='border-t border-gray-200 pb-4 pt-4'
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className='w-full px-2'>
                            <DisclosureButton className='flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500'>
                              <span className='text-sm font-medium text-gray-900'>
                                {filters.sizes.name}
                              </span>
                              <span className='ml-6 flex h-7 items-center'>
                                <ChevronDownIcon
                                  className={clsx(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-5 w-5 transform'
                                  )}
                                  aria-hidden='true'
                                />
                              </span>
                            </DisclosureButton>
                          </legend>
                          <DisclosurePanel className='px-4 pb-2 pt-4'>
                            <div className='space-y-6'>
                              {filters.sizes.options.map(
                                (option, optionIdx) => (
                                  <div
                                    key={option.label}
                                    className='flex items-center'
                                  >
                                    <input
                                      id={`${filters.sizes.id}-${optionIdx}-mobile`}
                                      name={`${filters.sizes.id}[]`}
                                      defaultValue={option.label}
                                      type='checkbox'
                                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor={`${filters.sizes.id}-${optionIdx}-mobile`}
                                      className='ml-3 text-sm text-gray-500'
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                )
                              )}
                            </div>
                          </DisclosurePanel>
                        </fieldset>
                      )}
                    </Disclosure>
                  </form> */}
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <div className='border-b border-gray-200 pb-10'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
              Unsere Schützlinge
            </h1>
            <p className='mt-4 text-base text-gray-500'>
              Hier findest du unsere Hunde und Katzen, die ein neues Zuhause
              suchen.
            </p>
            <p className='text-base text-gray-500 flex gap-1 items-center'>
              Wie du einem unserer Schützlinge ein neues Zuhause geben kannst
              erfährst du hier:{' '}
              <Link
                href='/procedure'
                className='font-semibold hover:text-gray-800 flex gap-1 items-center'
              >
                Ablauf einer Adoption
                <ArrowTopRightOnSquareIcon className='h-4 w-4' />
              </Link>
            </p>
          </div>

          <div className='pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
            <aside>
              <h2 className='sr-only'>Filters</h2>

              <button
                type='button'
                className='inline-flex items-center lg:hidden'
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className='text-sm font-medium text-gray-700'>
                  Filters
                </span>
                <PlusIcon
                  className='ml-1 h-5 w-5 flex-shrink-0 text-gray-400'
                  aria-hidden='true'
                />
              </button>

              <div className='hidden lg:block'>
                <div className='space-y-10 divide-y divide-gray-200'>
                  <div>
                    <fieldset>
                      <legend className='block text-sm font-medium text-gray-900'>
                        {filters.type.name}
                      </legend>
                      <div className='space-y-3 pt-6'>
                        {filters.type.options.map((option, optionIdx) => (
                          <div key={option.label} className='flex items-center'>
                            <input
                              id={`${filters.type.id}-${optionIdx}`}
                              name={`${filters.type.id}[]`}
                              type='checkbox'
                              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                              onChange={(e) => {
                                const sectionId = filters.type
                                  .id as keyof typeof selectedFilters;

                                setSelectedFilters({
                                  ...selectedFilters,
                                  [sectionId]:
                                    selectedFilters[sectionId] ===
                                    JSON.parse(e.target.value)
                                      ? undefined
                                      : JSON.parse(e.target.value),
                                });
                              }}
                              value={JSON.stringify(option.value)}
                            />
                            <label
                              htmlFor={`${filters.type.id}-${optionIdx}`}
                              className='ml-3 text-sm text-gray-600'
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className='pt-10'>
                    <fieldset>
                      <legend className='block text-sm font-medium text-gray-900'>
                        {filters.age.name}
                      </legend>
                      <div className='space-y-3 pt-6'>
                        {filters.age.options.map((option, optionIdx) => (
                          <div key={option.label} className='flex items-center'>
                            <input
                              id={`${filters.age.id}-${optionIdx}`}
                              name={`${filters.age.id}[]`}
                              type='checkbox'
                              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                              onChange={(e) => {
                                const sectionId = filters.age
                                  .id as keyof typeof selectedFilters;

                                setSelectedFilters({
                                  ...selectedFilters,
                                  [sectionId]:
                                    selectedFilters[sectionId] ===
                                    JSON.parse(e.target.value)
                                      ? undefined
                                      : JSON.parse(e.target.value),
                                });
                              }}
                              value={JSON.stringify(option.value)}
                            />
                            <label
                              htmlFor={`${filters.age.id}-${optionIdx}`}
                              className='ml-3 text-sm text-gray-600'
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  {/* Tiergröße - Implementation fraglich */}
                  {/* <div className='pt-10'>
                    <fieldset>
                      <legend className='block text-sm font-medium text-gray-900'>
                        {filters.sizes.name}
                      </legend>
                      <div className='space-y-3 pt-6'>
                        {filters.sizes.options.map((option, optionIdx) => (
                          <div key={option.label} className='flex items-center'>
                            <input
                              id={`${filters.sizes.id}-${optionIdx}`}
                              name={`${filters.sizes.id}[]`}
                              type='checkbox'
                              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                              onChange={(e) => {
                                const sectionId = filters.sizes
                                  .id as keyof typeof selectedFilters;

                                setSelectedFilters({
                                  ...selectedFilters,
                                  [sectionId]:
                                    selectedFilters[sectionId] ===
                                    JSON.parse(e.target.value)
                                      ? undefined
                                      : JSON.parse(e.target.value),
                                });
                              }}
                              value={JSON.stringify(option.value)}
                            />
                            <label
                              htmlFor={`${filters.sizes.id}-${optionIdx}`}
                              className='ml-3 text-sm text-gray-600'
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div> */}
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <div className='mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3'>
              <div className='mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5'>
                {pets.map((pet) => (
                  <HighlightCard pet={pet} key={pet.id} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

{
  /* <div>
<div className='bg-white'>
  <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
    <div className='flex items-center justify-between space-x-4'>
      <h2 className='text-gray-700 text-3xl font-bold'>
        {de.highlightSection.title}
      </h2>
    </div>

    <div className='mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
      {pets.map((pet) => (
        <HighlightCard pet={pet} key={pet.id} />
      ))}
    </div>
  </div>
</div>
</div> */
}
