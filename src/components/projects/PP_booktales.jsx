import React, { useRef } from "react";
import styled from "styled-components";
import { ArrowExternal } from "../LayoutAssets";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  FullScreenBackground,
  TextMedium,
  TextSmall,
  DoubleColumns,
  MockUpDouble,
  VisitSiteButton,
  Empty,
} from "../../assets/PageAssets";

import Image1 from "../../assets/projects/book_tales/expo1.png";
import Image2 from "../../assets/projects/book_tales/expo2.png";
import Image3 from "../../assets/projects/book_tales/capture_mep.png";
import Image4 from "../../assets/projects/book_tales/capture_couv.png";

const CustomIFrame = styled.iframe`
  aspect-ratio: 1920/1080;
  width: 100%;
  margin-bottom: -4px;
  @media (max-width: 899px) {
    aspect-ratio: 4/5;
  }
`;

const CustomFullScreenBackground = styled(FullScreenBackground)`
  @media (max-width: 899px) {
    aspect-ratio: 4/5;
    position: relative;
  }
`;

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <CustomFullScreenBackground
          scroller={containerRef}
          style={{
            background: "black",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <CustomIFrame src="http://baptistegarcia.com/book_tales_cover/" />
        </CustomFullScreenBackground>
        <TextSmall scroller={containerRef}>
          One of my professors at the Beaux-Arts once asked me to design and
          produce the catalog for an exhibition he was organizing around his
          digital works.
        </TextSmall>
        <TextSmall scroller={containerRef} $afterText={true}>
          Most of his creations revolve around the theme of books and the
          digital medium, so the idea of a layout that takes advantage of the
          digital format naturally emerged.
        </TextSmall>
        <DoubleColumns scroller={containerRef}>
          <img src={Image1} />
          <img src={Image2} />
        </DoubleColumns>
        <TextSmall scroller={containerRef}>
          I set out to develop a tool where a precisely designed layout grid
          allows the text to be randomly generated, while still following a few
          simple rules.
        </TextSmall>
        <FullScreenImage scroller={containerRef} src={Image3} $isSquareOnMobile={true} />
        <TextSmall scroller={containerRef}>
          This tool enabled me to generate several layout versions, five of
          which were selected and integrated into one of five uniquely designed
          covers, created manually rather than procedurally.
        </TextSmall>
        <FullScreenImage scroller={containerRef} src={Image4} $isSquareOnMobile={true} />
        <CustomFullScreenBackground
          scroller={containerRef}
          style={{
            background: "white",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <CustomIFrame src="http://baptistegarcia.com/book_tales/" />
        </CustomFullScreenBackground>
        <Empty />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
