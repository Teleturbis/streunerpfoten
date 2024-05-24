'use client';

import de from '@/lang/de';
import { BlogCard, BlogCardSkeleton, Pagination } from '@/components';
import { Suspense, useEffect, useState } from 'react';
import { Blog, getBlogs } from '@/mocks/blogs';
import { usePathname, useSearchParams } from 'next/navigation';

const { blogs } = de;

export default function BlogsOverview() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const limit = 9;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Set page from URL if available
    setPage(Number(searchParams.get('page')) || 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps -- only on page mount
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchBlogs();

    // eslint-disable-next-line react-hooks/exhaustive-deps -- only on page change
  }, [page]);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs({
        page,
        limit,
      });

      setPosts(res.blogs);
      setTotal(res.total);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const changePage = (page: number) => {
    const newUrl = `${pathname}?page=${page}`;
    // Update URL without reloading the page
    window.history.replaceState(
      { ...window.history.state, as: newUrl, url: newUrl },
      '',
      newUrl
    );

    setPage(page);
  };

  return (
    <Suspense>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              {blogs.title}
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              {blogs.intro}
            </p>
          </div>
          <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {!loading
              ? posts.map((post) => <BlogCard key={post.id} post={post} />)
              : Array.from({ length: limit }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))}
          </div>

          <div className='mt-10'>
            <Pagination
              page={page}
              limit={limit}
              total={total}
              changePage={(e: number) => changePage(e)}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
