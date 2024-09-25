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

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
