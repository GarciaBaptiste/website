import React, { useRef } from "react";
import styled from "styled-components";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  FullScreenBackground,
  TextMedium,
  TextSmall,
  DoubleColumns,
  MockUpDouble,
  VisitSiteButton,
  Empty,
} from "../../assets/PageAssets";

import Image1 from "../../assets/projects/logilab_fr/logilab_fr_image1.svg";
import Image2 from "../../assets/projects/logilab_fr/logilab_fr_image2.svg";
import Image3 from "../../assets/projects/logilab_fr/logilab_fr_mobile.png";
import Video1 from "../../assets/projects/logilab_fr/demo.mp4";

const CustomDoubleImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--margin);

  & > img {
    margin: 18rem 0;

    @media (max-width: 899px) {
      margin: 0;
      grid-column: 2 / span 2;
    }

    &:first-child {
      grid-column: 2;

      @media (max-width: 899px) {
        grid-column: 2 / span 2;
        align-self: end;
      }
    }
  }
`;

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <TextSmall scroller={containerRef}>
          Proposal for a radical redesign of Logilab's visual identity. The goal
          was to showcase all aspects of the company through an appealing and
          accessible interface.
        </TextSmall>
        <FullScreenBackground scroller={containerRef}>
          <CustomDoubleImageContainer>
            <img src={Image1} />
            <img src={Image2} />
          </CustomDoubleImageContainer>
        </FullScreenBackground>
        <TextSmall scroller={containerRef}>
          The resulting prototype brings together various levels of information,
          ranging from a general presentation of the company, to a training
          catalog, and a gallery of selected projects.
        </TextSmall>
        <MockUpDouble
          scroller={containerRef}
          mBAirVideo={true}
          screenMBAir={Video1}
          screenIPhone={Image3}
        />
        <TextSmall scroller={containerRef}>
          Each section is distinguished by its color scheme while maintaining a
          cohesive overall identity.
        </TextSmall>
        <TextSmall scroller={containerRef} $afterText={true}>
          The final section leads to a list of research articles on the semantic
          web, featuring its own semantic search engine to demonstrate the
          company's expertise and interest in this field.
        </TextSmall>
        <Empty />
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
