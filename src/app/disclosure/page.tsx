'use client';

import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';

import de from '@/lang/de';
import clsx from 'clsx';
const disclosure = de.disclosure;

export default function Disclosure() {
  return (
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <div className='lg:mx-0'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          {disclosure.title}
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          {disclosure.intro}
        </p>
      </div>

      <div className='pt-16'>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              {disclosure.adoptant.headline}
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              {disclosure.adoptant.description}
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.adoptant.firstName} />
              </div>

              <div className='sm:col-span-3'>
                <TextInput label={disclosure.adoptant.lastName} />
              </div>

              <div className='sm:col-span-3'>
                <TextInput label={disclosure.adoptant.mail} />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.adoptant.phone} />
              </div>

              <div className='sm:col-span-3'>
                <TextInput label={disclosure.adoptant.address} />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.adoptant.addressAditional} />
              </div>
              <div className='sm:col-span-2'>
                <TextInput label={disclosure.adoptant.zip} />
              </div>
              <div className='sm:col-span-2'>
                <TextInput label={disclosure.adoptant.city} />
              </div>
              <div className='sm:col-span-2'>
                <TextInput label={disclosure.adoptant.region} />
              </div>

              <div className='sm:col-span-6'>
                <TextInput label={disclosure.adoptant.kids} />
              </div>

              <div className='sm:col-span-3'>
                <TextInput label={disclosure.adoptant.birthdate} />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.adoptant.nationality} />
              </div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.adoptant.car}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>

              <div className='sm:col-span-5 sm:col-start-1'>
                <TextInput label={disclosure.adoptant.disability} />
              </div>
              <div className='sm:col-span-5'>
                <TextInput label={disclosure.adoptant.addiction} />
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              {disclosure.partner.headline}
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              {disclosure.partner.description}
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.partner.firstName} />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.partner.lastName} />
              </div>

              <div className='sm:col-span-3'>
                <TextInput label={disclosure.partner.birthdate} />
              </div>

              <div className='sm:col-span-3 sm:col-start-1'>
                <RadioSelect
                  label={disclosure.adoptant.car}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>

              <div className='sm:col-span-5 sm:col-start-1'>
                <TextInput label={disclosure.partner.disability} />
              </div>
              <div className='sm:col-span-5'>
                <TextInput label={disclosure.partner.addiction} />
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              {disclosure.job.headline}
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              {disclosure.job.description}
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.job.job} />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.job.jobPartner} />
              </div>

              <div className='sm:col-span-3'>
                <TextInput label={disclosure.job.workingHours} />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.job.workingHoursPartner} />
              </div>

              <div className='sm:col-span-5'>
                <TextInput label={disclosure.job.petAloneTime} />
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              {disclosure.livingSituation.headline}
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              {disclosure.livingSituation.description}
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.livingSituation.livingSituation}
                  memoryOptions={[
                    { name: 'Haus', inStock: true },
                    { name: 'Eigenheim', inStock: true },
                    { name: 'Mietwohnung', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.livingSituation.size} />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.livingSituation.livingTime} />
              </div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.livingSituation.plannedMovement}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.livingSituation.region}
                  memoryOptions={[
                    { name: 'Ländlich', inStock: true },
                    { name: 'Stadt', inStock: true },
                    { name: 'Innenstadt', inStock: true },
                  ]}
                />
              </div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.livingSituation.landlordAllowance}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>

              <div className='sm:col-span-6'>File Upload</div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.livingSituation.garden}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.livingSituation.gardenSize} />
              </div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.livingSituation.fence}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.livingSituation.fenceHeight} />
              </div>

              <div className='sm:col-span-5'>
                <TextInput label={disclosure.livingSituation.nextGreen} />
              </div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.livingSituation.balcony}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.livingSituation.balconySafety}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>

              <div className='sm:col-span-6'>
                <TextInput label={disclosure.livingSituation.otherPets} />
              </div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.livingSituation.allergies}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              {disclosure.petInformation.headline}
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              {disclosure.petInformation.description}
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-6'>
                <TextInput label={disclosure.petInformation.petReturned} />
              </div>

              <div className='sm:col-span-3'>
                <TextInput label={disclosure.petInformation.careGiver} />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.petInformation.travelPlans} />
              </div>
              <div className='sm:col-span-3'>
                <TextInput label={disclosure.petInformation.prevSaved} />
              </div>

              <div className='sm:col-span-6'>
                <TextArea label={disclosure.petInformation.petCharacterNot} />
              </div>

              <div className='sm:col-span-6'>
                <TextArea label={disclosure.petInformation.petCharacterNot} />
              </div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.petInformation.dogSchool}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.petInformation.holidayPetArrival}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <p className='text-xs text-gray-900 font-medium leading-6'>
                  {disclosure.petInformation.newOrientation}
                </p>
                <RadioSelect
                  label=''
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <p className='text-xs text-gray-900 font-medium leading-6'>
                  {disclosure.petInformation.integration}
                </p>
                <RadioSelect
                  label=''
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <p className='text-xs text-gray-900 font-medium leading-6'>
                  {disclosure.petInformation.petTraining}
                </p>
                <RadioSelect
                  label=''
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>

              <div className='sm:col-span-3 sm:col-start-1'>
                <TextInput label={disclosure.petInformation.motivation} />
              </div>

              <div className='sm:col-span-6'>
                <TextArea label={disclosure.petInformation.imaginedLife} />
              </div>
              <div className='sm:col-span-6'>
                <TextArea label={disclosure.petInformation.petRules} />
              </div>
              <div className='sm:col-span-6'>
                <TextArea label={disclosure.petInformation.returnMotivation} />
              </div>

              <div className='sm:col-span-3'>
                <p className='text-xs text-gray-900 font-medium leading-6'>
                  {disclosure.petInformation.extraBudget}
                </p>
                <RadioSelect
                  label=''
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <p className='text-xs text-gray-900 font-medium leading-6'>
                  {disclosure.petInformation.budget}
                </p>
                <RadioSelect
                  label=''
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.petInformation.delivery}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              {disclosure.general.headline}
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              {disclosure.general.description}
            </p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-6'>
                <TextInput label={disclosure.general.prevContact} />
              </div>

              <div className='sm:col-span-3'>
                <TextInput label={disclosure.general.prevControl} />
              </div>

              <div className='sm:col-span-3'>
                <RadioSelect
                  label={disclosure.general.otherClub}
                  memoryOptions={[
                    { name: 'Ja', inStock: true },
                    { name: 'Nein', inStock: true },
                  ]}
                />
              </div>

              <div className='sm:col-span-6'>
                <TextArea label={disclosure.general.review} />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-x-6 gap-y-8'>
          <div className='sm:col-span-6'>
            <CheckBox
              title={disclosure.lastCheck.controlAgreementTitle}
              description={disclosure.lastCheck.controlAgreement}
            />
          </div>
          <div className='sm:col-span-6'>
            <CheckBox
              title={disclosure.lastCheck.dataProcessTitle}
              description={disclosure.lastCheck.dataProcess}
            />
          </div>
          <div className='sm:col-span-6'>
            <CheckBox
              title={disclosure.lastCheck.readRulesTitle}
              description={disclosure.lastCheck.readRules}
            />
          </div>

          <div className='flex justify-end gap-8'>
            <button
              type='button'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput({ label }: any) {
  return (
    <div className='w-full relative'>
      <label
        htmlFor='postal-code'
        className='block text-xs font-medium leading-6 text-gray-900 absolute -top-3 left-2 bg-white px-1.5'
      >
        {label}
      </label>
      <div>
        <input
          type='text'
          name='postal-code'
          id='postal-code'
          autoComplete='postal-code'
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
    </div>
  );
}

