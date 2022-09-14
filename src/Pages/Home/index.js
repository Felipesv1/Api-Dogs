import React from "react";
import { Link } from "react-router-dom";
import * as S from './Style.js'

export default function Home() {
  return (
    <S.Container>
      <S.BoxLink>
      <h1>Home Page</h1>
      <Link to="/dogpage">
        <p>Dog Page</p>
      </Link>
      </S.BoxLink>      
    </S.Container>
  );
}
