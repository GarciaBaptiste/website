import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  FullScreenBackground,
  SmallBackground,
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
import Image6 from "../../assets/projects/stretch/html.png";
import Image7 from "../../assets/projects/stretch/carnet_typo.jpg";
import Image8 from "../../assets/projects/stretch/figma_typo.png";

export const ProjectPage = () => {
  const [iframeSize, setIframeSize] = useState({ width: "50%", height: "50%" });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const newWidth = `${(e.clientX / window.innerWidth) * 65 + 35}%`;
    const newHeight = `${(e.clientY / window.innerHeight) * 65 + 35}%`;
    setIframeSize({ width: newWidth, height: newHeight });
  };

  return (
    <ProjectPageWrapper ref={containerRef} onMouseMove={handleMouseMove}>
      <ProjectPageContent>
        <DoubleColumns scroller={containerRef}>
          <img src={Image1} />
          <img src={Image2} />
        </DoubleColumns>
        <FullScreenImage
          src={Image3}
          scroller={containerRef}
          $isSquareOnMobile={true}
        />
        <DoubleColumns
          scroller={containerRef}
          $centered={true}
          $afterImage={true}
        >
          <img src={Image4} />
          <img src={Image5} />
        </DoubleColumns>
        <TextSmall scroller={containerRef}>
          The idea of creating a stretchable typeface came to me while studying
          variable fonts. Some of these fonts allow width adjustments by
          modifying a variable in either CSS or JS to create effects on a
          webpage or web application.
        </TextSmall>
        <TextSmall scroller={containerRef} $afterText={true}>
          However, this method doesn’t automatically stretch the chosen word or
          text to fill the entire width of a page or container.
        </TextSmall>
        <SmallBackground scroller={containerRef}>
          <img src={Image6} />
        </SmallBackground>
        <TextSmall scroller={containerRef}>
          Using basic CSS principles like flexboxes, grids, and mix-blend modes,
          I began to consider the various challenges I would need to solve to
          create this typeface. For example, how to stretch a curve without
          distorting the design in an unsightly way? How to create an angled
          line that maintains the same width regardless of inclination? All of
          this using only HTML blocks and CSS properties.
        </TextSmall>
        <FullScreenImage
          src={Image7}
          scroller={containerRef}
          $isSquareOnMobile={true}
        />
        <FullScreenImage
          src={Image8}
          scroller={containerRef}
          $isSquareOnMobile={true}
          $afterImage={true}
        />
        <TextSmall scroller={containerRef}>
          These constraints shaped the stylistic direction of the font design,
          replacing angled lines with curves, for example. (It’s possible to
          create curves, including strokes with varying thickness, that stretch
          without distortion—but not angled lines).
        </TextSmall>
        <SmallBackground
          scroller={containerRef}
          ratio={"1/1"}
          style={{
            background: "white",
            overflow: "hidden",
            borderRadius: "1rem",
          }}
        >
          <iframe
            src="http://baptistegarcia.com/stretch/index.html"
            width={iframeSize.width}
            height={iframeSize.height}
            style={{ margin: "auto", pointerEvents: "none" }}
          />
        </SmallBackground>
        <Empty />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
