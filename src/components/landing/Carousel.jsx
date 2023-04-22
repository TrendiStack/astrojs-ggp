import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./Video'));

const Carousel = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default Carousel;
