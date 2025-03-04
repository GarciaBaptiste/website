import React, { useRef } from "react";
import styled from "styled-components";
import { ArrowExternal, LazyVideo } from "../LayoutAssets";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  TextSmall,
  DoubleColumns,
  Empty,
} from "../../assets/PageAssets";

import Image1 from "../../assets/projects/hyperreel/fluid_poster_01_img_10.jpg";
import Image1PH from "../../assets/projects/hyperreel/fluid_poster_01_img_10_placeholder.jpg";
import Image2 from "../../assets/projects/hyperreel/cap.jpeg";
import Image2PH from "../../assets/projects/hyperreel/cap_placeholder.jpeg";
import Image3 from "../../assets/projects/hyperreel/mag.png";
import Image3PH from "../../assets/projects/hyperreel/mag_placeholder.png";
import Video1 from "../../assets/projects/hyperreel/simulation.mp4";

const CaptionText = styled.p`
  font-size: var(--text-big);
  @media (max-width: 899px) {
    padding: var(--margin);
    font-size: var(--text-basic);
  }
`;

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <FullScreenImage
          scroller={containerRef}
          src={Image1}
          srcPH={Image1PH}
          $keepRatio={"1744/1133"}
        />
        <TextSmall scroller={containerRef}>
          An unreal poster within a real poster, an improbable{" "}
          <i>mise en scène</i> of this <i>mise en abyme</i>, a virtual
          "photograph" of reality dissolving, refracted in the ripples of water.
        </TextSmall>
        <FullScreenImage
          scroller={containerRef}
          src={Image2}
          srcPH={Image2PH}
          $keepRatio={"1744/981"}
        />
        <TextSmall scroller={containerRef}>
          This project, in collaboration with{" "}
          <a href="https://www.instagram.com/ka_nard/" target="_blank">
            Solène Lautridou <ArrowExternal />
          </a>{" "}
          (Graphic Designer), highlights the paradox of digital creation
          striving for photorealism by imitating real physical and optical
          phenomena.
        </TextSmall>
        <DoubleColumns scroller={containerRef} $offset={true}>
          <LazyVideo src={Video1} autoPlay loop muted playsInline />
          <CaptionText>
            This simulation of the real world within a virtual world is depicted
            through a stunning effect rendered in 3D software (Blender), which
            allows for the simulation of gravity, fluid physics, and light
            refraction.
          </CaptionText>
        </DoubleColumns>
        <FullScreenImage
          scroller={containerRef}
          src={Image3}
          srcPH={Image3PH}
          $keepRatio={"1538/1067"}
        />
        <TextSmall
          scroller={containerRef}
          style={{ textAlign: "center", marginTop: "calc(var(--margin) * -2)" }}
        >
          Published in <i>Approche C</i> magazine (
          <a href="https://presses.t-o-m-b-o-l-o.eu/" target="_blank">
            tombolo presses <ArrowExternal />
          </a>
          ).
        </TextSmall>
        <Empty />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
