import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactNode, useEffect } from "react";
import emotionReset from "emotion-reset";
import { Helmet } from "react-helmet";
import Header from "../components/common/Header";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HEADER_HEIGHT } from "../styles/ui";

type Props = {
  children: ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

const RootLayout = ({ children }: Props) => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
        />
      </Helmet>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif !important;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <Header />
      <Body>{children}</Body>
    </div>
  );
};

const Body = styled.div``;

export default RootLayout;
