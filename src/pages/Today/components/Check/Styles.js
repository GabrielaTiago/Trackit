import styled from "styled-components";

const Container = styled.div`
  min-width: 69px;
  height: 69px;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
  background-color: ${({ done }) => (done ? "#8FC549" : "#EBEBEB")};
  border-radius: 5px;
  cursor: pointer;
  :hover {
    filter: ${({done} )=> (done ? "brightness(1.1)": "brightness(0.9)")};
  }
`;

export { Container };
