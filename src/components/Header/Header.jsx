import { useState, useEffect } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

import HeaderEl from "./HeaderEl";
import { Container } from "../Container/Container";
import Wrapper from "./Wrapper";
import Title from "./Title";
import ThemeSwitcher from "./ThemeSwitcher";
const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where in the world?</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonSharp />
            ) : (
              <IoSunnySharp style={{ fontSize: "1rem" }} />
            )}
            <span> {`${theme === "light" ? "dark" : "light"} theme`}</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
