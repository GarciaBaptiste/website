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

import Image1 from "../../assets/projects/stretch/image1.png";
import Image2 from "../../assets/projects/stretch/image2.png";
import Image3 from "../../assets/projects/stretch/vinyl_mockup1.jpg";
import Image4 from "../../assets/projects/stretch/vinyl1.png";
import Image5 from "../../assets/projects/stretch/vinyl2.png";

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <DoubleColumns scroller={containerRef}>
          <img src={Image1} />
          <img src={Image2} />
        </DoubleColumns>
        <FullScreenImage
          src={Image3}
          scroller={containerRef}
          // $isSquareOnMobile={true}
        />
        <DoubleColumns scroller={containerRef} $centered={true}>
          <img src={Image4} />
          <img src={Image5} />
        </DoubleColumns>
        <TextSmall scroller={containerRef}>
          The idea of creating a stretchable typeface came to me while studying
          variable fonts. Some of these fonts allow width adjustments by
          modifying a variable in either CSS or JS to create effects on a
          webpage or web application.
        </TextSmall>
        <TextSmall scroller={containerRef}>
          However, this method doesn’t automatically stretch the chosen word or
          text to fill the entire width of a page or container.
        </TextSmall>
        <TextSmall scroller={containerRef}>
          Using basic CSS principles like flexboxes, grids, and mix-blend modes,
          I began to consider the various challenges I would need to solve to
          create this typeface. For example, how to stretch a curve without
          distorting the design in an unsightly way? How to create an angled
          line that maintains the same width regardless of inclination? All of
          this using only HTML blocks and CSS properties.
        </TextSmall>
        <TextSmall scroller={containerRef}>
          These constraints shaped the stylistic direction of the font design,
          replacing angled lines with curves, for example. (It’s possible to
          create curves, including strokes with varying thickness, that stretch
          without distortion—but not angled lines).
        </TextSmall>
        <Empty />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
