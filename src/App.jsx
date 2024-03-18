import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Router from "./router/Router";
const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main countries={countries} setCountries={setCountries}>
        <Router countries={countries} setCountries={setCountries} />
      </Main>
    </>
  );
};

export default App;
