import { useRoutes } from 'react-router-dom';

import { Error, NotFound } from '@/features/error';
import { Home, Results } from '@/features/search';

export function AppRoutes() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/search', element: <Results /> },
    { path: '*', element: <NotFound notFound /> },
  ];

  // Error route only in development for testing ErrorBoundary fallback
  if (process.env.NODE_ENV === 'development') routes.push({ path: '/error', element: <Error /> });

  const element = useRoutes([...routes]);

  return <>{element}</>;
}
