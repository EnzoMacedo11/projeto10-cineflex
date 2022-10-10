import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Type from "./Type";
import { useNavigate } from "react-router-dom";

export default function Room() {
  const navigate = useNavigate();
  const [place, setPlace] = useState([]);
  const [seat, setSeat] = useState([]);
  const [image, setImage] = useState([]);
  const [date, setDate] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [seatId, SetSeatId] = useState([]);
  const [seatName, SetSeatName]= useState([]);
  const { roomId } = useParams();
  const { sucessId } = useParams();
  //console.log("roomId", roomId);
  //console.log("place", place);
  //console.log("seat",seat)
  //console.log("sucessId",sucessId)

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${roomId}/seats`;

    const promisse = axios.get(url);
    promisse.then((res) => {
      console.log("teste", res.data.day);
      setPlace(res.data);
      setSeat(res.data.seats);
      setImage(res.data.movie);
      setDate(res.data.day);
      //console.log("tem isso no seat", seat);
    });
    promisse.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  if (place.length === 0) {
    return <Loading>Carregando...</Loading>;
  }

  const postUrl =
    "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

  function postDate(event) {
    //console.log("name", name);
    //console.log("cpf", cpf);
    event.preventDefault();
    const promisse = axios.post(postUrl, {
      ids: seatId,
      name: name,
      cpf: cpf,
    });
    promisse.then((res) => {
     // console.log("teste envio", res.data);
      navigate(`/sucess/${roomId}`, { state:{seatId: seatId, name: name, cpf: cpf, seatName:seatName}});
    });
    promisse.catch((erro) => {
      console.log("teste envio erro", erro.response.data);
    });
  }

  function choiceSeat(ses) {
    const{id, name, isAvailable} = ses
    if (seatId.includes(id)) {
      SetSeatId([...seatId.filter((el) => el !== id)]); //selecionar assento na lista de selecionados
      
    }
    if (seatName.includes(name)) {
      SetSeatName([...seatName.filter((el) => el !== name)]); //selecionar assento na lista de selecionados
      return;
    }

    SetSeatId([...seatId, id]);
    SetSeatName([...seatName, name])
  } 
 // console.log("teste escolha de lugar", seatId);
 // console.log("teste escolha de name", seatName);
  

  return (
    <>
    <Container>
      <Title>
        <h1>Selecione o(s) assento(s)</h1>
      </Title>
      <Seats>
        {seat.map((ses) => {
          return(
          <SeatButton habilited={ses.isAvailable} selected={seatId.includes(ses.id)} disabled={!ses.isAvailable} onClick={() => choiceSeat(ses)}>{ses.name}</SeatButton>
        )})}
      </Seats>
      <Type />
      <ClientData>
        <form onSubmit={postDate}>
          {" "}
          {/*formulário com nome e cpf que tem que ser enviados ao servidor e tela 4*/}
          <div>
            <h1>Nome do comprador:</h1>
            <input
              onChange={(e) => setName(e.target.value)} //atualiza name para enviar
              value={name}
              placeholder="Digite seu nome..."
            />
          </div>
          <div>
            <h1>CPF do comprador:</h1>
            <input
              onChange={(e) => setCpf(e.target.value)} //atualiza cpf para enviar
              value={cpf}
              placeholder="Digite seu CPF..."
            />
          </div>
          <Finish type="submit">Reservar Assento(s)</Finish>
        </form>
      </ClientData>
      <Footer>
        <div>
          <img alt="imagem" src={image.posterURL} />
        </div>
        <text>
          <h1>{image.title}</h1>
          <h1>
            {date.weekday} - {place.name}
          </h1>
        </text>
      </Footer>
    </Container>
    </>
  );
}

const Container = styled.div`
  height:100%;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 330px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`;
const SeatButton = styled.button`
   width: 26px;
    height: 26px;
    margin-left: 7px;
    background-color: ${props => props.habilited ? "#C3CFD9" : "#FBE192"};
    ${props => props.selected ? "background-color: #1AAE9E" : "" };
    margin-bottom: 19px;
    border: 1px solid #808f9d;
    border-radius: 12px;


`

const ClientData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
  div {
    margin-top: 7px;
    display: flex;
    flex-direction: column;
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
    margin-top: 3px;
    width: 327px;
    height: 51px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }
  form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

const Finish = styled.button`
  margin-top: 57px;
  margin-bottom: 53px;
  width: 225px;
  height: 42px;

  background: #e8833a;
  border-radius: 3px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;

  color: #ffffff;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  left: 0px;
  bottom: 0px;

  width: 100%;
  height: 117px;

  background: #dfe6ed;
  border: 1px solid #9eadba;
  div {
    width: 64px;
    height: 88px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
  img {
    width: 48px;
    height: 72px;
  }

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    margin-left: 14px;
  }
  text {
    display: flex;
    flex-direction: column;
  }
`;
