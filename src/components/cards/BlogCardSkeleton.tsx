import React from 'react';

export default function BlogCardSkeleton() {
  return (
    <article className='flex max-w-xl flex-col items-start'>
      <div className='flex items-center gap-x-4 w-full'>
        <div className='bg-gray-300 h-3 w-1/4 rounded-full' />
        <div className='bg-gray-300 h-3 w-1/4 rounded-full' />
      </div>
      <div className='group relative w-full'>
        <div className='mt-8 h-4 w-2/3 bg-gray-300 rounded-full' />
        <div className='mt-7 line-clamp-3 h-3.5 w-full bg-gray-300 rounded-full' />
        <div className='mt-1 line-clamp-3 h-3.5 w-full bg-gray-300 rounded-full' />
        <div className='mt-1 line-clamp-3 h-3.5 w-full bg-gray-300 rounded-full' />
        <div className='mt-1 line-clamp-3 h-3.5 w-full bg-gray-300 rounded-full' />
      </div>

      {/* Autor - benötigt? */}
      {/* <div className='relative mt-8 flex items-center gap-x-4'>
    <img
      src={post.author.imageUrl}
      alt=''
      className='h-10 w-10 rounded-full bg-gray-50'
    />
    <div className='text-sm leading-6'>
      <p className='font-semibold text-gray-900'>
        <a href={post.author.href}>
          <span className='absolute inset-0' />
          {post.author.name}
        </a>
      </p>
      <p className='text-gray-600'>{post.author.role}</p>
    </div>
  </div> */}
    </article>
  );
}
