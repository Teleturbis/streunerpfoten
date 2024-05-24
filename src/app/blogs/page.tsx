import { BlogSection } from '@/components';
import { Suspense } from 'react';

export default function BlogsOverview() {
  return (
    <Suspense>
      <BlogSection />
    </Suspense>
  );
}
