import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const AppTitle = styled.h1`
  font-family: "Playball";
  font-weight: 400;
  font-size: 40px;
  line-height: 48.73px;
  color: #ffffff;
`;

const UserImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  object-fit: cover;
`;

export { Container, AppTitle, UserImage };
