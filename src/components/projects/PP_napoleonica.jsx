import React, { useRef } from "react";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  TextMedium,
  TextSmall,
  SimpleColumn,
  DoubleColumns,
  MockUpMBAir,
  MockUpDouble,
  VisitSiteButton,
} from "../../assets/PageAssets";

import Video1 from "../../assets/projects/napoleonica/napoleonica_demo_accueil.mp4";
import Video2 from "../../assets/projects/napoleonica/napoleonica_demo_fonts.mp4";
import Image1 from "../../assets/projects/napoleonica/napoleonica_demo_site.gif";

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <FullScreenImage
          scroller={containerRef}
          src={Video1}
          $isSrcVideo={true}
          $isSquareOnMobile={true}
        />
        <TextSmall scroller={containerRef}>
          Creation of a new interface and complete restyling of the Napoleonica
          platform to showcase both the foundation’s historic and recent
          collections.
        </TextSmall>
        <SimpleColumn scroller={containerRef} $centered={true}>
          <video src={Video2} autoPlay loop muted playsInline />
        </SimpleColumn>
        <TextSmall
          scroller={containerRef}
          style={{ textAlign: "center", marginTop: "calc(var(--margin) * -2)" }}
        >
          Demo of typographic choices in context.
        </TextSmall>
        <TextSmall scroller={containerRef}>
          These choices require meticulous precision in layout, aligning with
          the archival rigor of the researchers.
        </TextSmall>
        <MockUpMBAir scroller={containerRef} screenMBAir={Image1} />
        <TextSmall scroller={containerRef}>
          A two-panel layout — one for navigation tools through the collections
          and the other for browsing the user-selected items — clarifies
          navigation and highlights the content once displayed.
        </TextSmall>
        <VisitSiteButton href="https://www.napoleonica.org/" />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
