import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  max-height: 70px;
  padding: 0 5%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-around;
  font-family: "Lexend Deca";
  font-size: 18px;
  color: #52b6ff;
`;

const Progress = styled.div`
  width: 91px;
  height: 91px;
  margin-bottom: 40px;
  cursor: pointer;
  :hover {
    filter: brightness(1.1);
  }
`;

export { Container, Progress };
