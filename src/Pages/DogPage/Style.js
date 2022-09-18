import styled from 'styled-components'


export const Img = styled.img`

max-width:400px;
max-height:400px;
border-radius:12px;


@media (max-width:800px) {
    max-width:200px;
    text-align:center
  }

`


export const Container = styled.section`
max-width:500px;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:180px auto;
background:darkslateblue;
  border-radius:15px;

  @media (max-width:800px) {
    max-width:100%;
    height:100%;
    text-align:center
  }

`

export const BoxDOg = styled.div`
width:100%;
height:500px;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;



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