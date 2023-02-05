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

const ButtonsContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 23px;

  div {
    width: 84px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      filter: brightness(1.1);
    }
    :disabled {
      opacity: 0.7;
      pointer-events: none;
    }
  }
`;

export { Container, InfoContainer, WeekdaysContainer, ButtonsContainer };
