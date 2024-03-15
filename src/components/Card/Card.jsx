import Wrapper from "./Wrapper";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardLits from "./CardList";
import CardListItem from "./CardListItem";

const Card = ({ img, name, info = [] }) => {
  return (
    <Wrapper>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle> {name} </CardTitle>
        <CardLits>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}</b>: {el.value}
            </CardListItem>
          ))}
        </CardLits>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
