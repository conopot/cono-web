import styled from "@emotion/styled";
import React from "react";
import Section from "../../../components/common/Section";

type Props = {};

const ShareSection = (props: Props) => {
  return (
    <Section>
      <Section.Body>
        <Title>지금 바로, 코노팟에 합류하세요</Title>
      </Section.Body>
    </Section>
  );
};

const Title = styled(Section.Title)``;

const Description = styled.p`
  font-size: 24px;
  color: #454545;
  font-weight: 600;
  margin: 32px 0;
`;

export default ShareSection;
