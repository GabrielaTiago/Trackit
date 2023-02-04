import styled from "styled-components";

const Typography = styled.h6`
  font-size: 17.976px;
  line-height: 22px;
  color: ${({ color }) => (color ? "#8FC549" : "#bababa")};
`;

export { Typography };
