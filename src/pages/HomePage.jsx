import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ALL_COUNTRIES } from "../config";

import Card from "../components/Card/Card";
import Controls from "../components/Controls/Controls";
import List from "../components/List/List";

import { countriesContext } from "../App";

const HomePage = () => {
  const { countries, setCountries } = useContext(countriesContext);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();

  console.log(countries);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    if (!countries.length) {
      axios
        .get(ALL_COUNTRIES)
        .then((response) => setCountries(response.data))
        .catch((error) => console.log(error));
    }
  }, []);

  const handleSerach = (search, regionValue) => {
    let filteredData = [...countries];

    if (regionValue) {
      filteredData = filteredData.filter(({ region }) =>
        region.toLowerCase().includes(regionValue.toLowerCase())
      );
    }

    if (search) {
      filteredData = filteredData.filter(({ name }) =>
        name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(filteredData);
  };

  const onCardClick = (name) => {
    navigate(`/country/${name}`);
  };
  return (
    <>
      <Controls onSearch={handleSerach} />
      <List>
        {filteredCountries.map((country) => {
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
