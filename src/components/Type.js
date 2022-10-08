import styled from "styled-components";

export default function Type() {
  return <SeatColor>
    <div> <Seatselected/>
        <h1>Selecionado</h1></div>
    <div> <Seatdisponible/>
    <h1>Disponível</h1>
    </div>
    <div><Seatindisponible/>
    <h1>Indisponível</h1></div>
    
   
    
  </SeatColor>;
}


const SeatColor = styled.div`
margin-top:24px;
display:flex;
div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left:30px;
}
h1{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;

color: #4E5A65}
`

const Seatdisponible = styled.button`
  width: 26px;
  height: 26px;
  
  margin-bottom: 5px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
`;

const Seatindisponible = styled.button`
  width: 26px;
  height: 26px;

  margin-bottom: 5px;
  background: #FBE192;
  border: 1px solid #808f9d;
  border-radius: 12px;
`;

const Seatselected = styled.button`
  width: 26px;
  height: 26px;
  margin-bottom: 5px;
  background: #1AAE9E;
  border: 1px solid #808f9d;
  border-radius: 12px;
`;
