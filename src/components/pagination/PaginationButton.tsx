'use client';

import clsx from 'clsx';

export default function PaginationButton({
  value,
  changePage,
  currentPage,
  maxPage,
}: {
  value: number;
  currentPage: number;
  maxPage: number;
  changePage: (page: number) => void;
}) {
  const getPage = (button: number) => {
    if (maxPage > 5 && currentPage > maxPage - 5) {
      switch (button) {
        default:
        case 1:
          return maxPage - 5;

        case 2:
          return maxPage - 4;

        case 3:
          return maxPage - 3;

        case 8:
          return maxPage - 2;

        case 9:
          return maxPage - 1;

        case 10:
          return maxPage;
      }
    }

    switch (button) {
      default:
      case 1:
        return currentPage - (currentPage > 1 ? 1 : 0);

      case 2:
        return currentPage + (currentPage > 1 ? 0 : 1);

      case 3:
        return currentPage + (currentPage > 1 ? 1 : 2);

      case 8:
        return currentPage > 2 ? currentPage + button - 2 : button - 1;

      case 9:
        return currentPage > 2 ? currentPage + button - 2 : button - 1;

      case 10:
        return currentPage > 2 ? currentPage + button - 2 : button - 1;
    }
  };

  const handleChangePage = () => {
    const tempPage = getPage(value);
    changePage(tempPage);
  };

  return (
    <button
      onClick={handleChangePage}
      className={clsx(
        'relative inline-flex justify-center items-center px-4 py-2 text-sm font-semibold focus:z-20 min-w-[3.75rem]',
        {
          'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0':
            currentPage !== getPage(value),
          'z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600':
            currentPage === getPage(value),
        }
      )}
    >
      {getPage(value)}
    </button>
  );
}
