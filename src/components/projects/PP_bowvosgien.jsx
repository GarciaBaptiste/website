import React, { useRef } from "react";
import { ArrowExternal, LowQualityImg } from "../LayoutAssets";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  TextSmall,
  DoubleColumns,
  MockUpDouble,
  VisitSiteButton,
} from "../../assets/PageAssets";

import Image1 from "../../assets/projects/le_bow_vosgien/render3cut2.png";
import Image1PH from "../../assets/projects/le_bow_vosgien/render3cut2_placeholder.png";
import Image2 from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_page_mba.png";
import Image2PH from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_page_mba_placeholder.png";
import Image3 from "../../assets/projects/le_bow_vosgien/render2.png";
import Image3PH from "../../assets/projects/le_bow_vosgien/render2_placeholder.png";
import Image4 from "../../assets/projects/le_bow_vosgien/render5.png";
import Image4PH from "../../assets/projects/le_bow_vosgien/render5_placeholder.png";
import Image5 from "../../assets/projects/le_bow_vosgien/render9.png";
import Image5PH from "../../assets/projects/le_bow_vosgien/render9_placeholder.png";
import Image6 from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_mobile_00.png";
import Image6PH from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_mobile_00_placeholder.png";

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
          This carte blanche granted by Le Bow Vosgien, a scenographer with a
          unique profile offering various services related to the performing
          arts, materialized into a virtual and narrative stroll that showcases
          the story of the young craftsman and his work.
        </TextSmall>
        <MockUpDouble
          scroller={containerRef}
          screenMBAir={Image2}
          screenMBAirPH={Image2PH}
          screenIPhone={Image6}
          screenIPhonePH={Image6PH}
        />
        <TextSmall scroller={containerRef}>
          The project, carried out with the participation of{" "}
          <a href="https://khanh-robert.fr/" target="_blank">
            Khanh Robert <ArrowExternal />
          </a>{" "}
          (3D artist) and{" "}
          <a href="https://www.leodurand.com/" target="_blank">
            Léo Durand <ArrowExternal />
          </a>{" "}
          (UI/UX design), called upon all of our shared skills in 3D, interface
          design, as well as front-end development.
        </TextSmall>
        <FullScreenImage
          src={Image3}
          srcPH={Image3PH}
          scroller={containerRef}
          $isSquareOnMobile={true}
        />
        <DoubleColumns scroller={containerRef} $afterImage={true}>
          <LowQualityImg lowQualitySrc={Image4PH} highQualitySrc={Image4}>
            <img />
          </LowQualityImg>
          <LowQualityImg lowQualitySrc={Image5PH} highQualitySrc={Image5}>
            <img />
          </LowQualityImg>
        </DoubleColumns>
        <VisitSiteButton href="http://le-bow-vosgien.fr" />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
