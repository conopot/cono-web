import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import RootLayout from "../../layouts/RootLayout";
import HeroSection from "./HeroSection";
import RecorderSection from "./RecorderSection";

type transitionStatus = "NONE" | "START" | "END";
const TransitionTimeout = 500;

const RootPage = () => {
  const [isRecorderActive, setIsRecorderActive] = useState(false);
  const [transitionStatus, setTransitionStatus] =
    useState<transitionStatus>("NONE");

  useEffect(() => {
    setTransitionStatus("NONE");
  }, [isRecorderActive]);

  const ActivateRecorder = async () => {
    setTransitionStatus("START");
    setTimeout(() => {
      setIsRecorderActive(() => true);
    }, TransitionTimeout);
    setTransitionStatus("END");
  };

  const DeactivateRecorder = async () => {
    setTransitionStatus("START");
    setTimeout(() => {
      setIsRecorderActive(() => false);
    }, TransitionTimeout);
    setTransitionStatus("END");
  };

  return (
    <RootLayout>
      {!isRecorderActive ? (
        <TransitionWrapper isTransitionEnd={transitionStatus === "END"}>
          <HeroSection onClick={ActivateRecorder} />
        </TransitionWrapper>
      ) : (
        <TransitionWrapper isTransitionEnd={transitionStatus === "END"}>
          <RecorderSection onClick={DeactivateRecorder} />
        </TransitionWrapper>
      )}
    </RootLayout>
  );
};

const TransitionWrapper = styled.div<{ isTransitionEnd: boolean }>`
  opacity: ${({ isTransitionEnd }) => (isTransitionEnd ? 0 : 1)};
  transition: ${TransitionTimeout}ms ease-in-out opacity;
`;

export default RootPage;
