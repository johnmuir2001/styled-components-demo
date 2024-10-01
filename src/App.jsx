import './App.css'
import styled from "styled-components"
import { MainButton } from './Buttons.styles'

function App() {

  return (
    <>
      <NavBar>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </NavBar>

      <HeroSection>
        <h1>TITLE</h1>
        <p>Some Text</p>
        <div>
          <h3 className="subHeading">Nested Element</h3>
        </div>
      </HeroSection>

      {/* The button component is imported from the Buttons.styles file and passes a color under the props object */}
      {/* The $ means it is a custom attribute and one that is not built in to HTML */}
      <MainButton $bgCol="green">Save</MainButton>
      <MainButton $bgCol="orange">Edit</MainButton>
      <MainButton $bgCol="red">Delete</MainButton>
    </>
  )
}

export default App

const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: navy;
    padding: 20px;
    // this is nesting where a child element can be targeted and CSS applied to the child under the parent
    a {
      font-size: 16px;
      margin: 0 16px;
      color: white;
      cursor: pointer;
      padding: 10px 15px;
      // the & symbol means apply this to the parent element, in this case target the a tags and give them a hover
      &:hover {
          background-color: blue;
      }
    }
`

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