import { createContext, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Router from "./router/Router";

export const countriesContext = createContext();
const App = () => {
  const [countries, setCountries] = useState([]);
  return (
    <countriesContext.Provider value={{ countries, setCountries }}>
      <Header />
      <Main>
        <Router />
      </Main>
    </countriesContext.Provider>
  );
};

export default App;
