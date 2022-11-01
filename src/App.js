import { NavBar, NavItem } from "./Navbar.styles";
import { PrimaryBtn, SecondaryBtn, AlertBtn } from "./components/Buttons";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <NavBar>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Work</NavItem>
      </NavBar>

      <HeroSection>
        <h1>TITLE</h1>
        <p>Some text</p>
        <div>
          <h3 className="nestedTitle">Nested deeper</h3>
        </div>
      </HeroSection>

      <PrimaryBtn>Click Me</PrimaryBtn>
      <PrimaryBtn>Home Page</PrimaryBtn>
      <PrimaryBtn>Contact</PrimaryBtn>
      <SecondaryBtn />
      <AlertBtn />
    </>
  );
}

export default App;


const HeroSection = styled.div`
  width: 100vw;
  height: 400px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  box-sizing: border-box;

  h1 {
    background-color: red;
  }

  div {
    padding: 10px;
    background-color: green;
  }

  .nestedTitle {
    background-color: pink;
  }
`