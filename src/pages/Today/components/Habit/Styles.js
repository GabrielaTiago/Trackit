import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 94px;
  padding: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 7px;
`;

const Name = styled.h3`
  width: 100%;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  word-break: break-all;
`;

const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Metrics = styled.h4`
  display: flex;
  font-size: 12.976px;
  line-height: 16px;
  color: #666666;
`;

const Goal = styled.h4`
  margin-left: 5px;
  color: ${({ hit }) => (hit ? "#8FC549" : "#666666")};
`;

export { Container, DataContainer, Name, MetricsContainer, Metrics, Goal };
