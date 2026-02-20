import type { Reducer } from "react";

const PageIndex = {
  Home: 0,
  Project: 1,
} as const;

type PageIndex = (typeof PageIndex)[keyof typeof PageIndex];

export { PageIndex };

export const reducer: Reducer<React.ReactElement, PageIndex> = (
  page,
  event,
) => {
  switch (event) {
    case PageIndex.Home:
    case PageIndex.Project:
      break;
  }

  return page;
};
