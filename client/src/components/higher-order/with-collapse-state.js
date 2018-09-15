// @flow
import { withStateHandlers } from 'recompose';
import type { HOC } from 'recompose';

export type CollapseState = {
  isCollapseOpen: boolean,
  toggleCollapse: () => void
};

export const withCollapseState: HOC<CollapseState, *> = withStateHandlers(
  {
    isCollapseOpen: false
  },
  {
    toggleCollapse: ({ isCollapseOpen }) => () => ({
      isCollapseOpen: !isCollapseOpen
    })
  }
);
