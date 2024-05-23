import { PetType } from '@/components/cards/HighlightCard';

const dogs: PetType[] = [
  {
    id: '1',
    name: 'Brandy',
    info: 'Weiblich - 4 Monate',
    imageSrc: '/animals/1.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: '2',
    name: 'Shadow',
    info: 'Männlich - 4 Monate',
    imageSrc: '/animals/4.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: '3',
    name: 'Louis',
    info: 'Männlich - 12 Monate',
    imageSrc: '/animals/3.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
];

const cats: PetType[] = [
  {
    id: '4',
    name: 'Flory',
    info: 'Weiblich - 3 Jahre',
    imageSrc: '/animals/5.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: '5',
    name: 'Suri',
    info: 'Weiblich - 3 Jahre',
    imageSrc: '/animals/2.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
];

export async function getPets() {
  const pets = [...dogs, ...cats];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pets);
    }, 1000);
  });
}

export async function getPetById(id: string) {
  const pets = [...dogs, ...cats];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pets.find((pet) => pet.id === id));
    }, 1000);
  });
}

export async function getHighlightedPets(): Promise<PetType[]> {
  const pets = [...dogs, ...cats];
  return new Promise((resolve) => {
    const shuffledPets = pets.sort(() => 0.5 - Math.random());

    setTimeout(() => {
      resolve(shuffledPets.slice(0, 4));
    }, 1000);
  });
}
