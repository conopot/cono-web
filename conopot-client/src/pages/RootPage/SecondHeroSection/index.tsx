import styled from "@emotion/styled";
import React from "react";
import Section from "../../../components/common/Section";
import YoutubePlayer from "./YoutubePlayer";
import Youtube from "./YoutubePlayer";

type Props = {};

const SecondHeroSection = (props: Props) => {
  return (
    <Section>
      <Section.Body>
        <Title>코노팟은 이런 서비스에요.</Title>
        <Description>
          노래방이 생각나는 하루라면, 코노팟은 여러분의 든든한 동료가 되어
          줄거에요.
        </Description>
        <YoutubePlayer />
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

export default SecondHeroSection;
