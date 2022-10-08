import styled from "@emotion/styled";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import Button from "../../../components/common/Button";
import Section from "../../../components/common/Section";

type Props = {
  onClick?(): void;
};

const RECORD_SECTION = "record-section";

const RecorderSection = ({ onClick }: Props) => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(`#${RECORD_SECTION}-title-1`, {
        y: 40,
        duration: 0.75,
        opacity: 0,
      })
      .from(`#${RECORD_SECTION}-title-2`, {
        y: 40,
        duration: 0.75,
        delay: -0.25,
        opacity: 0,
      });
  }, []);

  return (
    <Section>
      <Section.Body center={true} id={`${RECORD_SECTION}-container`}>
        <SectionTitle id={`${RECORD_SECTION}-title-1`}>
          목소리가 유사한 가수를 찾기 위해,
        </SectionTitle>
        <SectionTitle id={`${RECORD_SECTION}-title-2`}>
          여러분의 목소리를 들려 주세요.
        </SectionTitle>
        <ButtonContainer>
          <RecordButton>녹음 시작하기</RecordButton>
          <RecordButton onClick={onClick}>처음으로 돌아가기</RecordButton>
        </ButtonContainer>
      </Section.Body>
    </Section>
  );
};

const RecordButton = styled(Button)``;

const SectionTitle = styled(Section.Title)`
  font-size: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;

  button:first-of-type {
    margin-right: 20px;
  }
`;

export default RecorderSection;
