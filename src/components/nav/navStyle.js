import { css } from "lit-element";

export default css`
*{
    margin: 0;
    padding: 0;
}
.contenedor-principal{
    display: flex;
    background-color: #002029;
    max-height: 10vh;
    min-width: 100vh;
    padding: 10px;
    justify-content: center;
    align-items: center;
}
ul > li > a{
    text-decoration: none;
    color: white;
}
li{
    display: inline;
    padding: 100px;
    border-radius: 5px;
}
li :hover{
    background-color: #B2FFF6;
    color: #002029;
}
`