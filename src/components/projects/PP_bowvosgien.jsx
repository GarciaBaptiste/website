import React, { useRef } from "react";
import { ArrowExternal } from "../LayoutAssets";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  TextMedium,
  TextSmall,
  DoubleColumns,
  MockUpDouble,
  VisitSiteButton,
} from "../../assets/PageAssets";

import Image1 from "../../assets/projects/le_bow_vosgien/render3cut2.png";
import Image2 from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_page_mba.png";
import Image3 from "../../assets/projects/le_bow_vosgien/render2.png";
import Image4 from "../../assets/projects/le_bow_vosgien/render5.png";
import Image5 from "../../assets/projects/le_bow_vosgien/render9.png";
import Image6 from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_mobile_00.png";

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <FullScreenImage scroller={containerRef} src={Image1} />
        <TextMedium scroller={containerRef}>
          This carte blanche granted by Le Bow Vosgien, a scenographer with a
          unique profile offering various services related to the performing
          arts, materialized into a virtual and narrative stroll that showcases
          the story of the young craftsman and his work.
        </TextMedium>
        <MockUpDouble
          scroller={containerRef}
          screenMBAir={Image2}
          screenIPhone={Image6}
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
        <FullScreenImage src={Image3} scroller={containerRef} />
        <DoubleColumns scroller={containerRef} $afterImage={true}>
          <img src={Image4} />
          <img src={Image5} />
        </DoubleColumns>
        <VisitSiteButton href="http://le-bow-vosgien.fr" />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
