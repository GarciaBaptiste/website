import React, { useRef } from "react";
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
        <TextMedium scroller={containerRef}>
          This carte blanche granted by Le Bow Vosgien, a scenographer with a
          unique profile offering various services related to the performing
          arts, materialized into a virtual and narrative stroll that showcases
          the story of the young craftsman and his work.
        </TextMedium>
        <TextMedium scroller={containerRef}>
          This carte blanche granted by Le Bow Vosgien, a scenographer with a
          unique profile offering various services related to the performing
          arts, materialized into a virtual and narrative stroll that showcases
          the story of the young craftsman and his work.
        </TextMedium>

        <TextMedium scroller={containerRef}>
          This carte blanche granted by Le Bow Vosgien, a scenographer with a
          unique profile offering various services related to the performing
          arts, materialized into a virtual and narrative stroll that showcases
          the story of the young craftsman and his work.
        </TextMedium>
        <TextMedium scroller={containerRef}>
          This carte blanche granted by Le Bow Vosgien, a scenographer with a
          unique profile offering various services related to the performing
          arts, materialized into a virtual and narrative stroll that showcases
          the story of the young craftsman and his work.
        </TextMedium>
        <TextMedium scroller={containerRef}>
          This carte blanche granted by Le Bow Vosgien, a scenographer with a
          unique profile offering various services related to the performing
          arts, materialized into a virtual and narrative stroll that showcases
          the story of the young craftsman and his work.
        </TextMedium>
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
