import { css } from "@emotion/react";
import styled from "@emotion/styled";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import Button from "../../../components/common/Button";
import Scene from "../../../components/common/Scene";
import Section from "../../../components/common/Section";
import Spacing from "../../../components/common/Spacing";
import colors from "../../../styles/colors";

type Props = {
  onClick?(): void;
};
const HERO_SECTION = "hero-section";

const HeroSection = ({ onClick }: Props) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `#${HERO_SECTION}-container`,
        toggleActions: "play reverse play reverse",
        scrub: 0,
        end: "+=300%",
        start: "center center",
        pin: `#${HERO_SECTION}-container`,
      },
    });

    timeline
      .to(`#${HERO_SECTION}-title-1`, {
        color: colors.white,
        scale: 1.2,
      })
      .to(`#${HERO_SECTION}-title-2`, {
        color: colors.white,
        scale: 1.2,
      })
      .to(`#${HERO_SECTION}-scene-1`, {
        backgroundColor: colors.white,
        delay: 0.5,
      })
      .set(`#${HERO_SECTION}-scene-1`, {
        display: "none",
      })
      .from(`#${HERO_SECTION}-contents-2`, {
        opacity: 0,
      })
      .to(`#${HERO_SECTION}-title-3`, {
        scale: 1.2,
      })
      .to(`#${HERO_SECTION}-title-4`, {
        scale: 1.2,
      })
      .fromTo(
        `#${HERO_SECTION}-button-1`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
  }, []);

  return (
    <Section isAnimated={true} playLength={"300vh"}>
      <Section.Body id={`${HERO_SECTION}-container`} center={true}>
        <Scene
          id={`${HERO_SECTION}-scene-1`}
          css={css`
            background-color: ${colors.black};
          `}
        />
        <Contents id={`${HERO_SECTION}-contents-1`}>
          <Section.Title id={`${HERO_SECTION}-title-1`}>
            "노래에 자신이 없어서"
          </Section.Title>
          <Spacing size={30} />
          <Section.Title id={`${HERO_SECTION}-title-2`}>
            "함께 부르는 사람에게 폐가 될 것 같아서"
          </Section.Title>
        </Contents>
        <Contents id={`${HERO_SECTION}-contents-2`}>
          <Section.Title id={`${HERO_SECTION}-title-3`}>
            실력에 상관없이,
            <br />
            동전과 열정만 들고 오세요.
          </Section.Title>
          <Spacing size={80} />
          <Section.Title id={`${HERO_SECTION}-title-4`}>
            여러분을 위한 노래는
            <br />
            <span
              css={css`
                color: ${colors.orange};
              `}
            >
              코노팟이{" "}
            </span>
            준비해 드릴테니까요.
          </Section.Title>
          <Spacing size={80} />
          <Button id={`${HERO_SECTION}-button-1`} onClick={onClick}>
            내게 어울리는 가수 살펴보기
          </Button>
        </Contents>
      </Section.Body>
    </Section>
  );
};

const Contents = styled.div`
  height: 100%;
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  text-align: center;
`;

export default HeroSection;
