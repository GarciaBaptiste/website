import React, { useRef } from "react";
import styled from "styled-components";
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

import Image0 from "../../assets/projects/swep/swep_prez.svg";
import Image1 from "../../assets/projects/swep/swep_mobile.png";
import Image2 from "../../assets/projects/swep/swep_logo_old.png";
import Image3 from "../../assets/projects/swep/swep_logo_new.svg";
import Video1 from "../../assets/projects/swep/swep_demo.mp4";
import Video2 from "../../assets/projects/swep/swep_detail_1.mp4";
import Video3 from "../../assets/projects/swep/swep_detail_2.mp4";

const ImagePrezContainer = styled.div`
  display: flex;

  @media (max-width: 750px) {
    margin: var(--margin);
  }

  & > img {
    max-width: 400px;
    margin: 20rem auto;

    @media (max-width: 750px) {
      margin: 0;
    }
  }
`;

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <FullScreenBackground scroller={containerRef} $isSquareOnMobile={true}>
          <ImagePrezContainer>
            <img src={Image0} />
          </ImagePrezContainer>
        </FullScreenBackground>
        <TextSmall scroller={containerRef}>
          UX/UI redesign of a website promoting an annual conference series on
          the semantic web, tailored for industry professionals.
        </TextSmall>
        <MockUpDouble
          scroller={containerRef}
          mBAirVideo={true}
          screenMBAir={Video1}
          screenIPhone={Image1}
        />
        <TextSmall scroller={containerRef}>
          The navigation was designed around a vertical timeline, allowing users
          to view the schedule of upcoming conferences as well as key dates for
          the entire event.
        </TextSmall>
        <DoubleColumns scroller={containerRef} $centered={true}>
          <img src={Image2} style={{ padding: "2rem", background: "white" }} />
          <img src={Image3} style={{ padding: "2rem", background: "white" }} />
        </DoubleColumns>
        <TextSmall
          scroller={containerRef}
          style={{ textAlign: "center", marginTop: "calc(var(--margin) * -2)" }}
        >
          Old logo / New logo
        </TextSmall>
        <TextSmall scroller={containerRef}>
          One of the design challenges was to preserve the original visual
          identity, which was already well recognized by the target audience,
          while combining an aesthetic that reflects a scholarly and technical
          environment with limited iconography available.
        </TextSmall>
        <DoubleColumns scroller={containerRef} $centered={true}>
          <video src={Video2} autoPlay loop muted playsInline />
          <video src={Video3} autoPlay loop muted playsInline />
        </DoubleColumns>
        <TextSmall scroller={containerRef}>
          The site is reusable for all future editions and offers access to
          archives of previous editions in the same format.
        </TextSmall>
        <Empty />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
