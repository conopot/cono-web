import styled from "@emotion/styled";
import colors from "../../styles/colors";

const Button = styled.button`
  border-radius: 20px;
  padding: 20px;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 20px;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.15s ease-in-out all;
  border: 2px solid ${colors.orange};
  width: fit-content;
  margin: 0 auto;

  &:hover {
    scale: 1.05;
    border-color: ${colors.orange};
    background-color: ${colors.white};
    color: ${colors.orange};
  }
`;

export default Button;
