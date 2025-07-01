import React, { useRef } from "react";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  TextSmall,
  DoubleColumns,
  MockUpMBAir,
  Empty,
} from "../../assets/PageAssets";
import { LazyVideo } from "../../components/LayoutAssets";

import Image1 from "../../assets/projects/calendrier/1_1920x1080.png";
import Image1PH from "../../assets/projects/calendrier/1_1920x1080_placeholder.png";
import Image2 from "../../assets/projects/calendrier/2_1920x1080.png";
import Image2PH from "../../assets/projects/calendrier/2_1920x1080_placeholder.png";
import Video1 from "../../assets/projects/calendrier/calendrier_demo_1.mp4";
import Video2 from "../../assets/projects/calendrier/calendrier_demo_2.mp4";
import Video3 from "../../assets/projects/calendrier/calendrier_demo_3.mp4";

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <FullScreenImage src={Image1} srcPH={Image1PH} scroller={containerRef} />
        <TextSmall scroller={containerRef}>
          Prototype for the redesign of an internal calendar application. <br /><br />
          The idea behind this proof of concept is to merge two legacy
          applications and make them simpler and more intuitive.<br /><br />
          This prototype has two main purposes: to log future events and to keep
          track of past activities.
        </TextSmall>
        <MockUpMBAir
          scroller={containerRef}
          mBAirVideo={true}
          screenMBAir={Video1}
          $scrollOverflow={true}
        />
        <TextSmall scroller={containerRef}>
          When the user clicks on a past day, they can input their activities to
          calculate the time spent working against the project’s allocated
          budget. When clicking on a future day, they can add an event such as a
          client meeting, a training session, an absence, etc.
        </TextSmall>
        <DoubleColumns scroller={containerRef} $centered={true}>
          <LazyVideo src={Video2} autoPlay loop muted playsInline />
          <LazyVideo src={Video3} autoPlay loop muted playsInline />
        </DoubleColumns>
        <TextSmall scroller={containerRef}>
          It’s also possible to select multiple team members from the list to
          see who is available at any given time.
        </TextSmall>
        <FullScreenImage src={Image2} srcPH={Image2PH} scroller={containerRef} />
        <Empty />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
