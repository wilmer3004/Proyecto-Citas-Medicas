import { css } from "lit-element";

export default css`
*{
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
}
.contenedor{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20vh;
}
img{
    height: 250px;
}
.contenedor-principal{
    display: flex;
    min-width: 60vh;
    height: auto;
    flex-direction: column;
    border: .6vh solid #B2FFF6;
    border-radius: 3vh;    
    padding: 2vh;
    gap: 5px;
}
.contenedor-titulo{
    border-bottom: 3px solid #B2FFF6;
    padding-bottom: 12px;
    color: #28464B;
    text-align: center;
}
.contenedor-subtitulo{
    margin-top: 2vh;
    color: #326771;
    text-align: center;
    background-color: #B2FFF6;
    border-radius: 5px;
    padding: 1vh;
}
.contenedor-cuerpo{
    margin-top: 12px;
    margin-bottom: 12px;
    text-align: start;
    font-weight: bold;
    font-family: monospace;
    letter-spacing: 1px;    
}
`;