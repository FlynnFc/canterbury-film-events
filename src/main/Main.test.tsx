import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have 3 menu items', () => {
      render(<Main meta={null}>{null}</Main>);

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
    });

    it('Should have a title and description', () => {
      render(<Main meta={null}>{null}</Main>);

      const eventsLink = screen.getByRole('link');

      /*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */
      expect(eventsLink).toHaveAttribute('href');
    });
  });
});
