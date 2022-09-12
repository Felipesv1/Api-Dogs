import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'




export const Img = styled.img`

max-width:400px;
max-height:400px;
border-radius:12px;

`


export const Container = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:100px auto;
`

export const BoxDOg = styled.div`
width:550px;
height:550px;
background:darkslateblue;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
border-radius:15px;


a{
  color:wheat;
  text-decoration:none;
}
`

export const Btn = styled.button`

padding:10px;
padding-left:15px;
padding-right:15px;
background:transparent;
color:white;
cursor: pointer;
border-radius:5px;
`

export const Title = styled.h1`

color:white;

`
export default function Dog (){

const [Dog,setDog] = useState()


const Api = 'https://dog.ceo/api/breeds/image/random'

 function getDog() {

axios.get(Api).then((response) => {
  setDog(response.data.message)
})
}

  return(
<Container>
  <BoxDOg>
<Title>Fotos de dogs para alegrar seu dia</Title>
<Link to='/'>
  home
</Link>
<Img src={Dog} alt=""/>
<Btn onClick={() => {getDog()}}>Clique aqui</Btn>
  </BoxDOg>
</Container>
  )
}