function RadioSelect({
  memoryOptions,
  label,
}: {
  memoryOptions: {
    name: string;
    inStock: boolean;
  }[];
  label: string;
}) {
  const [mem, setMem] = useState({ name: '', inStock: true });

  return (
    <div className='relative'>
      <label
        htmlFor=''
        className='block text-xs font-medium leading-6 text-gray-900 absolute -top-3 left-2 bg-white px-1.5 z-30 rounded-full'
      >
        {label}
      </label>
      <RadioGroup
        value={mem}
        onChange={setMem}
        className='flex justify-between gap-4 items-center w-full'
      >
        {memoryOptions.map((option) => (
          <Radio
            key={option.name}
            value={option}
            className={({ focus, checked }) =>
              clsx(
                'cursor-pointer focus:outline-none w-fit',
                focus ? 'ring-2 ring-indigo-600 ring-offset-2' : '',
                checked
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                  : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold sm:flex-1'
              )
            }
            disabled={!option.inStock}
          >
            {option.name}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}

function CheckBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <fieldset>
      <div className='relative flex items-start'>
        <div className='flex h-6 items-center'>
          <input
            id='offers'
            aria-describedby='offers-description'
            name='offers'
            type='checkbox'
            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
          />
        </div>
        <div className='ml-3 text-sm leading-6'>
          <label htmlFor='offers' className='font-medium text-gray-900'>
            {title}
          </label>
          <p id='offers-description' className='text-gray-500 text-xs'>
            {description}
          </p>
        </div>
      </div>
    </fieldset>
  );
}

function TextArea({ label }: { label: string }) {
  return (
    <div className='relative'>
      <label
        htmlFor='comment'
        className='block text-xs font-medium leading-6 text-gray-900 absolute -top-3 left-2 bg-white px-1.5 z-30 rounded-full'
      >
        {label}
      </label>
      <div className='mt-2'>
        <textarea
          rows={4}
          name='comment'
          id='comment'
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          defaultValue={''}
        />
      </div>
    </div>
  );
}
