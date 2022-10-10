import { useEffect, useState } from "react";
import styled from "styled-components";
import Movies from "./Movies";
import axios from "axios";


export default function Home() {
  const [image,setImage] =useState([])
 

  useEffect(()=>{
    const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const promisse = axios.get(url)
    promisse.then((res)=>{
 //       console.log(res.data)
        setImage(res.data)
    })
    promisse.catch((erro)=>{
        console.log(erro.response.data)
    })
  },[])
  
  if(image.length === 0){
    return <Loading>Carregando...</Loading>
  }
    return (
    <Container>
      <Title>
        <h1>Selecione o filme</h1>
      </Title>
      <Images>{image.map((img)=> <Movies key={img.id} img={img}/>)}</Images>
      
      
    </Container>
  );
}

const Container = styled.div`
display:flex;
flex-direction:column
`;

const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 110px;


h1{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #293845;}


`;
const Images = styled.div`
flex-wrap: wrap;
display: flex;
align-items: center;
justify-content: center;

`
const Loading = styled.div`
margin-top:15px;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 28px;

color: #293845;


`

