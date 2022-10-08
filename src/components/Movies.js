import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movies(props) {

    return (
        <Link to = {`/session/${props.img.id}`}>
        <Card> <img alt="imagem" src={props.img.posterURL}/> </Card>
        </Link>
        
    
  );
}

const Card = styled.div`
img { 
margin: 5px 5px;
width: 129px;
height: 193px;
border: 8px solid white
}
`