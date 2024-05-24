'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import PaginationButton from './PaginationButton';

export default function Pagination({
  page = 1,
  limit = 10,
  total = 10,
  changePage,
}: {
  page: number;
  limit: number;
  total: number;
  changePage: (e: number) => void;
}) {
  return (
    <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <div className='flex flex-1 justify-between sm:hidden'>
        <button
          className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={() => changePage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
        >
          <span className='sr-only'>Previous</span>
          <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
        </button>
        <button
          onClick={() =>
            changePage(
              page < parseFloat((total / limit).toFixed(0)) ? page + 1 : page
            )
          }
          disabled={page === parseFloat((total / limit).toFixed(0))}
          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <span className='sr-only'>Next</span>
          <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </div>

      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div className='hidden md:inline-block'>
          <p className='text-sm text-gray-700'>
            Zeige Beitrag{' '}
            <span className='font-medium'>{(page - 1) * limit + 1}</span> bis{' '}
            <span className='font-medium'>{page * limit}</span> von{' '}
            <span className='font-medium'>{total}</span> Beiträgen
          </p>
        </div>
        <div>
          <nav
            className='isolate inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'
          >
            <button
              onClick={() => changePage(page > 1 ? page - 1 : 1)}
              disabled={page === 1}
              className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </button>

            {Array.from({ length: 3 }, (_, i) => (
              <PaginationButton
                key={i}
                currentPage={page}
                value={i + 1}
                maxPage={parseFloat((total / limit).toFixed(0))}
                changePage={(page) => changePage(page)}
              />
            ))}

            <span className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>
              ...
            </span>

            {Array.from({ length: 3 }, (_, i) => (
              <PaginationButton
                key={i}
                currentPage={page}
                value={i + 8}
                maxPage={parseFloat((total / limit).toFixed(0))}
                changePage={(page) => changePage(page)}
              />
            ))}

            <button
              onClick={() =>
                page < parseFloat((total / limit).toFixed(0))
                  ? changePage(page + 1)
                  : changePage(page)
              }
              disabled={page === parseFloat((total / limit).toFixed(0))}
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
