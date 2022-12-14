import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import Confirmation from "./Confirmation";
import { useLocation } from "react-router-dom";


export default function Sucess() {
    const [date,setDate] =useState([])
    const { roomId } = useParams();
   // console.log("date", date)
    const location = useLocation()
  //console.log("location",location)
  
    useEffect(() => {
      const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${roomId}/seats`;
      const promisse = axios.get(url);
      promisse.then((res) => {
        console.log("teste",res.data);
        setDate(res.data);
        
      });
      promisse.catch((erro) => {
        console.log(erro.response.data);
      });
    }, []);
  
     if (date.length === 0) {
       return <Loading>Carregando...</Loading>;
     }
  return (
    <Container>
      <Title>
        <h1>Pedido feito com sucesso! </h1>
      </Title>
      <Confirmation date={date} location={location}/>
    
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 110px;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: #247A6B;
  }
`;
const Loading = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;

  color: #293845;
`;
