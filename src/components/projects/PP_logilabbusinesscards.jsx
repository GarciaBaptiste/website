import React, { useRef } from "react";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  TextSmall,
} from "../../assets/PageAssets";

import Image1 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame1.png";
import Image1PH from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame1_placeholder.png";
import Image2 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame2.png";
import Image2PH from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame2_placeholder.png";
import Image3 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame3.png";
import Image3PH from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame3_placeholder.png";
import Image4 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame4.png";
import Image4PH from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame4_placeholder.png";
import Image5 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame5.png";
import Image5PH from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame5_placeholder.png";
import Image6 from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame6.png";
import Image6PH from "../../assets/projects/logilab_businesscards/businesscard_logilab_frame6_placeholder.png";

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
          srcPH={Image1PH}
          scroller={containerRef}
          $keepRatio={"1920 / 1080"}
        />
        <FullScreenImage
          src={Image2}
          srcPH={Image2PH}
          scroller={containerRef}
        />
        <FullScreenImage
          src={Image3}
          srcPH={Image3PH}
          scroller={containerRef}
        />
        <FullScreenImage
          src={Image4}
          srcPH={Image4PH}
          scroller={containerRef}
          $keepRatio={"1920 / 1080"}
        />
        <FullScreenImage
          src={Image5}
          srcPH={Image5PH}
          scroller={containerRef}
          $keepRatio={"1920 / 1080"}
        />
        <FullScreenImage
          src={Image6}
          srcPH={Image6PH}
          scroller={containerRef}
          $keepRatio={"1920 / 1080"}
        />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
