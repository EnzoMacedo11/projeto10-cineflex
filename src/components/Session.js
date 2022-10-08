import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import Times from "./Times";

export default function Session() {
  const { sessionId } = useParams();
  const [session, setSession] = useState([]);
  const [image, setImage]=useState({})
  console.log(sessionId);

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${sessionId}/showtimes`;
    const promisse = axios.get(url);
    promisse.then((res) => {
      console.log("image", res.data);
      console.log("date", res.data.days);
      setSession(res.data.days);
      setImage(res.data)
    });
    promisse.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  if (session.length === 0) {
    return <Loading>Carregando...</Loading>;
  }
  return (
    <Container>
      <Title>
        <h1>Selecione o horário</h1>
      </Title>
      <Sessions>
        {session.map((ses) =><Times key={ses} ses={ses} />
        )}
      </Sessions>
      <Footer>
        <div><img alt="imagem" src={image.posterURL}/>
        </div>
        <h1>{image.title}</h1>
      
      </Footer>
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

    color: #293845;
  }
`;
const Sessions = styled.div`
  display: flex;
  flex-direction:column;
  
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
const Footer = styled.div`
display: flex;
align-items:center;

width: 100%;
height: 117px;
left: 0px;
bottom: 0px;

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

}

`