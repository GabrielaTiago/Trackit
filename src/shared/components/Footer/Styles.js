import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  max-height: 70px;
  padding: 0 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
`;

const Progress = styled.div`
  max-width: 91px;
  max-height: 91px;
  margin-bottom: 40px;
  font-size: 17.976px;
  line-height: 22px;
  cursor: pointer;
  :hover {
    filter: brightness(1.1);
  }
`;

export { Container, Progress };
