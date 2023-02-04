import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 180px;
  padding: 18px 18px 15px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const WeekdaysContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
`;

export { Container, InfoContainer, WeekdaysContainer };
