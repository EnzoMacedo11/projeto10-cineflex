import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import Type from "./Type";
import Details from "./Details";

export default function Room() {
  const [place, setPlace] = useState([]);
  const [seat,setSeat] = useState([])
  const [image,setImage] = useState([])
  const [date,setDate] =useState([])
  const { roomId } = useParams();
  //console.log("roomId", roomId);
  console.log("place", place)
  //console.log("seat",seat)

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${roomId}/seats`;
    const promisse = axios.get(url);
    promisse.then((res) => {
      console.log("teste",res.data.day);
      setPlace(res.data);
      setSeat(res.data.seats)
      setImage(res.data.movie)
      setDate(res.data.day)
      
    });
    promisse.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  if (place.length === 0) {
    return <Loading>Carregando...</Loading>;
  }
  return (
    <Container>
      <Title>
        <h1>Selecione o(s) assento(s)</h1>
      </Title>
      <Seats>
      {seat.map((ses) =><button>{ses.name}</button>)}
      </Seats>
      <Type/>
      <Details/>
      <Footer>
      <div><img alt="imagem" src={image.posterURL}/>
        </div>
        <text><h1>{image.title}</h1>
        <h1>{date.weekday} - {place.name}</h1></text> 
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
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

    color: #293845;
  }
`;
const Images = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Seats = styled.div`
display: flex;
width:330px;
flex-wrap: wrap;
align-items: center;
justify-content: center;


button{

width: 26px;
height: 26px;
margin-left:7px;
margin-bottom:19px;
background: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;}
`
const Footer = styled.div`
display: flex;
align-items:center;
left: 0px;
bottom: 0px;

width: 100%;
height: 117px;

background: #DFE6ED;
border: 1px solid #9EADBA;
div{
  width:64px;
  height:88px;
  background-color: white;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:10px;
}
img{
  width: 48px;
height: 72px;
}

h1{
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
margin-left:14px;

text{
    display:flex;
    flex-direction:column;
}
}

`