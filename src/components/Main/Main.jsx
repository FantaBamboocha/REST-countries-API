import Wrapper from "./Wrapper";
import Container from "../Container/Container";

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
