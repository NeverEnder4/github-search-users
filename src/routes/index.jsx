import { useRoutes } from 'react-router-dom';

import { Home, Results } from '@/features/search';

export function AppRoutes() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/search', element: <Results /> },
  ];

  const element = useRoutes([...routes]);

  return <>{element}</>;
}
