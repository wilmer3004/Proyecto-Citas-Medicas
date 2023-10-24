import { css } from "lit-element";

export default css`

.container{
    align-items:center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-family: 'Quicksand', sans-serif;
}

.container-form{
    width: 70%;
    background-color:#FAFAFA;
    padding: 2%;
    border: 2px solid lightgray;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin-top: 10vh;
}

.header-form{
    border-bottom: 3px solid lightgray;  
    color: #326771;
}

.header-user-data, .header-appointmet-data{
    background-color: #d0faf5;
    padding:.1vh 2vh;
    border-radius: 5px;
    margin-top: 3vh;
    color: #326771;
}

.user-data-content, .appointment-data-content{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    width:100%;
}

.user-data, .appointment-data{
    width: 45%;
}

.form-user{
    display:flex;   
    gap: 10%;
}

label{
    font-size:20px;
    font-weight: bold;
    margin-top:2vh;
    margin-bottom: .3vh;
}

input, select{
    background-color:#e9e9e9; 
    border: none;       
    padding: 1.5%;
    border-radius:5px 5px 0px 0px;    
    border-bottom: 2px solid lightblue;
    width:70%;
    font-family: 'Quicksand', sans-serif;

}

button{
background-color: #28464b;
color:white;
padding: 2%;
border: none;
border-radius:10px;
font-family: 'Quicksand', sans-serif;
margin-top:5%;
}

button:hover{
    background-color: #326771;
    cursor: pointer;
}

.mensaje {
    color: green; /* o el color que prefieras */
    font-size: 18px;
    font-weight: bold;
    margin-top:2%;
}

`;