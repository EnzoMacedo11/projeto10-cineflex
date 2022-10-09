import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Confirmation(props){
    const data = props.date
    console.log("testando o props novo", data)
    const movie = data.movie
    console.log("testando o movie", movie)
    const day = data.day
    
   
    
    return(
        <>
        <Container>
            {/* <div>
                <h1>{"Filme e sessão"}</h1>
                <h2>{movie.title}</h2>
                <h2>{day.date}  {data.name}</h2>
            </div>
            <div>
                <h1>{"Ingressos"}</h1>
                <h2>{"Assento 11"}</h2>
                <h2>{"Assento 12"}</h2>
            </div>
            <div>
                <h1>{"Comprador"}</h1>
                <h2>{"Nome:"} {"Nome do comprador"}</h2>
                <h2>{"CPF:"}  {"CPF do comprador"}</h2>
            </div> */}
        </Container>
         <Link to={"/"}><Finish><button>Voltar pra Home</button></Finish></Link>
        </>
    )
}

const Container = styled.div`
display:flex;
flex-direction:column;

div{
    margin-left:29px;
    margin-top:35px;
    display:flex;
    flex-direction:column;
}

h1{
    margin-bottom:8px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
}
h2{
    
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
}

`

const Finish = styled.div`
display: flex;
align-items: center;
justify-content:center;
button{
margin-top:57px;
margin-bottom:53px;
width: 225px;
height: 42px;

background: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;


color: #FFFFFF;}

`
