import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { HEADER_HEIGHT, HEADER_ZINDEX } from "../../styles/ui";

const Header = () => {
  return <Container>애창곡 노트</Container>;
};

const Container = styled.header`
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.white};
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-weight: 800;
  font-size: 20px;
  position: fixed;
  z-index: ${HEADER_ZINDEX};
`;

export default Header;
