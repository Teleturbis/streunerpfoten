import { PetType } from '@/components/cards/HighlightCard';

const dogs: PetType[] = [
  {
    id: '1mnb',
    name: 'Brandy',
    info: 'Weiblich - 4 Monate',
    age: 4,
    type: 'dog',
    imageSrc: '/animals/1.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: '2trz',
    name: 'Shadow',
    info: 'Männlich - 4 Monate',
    age: 4,
    type: 'dog',
    imageSrc: '/animals/4.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: '3kuzt',
    name: 'Louis',
    info: 'Männlich - 12 Monate',
    age: 12,
    type: 'dog',
    imageSrc: '/animals/3.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
];

const cats: PetType[] = [
  {
    id: 'gra4',
    name: 'Flory',
    info: 'Weiblich - 3 Jahre',
    age: 36,
    type: 'cat',
    imageSrc: '/animals/5.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: 'gsd5',
    name: 'Suri',
    info: 'Weiblich - 3 Jahre',
    age: 36,
    type: 'cat',
    imageSrc: '/animals/2.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: '4df',
    name: 'Flory',
    info: 'Weiblich - 3 Jahre',
    age: 36,
    type: 'cat',
    imageSrc: '/animals/5.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: '5d',
    name: 'Suri',
    info: 'Weiblich - 3 Jahre',
    age: 36,
    type: 'cat',
    imageSrc: '/animals/2.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: '4a',
    name: 'Flory',
    info: 'Weiblich - 3 Jahre',
    age: 36,
    type: 'cat',
    imageSrc: '/animals/5.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
  {
    id: '5sf',
    name: 'Suri',
    info: 'Weiblich - 3 Jahre',
    age: 36,
    type: 'cat',
    imageSrc: '/animals/2.webp',
    imageAlt:
      'Ein kleiner Hund, der auf einem Sofa sitzt und in die Kamera schaut.',
  },
];

export async function getPets(filter?: {
  type?: string;
  age?: [number | null, number | null];
}): Promise<PetType[]> {
  const pets = [...dogs, ...cats];

  if (filter) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          pets.filter((pet) => {
            if (filter.type && pet.type !== filter.type) {
              return false;
            }

            if (filter.age?.length === 2) {
              if (filter.age[0] === null && filter.age[1] === null) {
                return true;
              } else if (filter.age[0] === null && filter.age[1] !== null) {
                return filter.age[1] >= pet.age;
              } else if (filter.age[0] !== null && filter.age[1] === null) {
                return filter.age[0] <= pet.age;
              } else if (filter.age[0] !== null && filter.age[1] !== null) {
                return filter.age[0] <= pet.age && filter.age[1] >= pet.age;
              }
            }

            return true;
          })
        );
      }, 1000);
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pets);
    }, 1000);
  });
}

export async function getPetById(id: string): Promise<PetType | undefined> {
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
