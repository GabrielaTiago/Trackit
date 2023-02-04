import styled from "styled-components";

const NewBtn = styled.div`
  width: 40px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #ffffff;
  background: #52b6ff;
  border-radius: 4.63636px;
  cursor: pointer;
  :hover {
    filter: brightness(1.1);
  }
`;

const DayBtn = styled.div`
  height: 30px;
  width: 30px;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  background-color: ${(props) => (props.selected ? "#cfcfcf" : "none")};
  border: 1px solid ${(props) => (props.selected ? "none" : "#d5d5d5")};
  border-radius: 5px;
  cursor: pointer;
  :hover {
    filter: ${(props) =>
      props.selected ? "brightness(1.1) " : "brightness(0.7)"};
  }
`;

const SaveBtn = styled.div`
  color: #ffffff;
  background-color: #52b6ff;
`;

const CancelBtn = styled.div`
  color: #52b6ff;
  background-color: none;
`;

export { NewBtn, DayBtn, SaveBtn, CancelBtn };
