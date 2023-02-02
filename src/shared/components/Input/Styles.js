import styled from "styled-components";

const InputBox = styled.input`
  width: 100%;
  height: 45px;
  padding: 11px;
  font-size: 20px;
  line-height: 25px;
  color: #666666;
  background: none;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dbdbdb;
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :disabled {
    color: #b3b3b3;
    background: #f2f2f2;
    opacity: 0.7;
    pointer-events: none;
  }
`;

export { InputBox };
