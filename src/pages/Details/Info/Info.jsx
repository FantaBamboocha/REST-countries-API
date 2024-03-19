import Wrapper from "./Wrapper";
import InfoImage from "./InfoImage";
import InfoTitle from "./InfoTitle";
import List from "./List";
import ListItem from "./ListItem";

import getNativeNames from "../../../utils/getNativeNames";

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
  } = props;

  const nativeNames = getNativeNames(name);

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
        </List>
        <List></List>
      </div>
    </Wrapper>
  );
};

export default Info;
