import useRoot from "./hooks/useRoot";
import { Root } from "./contexts/root-context";
import { type Reducer } from "react";
import { PageIndex } from "./data/page-index";
import HomePage from "./home/home-page";

const reducer: Reducer<React.ReactElement, PageIndex> = (_, event) => {
  switch (event) {
    case PageIndex.Home:
      return <HomePage />;
    case PageIndex.Project:
      return <HomePage />;
  }
};

function Main() {
  const rootContext = useRoot(reducer, <HomePage />);

  return (
    <Root.Provider value={rootContext}>
      <main className="py-5 h-screen space-y-5 overflow-y-auto bg-amber-200">
        {rootContext.currentPage.state}
      </main>
    </Root.Provider>
  );
}

export default Main;
