import React from 'react';
import HighlightCard, { PetType } from '../cards/HighlightCard';

import de from '@/lang/de';
import { getHighlightedPets } from '@/mocks/pets';
const { highlightSection } = de;

const fetchData = async (): Promise<PetType[]> => {
  const response = await getHighlightedPets();
  return response;
};

export default async function HighlightSection() {
  const pets: PetType[] = await fetchData();

  return (
    <div>
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <div className='flex items-center justify-between space-x-4'>
            <h2 className='text-lg font-medium text-gray-900'>
              {highlightSection.title}
            </h2>
            <a
              href='/pets'
              className='whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500'
            >
              {highlightSection.showAll}
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </div>

          <div className='mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
            {pets.map((pet) => (
              <HighlightCard pet={pet} key={pet.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
