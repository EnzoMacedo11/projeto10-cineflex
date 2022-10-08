import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Times(props) {
  console.log(props);
  const room = props.ses;
  const roomtime = room.showtimes;
  const weekday = props.ses.weekday;
  const date = props.ses.date;
  console.log("roomtime", roomtime);
  return (
    <Card>
      <h1>
        {weekday} - {date}
      </h1>
      <div>{roomtime.map((hrs) => (
        <Link to={`/room/${hrs.id}`}><Room>{hrs.name}</Room></Link>
      ))}</div>
      
    </Card>
  );
}

const Card = styled.div`
  h1 {
    
    flex-direction: column;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    margin-left:24px;
    margin-bottom:22px;
    letter-spacing: 0.02em;

    color: #293845;
  }
  div{
    display:flex;
    margin-left:15px;

  }
`;

const Room = styled.button`
  width: 82px;
  height: 43px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content:center;
  text-align: center;
  letter-spacing: 0.02em;
  background: #e8833a;
  border-radius: 6px;
  margin-bottom:23px;
  margin-left:8px;

  color: #ffffff;
`;
