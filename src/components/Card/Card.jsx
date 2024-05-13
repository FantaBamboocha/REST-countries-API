import { useInView } from "react-intersection-observer";

import Wrapper from "./Wrapper";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardLits from "./CardList";
import CardListItem from "./CardListItem";
import CardImageSkeleton from "./CardImageSkeleton";

const Card = ({ img, name, info = [], onCardClick }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Wrapper ref={ref} onClick={() => onCardClick(name)}>
      {inView ? <CardImage src={img} alt={name} /> : <CardImageSkeleton />}
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
