import { renderWithChakraMemoryProvider, screen } from 'test/test-utils';

import { RouteLink } from '../RouteLink';

describe('RouteLink component', () => {
  const ROUTE = '/search';
  const TEXT = 'Back';
  it('should display text passed as child', () => {
    renderWithChakraMemoryProvider(<RouteLink to={ROUTE}>{TEXT}</RouteLink>);
    const link = screen.getByText(TEXT);
    expect(link).toBeInTheDocument();
  });
});
