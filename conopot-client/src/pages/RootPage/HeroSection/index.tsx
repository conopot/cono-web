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
      .to(`#${HERO_SECTION}-subtitle-1`, {
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
            "????????? ????????? ?????????"
          </Section.Title>
          <Spacing size={30} />
          <Section.Title id={`${HERO_SECTION}-title-2`}>
            "?????? ????????? ???????????? ?????? ??? ??? ?????????"
          </Section.Title>
          <Subtitle id={`${HERO_SECTION}-subtitle-1`}>
            <p>???????????? ???????????? ????????? ??????</p>
            <p>???????????? ???????????? ??????????????????.</p>
          </Subtitle>
        </Contents>
        <Contents id={`${HERO_SECTION}-contents-2`}>
          <Section.Title id={`${HERO_SECTION}-title-3`}>
            ?????? ????????? ????????????,
            <br />
            ????????? ????????? ?????? ?????????.
          </Section.Title>
          <Spacing size={80} />
          <Section.Title id={`${HERO_SECTION}-title-4`}>
            ???????????? ?????? ?????????
            <br />
            <span
              css={css`
                color: ${colors.orange};
              `}
            >
              ????????????{" "}
            </span>
            ????????? ??????????????????.
          </Section.Title>
          <Spacing size={80} />
          <Button id={`${HERO_SECTION}-button-1`} onClick={onClick}>
            ????????? ???????????? ?????? ????????????
          </Button>
        </Contents>
        <Spacing size={80} />
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

const Subtitle = styled.div`
  line-height: 1.5;
  margin-top: 40px;
  font-size: 22px;
  font-weight: 700;
`;

export default HeroSection;
