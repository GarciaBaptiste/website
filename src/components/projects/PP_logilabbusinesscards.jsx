import React, { useRef } from "react";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  TextSmall,
  Empty,
} from "../../assets/PageAssets";

import Image1 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame1.png";
import Image2 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame2.png";
import Image3 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame3.png";
import Image4 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame4.png";
import Image5 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame5.png";
import Image6 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame6.png";

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <TextSmall scroller={containerRef}>
          Complete creative freedom for designing business cards for Logilab, a
          company offering services (development and training) focused on the
          semantic web. Several creative directions were explored and presented
          to the client, allowing them to select the most relevant approach
          before printing.
        </TextSmall>
        <FullScreenImage
          src={Image1}
          scroller={containerRef}
          $keepRatio={"1920 / 1080"}
        />
        <FullScreenImage src={Image2} scroller={containerRef} />
        <FullScreenImage src={Image3} scroller={containerRef} />
        <FullScreenImage
          src={Image4}
          scroller={containerRef}
          $keepRatio={"1920 / 1080"}
        />
        <FullScreenImage
          src={Image5}
          scroller={containerRef}
          $keepRatio={"1920 / 1080"}
        />
        <FullScreenImage
          src={Image6}
          scroller={containerRef}
          $keepRatio={"1920 / 1080"}
        />
        <Empty />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
