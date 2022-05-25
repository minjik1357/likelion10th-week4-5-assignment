import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      text-align: center;
    }
    body{
      font-family: 'Noto Sans KR', sans-serif;
      height: 100vh;
      text-align: center;
      font-size: 20px;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://c1.wallpaperflare.com/preview/275/649/313/wood-wooden-table-desktop.jpg);
      background-size: cover;
    };
    button{
      cursor: pointer;
      outline: red;
      border-radius: 50px;
      line-height:30px;
      width:40px;
    };

    h1 {
      color: yellow;
      -webkit-text-stroke: 2px black;
    }

    .todo-item{
      margin-left: 100px;
      margin-right: 100px;
      margin-top: 20px;
      height: 50px;
      border: 3px solid yellow;
      line-height: 50px;
      color: white;
      font-size: 25px;
      };
    input[type=text] {
      color: red;
      border-radius: 50px;
      width: 300px;
      height: 30px;
      font-size: 18px;
      margin-top: 100px;
    }
`;

export default GlobalStyle;