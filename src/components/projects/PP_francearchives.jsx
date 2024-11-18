import React, { useRef } from "react";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  TextSmall,
  MockUpMBAir,
  VisitSiteButton,
} from "../../assets/PageAssets";

import Image1 from "../../assets/projects/francearchives/francearchives_hero.png";
import Image1PH from "../../assets/projects/francearchives/francearchives_hero_placeholder.png";
import Image2 from "../../assets/projects/francearchives/francearchives_frames.png";
import Image2PH from "../../assets/projects/francearchives/francearchives_frames_placeholder.png";
import Image3 from "../../assets/projects/francearchives/francearchives_homepage_1920x1200.png";
import Image3PH from "../../assets/projects/francearchives/francearchives_homepage_1920x1200_placeholder.png";

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <FullScreenImage
          scroller={containerRef}
          src={Image1}
          srcPH={Image1PH}
          $isSquareOnMobile={true}
        />
        <TextSmall scroller={containerRef}>
          Extensive editorial, ergonomic, and visual overhaul of the France
          Archives archival research platform. This project included conducting
          UX workshops with both the public and professionals to address the
          needs of all users.
        </TextSmall>
        <FullScreenImage
          scroller={containerRef}
          src={Image2}
          srcPH={Image2PH}
          $isSquareOnMobile={true}
        />
        <TextSmall scroller={containerRef}>
          A thorough process of refining and consolidating ideas was then
          carried out before creating the first graphic mockups for all page
          types and content categories on the site.
        </TextSmall>
        <MockUpMBAir
          scroller={containerRef}
          screenMBAir={Image3}
          screenMBAirPH={Image3PH}
          $scrollOverflow={true}
        />
        <TextSmall scroller={containerRef}>
          During the process, the project, like all websites under the
          “République Française” brand, was redirected to align with the arrival
          of the state design system. The entire design had to be readjusted to
          comply with the new DSFR design system.
        </TextSmall>
        <VisitSiteButton href="https://francearchives.gouv.fr" />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
