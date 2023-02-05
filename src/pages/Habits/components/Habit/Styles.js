import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 91px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;

  svg {
    cursor: pointer;
    :hover {
      filter: brightness(0.5);
    }
  }
`;

const Name = styled.h5`
  font-size: 20px;
  line-height: 24.97px;
  word-wrap: break-word;
`;

const WeekdaysContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
`;

const Weekday = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 25px;
  color: ${({ day }) => (day ? "#ffffff" : "#dbdbdb")};
  background-color: ${({ day }) => (day ? "#cfcfcf" : "none")};
  border: 1px solid ${({ day }) => (day ? "none" : "#d5d5d5")};
  border-radius: 5px;
`;

export { Container, NameContainer, Name, WeekdaysContainer, Weekday };
