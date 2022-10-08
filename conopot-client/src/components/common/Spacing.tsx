import styled from "@emotion/styled";

const Spacing = styled.div<{ size: number }>`
  height: ${({ size }) => size}px;
`;

export default Spacing;
