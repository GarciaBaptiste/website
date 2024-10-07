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

import Image0 from "../../assets/projects/cubicweb/cubicweb_screen_1440x900.png";
import Image1 from "../../assets/projects/cubicweb/cubicweb_screen_iphone.png";
import Image2 from "../../assets/projects/cubicweb/cubicweb_frames.png";

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <TextSmall scroller={containerRef}>
          Graphic and ergonomic update for the promotional and informational
          website of the open-source framework CubicWeb, focused on the semantic
          web, along with its associated technical blog.
        </TextSmall>
        <MockUpDouble
          scroller={containerRef}
          screenMBAir={Image0}
          screenIPhone={Image1}
        />
        <TextSmall scroller={containerRef}>
          Graphic elements, such as colors and hexagonal patterns, reference the
          original logo and the company behind the project.
        </TextSmall>
        <TextSmall scroller={containerRef} $afterText={true}>
          Emphasis was placed on visual and editorial simplicity on the
          homepage, using small, segmented sections to make the project
          appealing despite its technical complexity.
        </TextSmall>
        <FullScreenImage scroller={containerRef} src={Image2} $isSquareOnMobile={true} />
        <TextMedium scroller={containerRef}>
          The project also involves redesigning the technical blog associated
          with the framework, reusing elements from the main site —&nbsp;such as
          the color palette, typography, and layout template&nbsp;— to maintain
          coherence between the two sites.
        </TextMedium>
        <Empty />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
