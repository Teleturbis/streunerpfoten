'use client';

import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  withHoverEffect?: boolean;
};

export default function Logo({ withHoverEffect }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const getPath = () => {
    const mouseOverPath = '/paw_solid.png';
    const mouseOutPath = '/paw_outline.png';

    if (withHoverEffect && mouseIsOver) {
      return mouseOverPath;
    }

    return mouseOutPath;
  };

  return (
    <>
      <Image
        height={32}
        width={32}
        className='h-7 w-auto -rotate-12'
        src={getPath()}
        onMouseEnter={() => setMouseIsOver(true)}
        onMouseLeave={() => setMouseIsOver(false)}
        alt=''
      />
    </>
  );
}
