import { css } from "lit-element";

export default css`
.container{
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:column;
    font-family: 'Quicksand', sans-serif;
}

.list-div{
    border-radius: 10px;
    display:flex;
    width:60%;
    heigth: auto;
    background-color: #002029;
    color:white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
    margin-top:2%;
}

.left-rectangle{
    background-color: #00607A;
    heigth: 100%;
    width: 20%;
    border-radius:10px 0px 0px 10px;
}

.data-container{
    margin-left: 5%;
    width: 70%;
}

.date-div{
    border-bottom: 2px solid  #00607A;
    text-align: center;
}


`;