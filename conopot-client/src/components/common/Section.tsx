import styled from "@emotion/styled";

const Section = styled.section<{ isAnimated?: boolean; playLength?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ isAnimated, playLength }) =>
    isAnimated ? `calc(${playLength})` : "auto"};
`;

const Body = styled.div<{ center?: boolean }>`
  max-width: 960px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : `flex-start`)};
  padding-top: ${({ center }) => (center ? 0 : `120px`)};
  align-items: center;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 52px;
  font-weight: 800;
  line-height: 1.4;
  max-width: 960px;
`;

export default Object.assign(Section, { Body, Title });
