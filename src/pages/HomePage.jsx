import { useState, useEffect } from "react";
import axios from "axios";

import { ALL_COUNTRIES } from "../config";

import Card from "../components/Card/Card";
import Controls from "../components/Controls/Controls";
import List from "../components/List/List";
import { useNavigate } from "react-router-dom";

const HomePage = ({ countries, setCountries }) => {
  useEffect(() => {
    if (!countries.length) {
      axios
        .get(ALL_COUNTRIES)
        .then((response) => setCountries(response.data))
        .catch((error) => console.log(error));
    }
  }, []);

  const navigate = useNavigate();

  const onCardClick = (name) => {
    navigate(`/country/${name}`);
  };
  return (
    <>
      <Controls />
      <List>
        {countries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name.common,
            info: [
              {
                title: "Population",
                value: country.population.toLocaleString(),
              },
              { title: "Region", value: country.region },
              { title: "Capital", value: country.capital },
            ],
          };
          return (
            <Card
              key={country.name.common}
              {...countryInfo}
              onCardClick={onCardClick}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
