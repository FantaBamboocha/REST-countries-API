import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Wrapper from "./Wrapper";
import InfoImage from "./InfoImage";
import InfoTitle from "./InfoTitle";
import ListGroup from "./ListGroup";
import List from "./List";
import ListItem from "./ListItem";
import Meta from "./Borders/Meta";
import TagGroup from "./Borders/TagGroup";
import Tag from "./Borders/Tag";

import getNativeNames from "../../../utils/getNativeNames";
import getCurrensies from "../../../utils/getCurrensies";
import getLanguages from "../../../utils/getLanguages";
import { filterByCode } from "../../../config";

const Info = (props) => {
  const {
    name,
    capital,
    flags,
    population,
    region,
    subregion,
    currencies,
    borders,
    languages,
    tld,
  } = props;

  const [bordersCountries, setBordersCountries] = useState([]);

  const navigate = useNavigate();

  const onBorderClick = (country) => {
    navigate(`/country/${country}`, { state: `/country/${name.common}` });
  };

  useEffect(() => {
    if (borders) {
      axios
        .get(filterByCode(borders))
        .then(({ data }) =>
          setBordersCountries(data.map((countrie) => countrie.name.common))
        )
        .catch((error) => console.log(error));
    }
  }, [name]);

  const nativeNames = getNativeNames(name, languages);
  const currenciesList = getCurrensies(currencies);
  const languagesList = getLanguages(languages);

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={name} />
      <div>
        <InfoTitle>{name.common}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name: </b>
              {nativeNames}
            </ListItem>
            <ListItem>
              <b>Populatoin: </b>
              {population}
            </ListItem>
            <ListItem>
              <b>Region: </b>
              {region}
            </ListItem>
            <ListItem>
              <b>Sub Region: </b>
              {subregion}
            </ListItem>
            <ListItem>
              <b>Capital: </b>
              {capital.join(", ")}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain: </b>
              {tld}
            </ListItem>
            <ListItem>
              <b>Currensies: </b> {currenciesList}
            </ListItem>
            <ListItem>
              <b>Languages: </b> {languagesList}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries:</b>
          {borders ? (
            <TagGroup>
              {bordersCountries.map((country) => (
                <Tag key={country} onClick={() => onBorderClick(country)}>
                  {country}
                </Tag>
              ))}
            </TagGroup>
          ) : (
            <span>There is no border countries</span>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};

export default Info;
