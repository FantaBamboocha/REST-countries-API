const Card = ({ info }) => {
  const { name, capital, flags, population, region } = info;
  return <div>{name.common}</div>;
};

export default Card;
