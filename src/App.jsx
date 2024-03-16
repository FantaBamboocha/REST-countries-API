import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Router from "./router/Router";
const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Router />
      </Main>
    </>
  );
};

export default App;
