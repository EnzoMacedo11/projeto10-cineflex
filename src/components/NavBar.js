import styled from "styled-components";

export default function NavBar() {
  return (
    <Container>
      <h1>CINEFLEX</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 67px;
  left: 0px;
  top: 0px;

  background: #c3cfd9;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;

    color: #e8833a;
  }
`;
