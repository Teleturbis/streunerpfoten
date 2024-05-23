'use client';

import Image from 'next/image';

import de from '@/lang/de';
const { highlightCard } = de;

export type HighlightCardProps = {
  pet: PetType;
};

export type PetType = {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  info: string;
};

export default function HighlightCard({ pet }: HighlightCardProps) {
  return (
    <div className='group relative'>
      <div className='aspect-h-3 aspect-w-4 overflow-hidden rounded-lg relative'>
        <Image
          height={650}
          width={650}
          src={pet.imageSrc}
          alt={pet.imageAlt}
          className='object-center object-contain w-full h-auto'
        />
        <div
          className='flex items-end p-4 opacity-0 group-hover:opacity-100 absolute bottom-0 w-full'
          aria-hidden='true'
        >
          <div className='w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter'>
            {highlightCard.cta}
          </div>
        </div>
      </div>

      <div className='mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900'>
        <h3>
          <a href={`/pets/${pet.id}`}>
            <span aria-hidden='true' className='absolute inset-0' />
            {pet.name}
          </a>
        </h3>
      </div>
      <p className='mt-1 text-sm text-gray-500'>{pet.info}</p>
    </div>
  );
}
