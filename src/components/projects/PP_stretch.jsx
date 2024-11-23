import React, { useRef, useState } from "react";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  SmallBackground,
  TextSmall,
  DoubleColumns,
} from "../../assets/PageAssets";
import { LowQualityImg } from "../../components/LayoutAssets";

import Image1 from "../../assets/projects/stretch/image1.png";
import Image1PH from "../../assets/projects/stretch/image1_placeholder.png";
import Image2 from "../../assets/projects/stretch/image2.png";
import Image2PH from "../../assets/projects/stretch/image2_placeholder.png";
import Image3 from "../../assets/projects/stretch/vinyl_mockup1.jpg";
import Image3PH from "../../assets/projects/stretch/vinyl_mockup1_placeholder.jpg";
import Image4 from "../../assets/projects/stretch/vinyl1.png";
import Image4PH from "../../assets/projects/stretch/vinyl1_placeholder.png";
import Image5 from "../../assets/projects/stretch/vinyl2.png";
import Image5PH from "../../assets/projects/stretch/vinyl2_placeholder.png";
import Image6 from "../../assets/projects/stretch/html.png";
import Image6PH from "../../assets/projects/stretch/html_placeholder.png";
import Image7 from "../../assets/projects/stretch/carnet_typo.jpg";
import Image7PH from "../../assets/projects/stretch/carnet_typo_placeholder.jpg";
import Image8 from "../../assets/projects/stretch/figma_typo.png";
import Image8PH from "../../assets/projects/stretch/figma_typo_placeholder.png";

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
          <LowQualityImg lowQualitySrc={Image1PH} highQualitySrc={Image1}>
            <img />
          </LowQualityImg>
          <LowQualityImg lowQualitySrc={Image2PH} highQualitySrc={Image2}>
            <img />
          </LowQualityImg>
        </DoubleColumns>
        <FullScreenImage
          src={Image3}
          srcPH={Image3PH}
          scroller={containerRef}
          $isSquareOnMobile={true}
        />
        <DoubleColumns
          scroller={containerRef}
          $centered={true}
          $afterImage={true}
        >
          <LowQualityImg lowQualitySrc={Image4PH} highQualitySrc={Image4}>
            <img />
          </LowQualityImg>
          <LowQualityImg lowQualitySrc={Image5PH} highQualitySrc={Image5}>
            <img />
          </LowQualityImg>
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
          <LowQualityImg lowQualitySrc={Image6PH} highQualitySrc={Image6}>
            <img />
          </LowQualityImg>
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
          srcPH={Image7PH}
          scroller={containerRef}
          $isSquareOnMobile={true}
        />
        <FullScreenImage
          src={Image8}
          srcPH={Image8PH}
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
            src="https://baptistegarcia.com/stretch/index.html"
            width={iframeSize.width}
            height={iframeSize.height}
            style={{ margin: "auto", pointerEvents: "none" }}
          />
        </SmallBackground>
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
