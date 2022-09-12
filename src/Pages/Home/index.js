import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.section`
width:100vw;
height:100vh;
background-color:#FFE4C4;
display: flex;
justify-content:center;
align-items:center;
`

const BoxLink = styled.div`
width:60vw;
height:40vh;
border: solid red;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
justify-content:space-evenly;
`

export default function Home() {
  return (
    <Container>
      <BoxLink>
      <h1>Home Page</h1>
      <Link to="/dogpage">
        <p>Dog Page</p>
      </Link>
      </BoxLink>      
    </Container>
  );
}
