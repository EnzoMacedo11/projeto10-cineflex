import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Details(props) {
  const place = props.ses.id
  console.log("teste do props", place)
  
  return (
    <ClientData>
        <div>
            <h1>Nome do comprador:</h1>
            <input className="ClientName" placeholder="Digite seu nome..."/>
        </div>
        <div>
            <h1>CPF do comprador:</h1>
            <input className="ClientCpf" placeholder="Digite seu CPF..."/>
        </div>
        <Link to={`/sucess/${place}`}><Finish>Reservar Assento(s)</Finish></Link>
    </ClientData>
    
  );
}

const ClientData = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center; 
  margin-top:34px;
  div{
    margin-top:7px;
    display:flex;
    flex-direction:column;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
  }
  input {
    margin-top:3px;
    width: 327px;
    height: 51px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }
`;

const Finish = styled.button`
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
display: flex;
align-items: center;
justify-content:center;
letter-spacing: 0.04em;


color: #FFFFFF;
`
