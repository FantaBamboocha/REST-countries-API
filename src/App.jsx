import { useState, useEffect } from "react";
import axios from "axios";

import Controls from "./components/Controls/Controls";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import List from "./components/List/List";
import Card from "./components/Card/Card";

import { ALL_COUNTRIES } from "./config";

const App = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    axios
      .get(ALL_COUNTRIES)
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map((country) => (
            <Card key={country.name.common} info={country} />
          ))}
        </List>
      </Main>
    </>
  );
};

export default App;
