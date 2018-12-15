import { withStateHandlers } from 'recompose';

export const withCollapseState = withStateHandlers(
  {
    isCollapseOpen: false
  },
  {
    toggleCollapse: ({ isCollapseOpen }) => () => ({
      isCollapseOpen: !isCollapseOpen
    })
  }
);
