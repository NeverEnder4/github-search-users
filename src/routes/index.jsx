import { useRoutes } from 'react-router-dom';

import { Home, Results } from '@/pages';

export function AppRoutes() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/search', element: <Results /> },
  ];

  const element = useRoutes([...routes]);

  return { element };
}
