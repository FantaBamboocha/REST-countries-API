import Wrapper from "./Wrapper";
import InfoImage from "./InfoImage";
import InfoTitle from "./InfoTitle";
import List from "./List";
import ListItem from "./ListItem";

import getNativeNames from "../../../utils/getNativeNames";
import getCurrensies from "../../../utils/getCurrensies";
import getLanguages from "../../../utils/getLanguages";

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

  const nativeNames = getNativeNames(name, languages);
  const currenciesList = getCurrensies(currencies);
  const languagesList = getLanguages(languages);

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={name} />
      <div>
        <InfoTitle>{name.common}</InfoTitle>
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
        <List></List>
      </div>
    </Wrapper>
  );
};

export default Info;
