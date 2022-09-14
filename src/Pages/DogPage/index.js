import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import * as S from './Style.js'


export default function Dog (){

const [Dog,setDog] = useState()


const Api = 'https://dog.ceo/api/breeds/image/random'

 function getDog() {

axios.get(Api).then((response) => {
  setDog(response.data.message)
})
}

  return(
<S.Container>
  <S.BoxDOg>
<S.Title>Fotos de dogs para alegrar seu dia</S.Title>
<Link to='/'>
  home
</Link>
<S.Img src={Dog} alt=""/>
<S.Btn onClick={() => {getDog()}}>Clique aqui</S.Btn>
  </S.BoxDOg>
</S.Container>
  )
}