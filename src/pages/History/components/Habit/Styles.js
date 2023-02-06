import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


`;

const Day = styled.h5`
  font-size: 20px;
  line-height: 24px;
  color: #126ba5;
`;

const Typography = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;

  svg {
    color: ${({ type }) => (type ? "#8cc654" : "#ea5766")};
  }
`;

export { Container, Day, Typography };
