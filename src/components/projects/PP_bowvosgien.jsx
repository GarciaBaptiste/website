import React, { useRef } from "react";
import styled from "styled-components";
import { ButtonText, ArrowRight, ArrowExternal } from "../LayoutAssets";
import { FadeInElement, FullScreenElement } from "../../assets/PageAssets";

import MockupMBAirImage from "../../assets/mockup_mbair.svg";
import Image1 from "../../assets/projects/le_bow_vosgien/render3cut2.png";
import Image2 from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_page_mba.png";
import Image3 from "../../assets/projects/le_bow_vosgien/render2.png";
import Image4 from "../../assets/projects/le_bow_vosgien/render5.png";
import Image5 from "../../assets/projects/le_bow_vosgien/render9.png";

const ProjectPageWrapper = styled.section`
  position: absolute;
  overflow-y: auto;
  width: calc(100% - 8px);
  height: calc(100% + 16px);
  top: -8px;
`;

const ProjectPageContent = styled.article`
  width: 100%;
  padding: 6rem calc(2rem + 8px) 5rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12rem 2rem;
`;

const ContainerLarge = styled.div`
  grid-column: 1 / span 4;
`;

const ContainerMedium = styled.div`
  grid-column: 2 / span 3;
`;

const ContainerSmall = styled.div`
  grid-column: 2 / span 2;
`;

const ProjectText = styled.p`
  font-size: var(--text-big);
`;

const FullScreenImage = styled.img`
  width: 100%;
`;

const DoubleColumns = styled.div`
  display: grid;
  margin-top: 2rem;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  & > div {
    grid-column: span 2;
  }
  & img {
    border-radius: 1rem;
  }
`;

const MockUpMBAContainer = styled.div`
  position: relative;
  aspect-ratio: 1132 / 650;
  max-width: 1132px;
  margin: 0 auto;
`;

const MockupMBAir = styled.img`
  width: 100%;
  position: absolute;
`;

const MockupMBAirScreen = styled.img`
  position: absolute;
  width: 77.8%;
  left: 11.1%;
  top: 5.5%;
`;

const VisitSiteButtonWrapper = styled.a`
  cursor: pointer;
  background: var(--white);
  color: var(--black);
  border: none;
  padding: 1rem 1rem 1rem 1.5rem;
  display: flex;
  gap: 1rem;
  border-radius: 2rem;
  transition: background 0.2s;
  pointer-events: all;
  display: inline-flex;

  &:hover {
    background: white;
  }

  @media (max-width: 650px) {
    padding: 1rem;
  }
`;

const VisitSiteButton = (props) => {
  return (
    <VisitSiteButtonWrapper href={props.href} target="_blank">
      <ButtonText style={{ fontWeight: "400" }}>Visit site</ButtonText>
      <ArrowRight />
    </VisitSiteButtonWrapper>
  );
};

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <ContainerLarge>
          <FullScreenElement scroller={containerRef}>
            <FullScreenImage src={Image1} style={{ marginBottom: "-10px" }} />
          </FullScreenElement>
        </ContainerLarge>
        <ContainerMedium>
          <FadeInElement scroller={containerRef}>
            <ProjectText>
              This carte blanche granted by Le Bow Vosgien, a scenographer with
              a unique profile offering various services related to the
              performing arts, materialized into a virtual and narrative stroll
              that showcases the story of the young craftsman and his work.
            </ProjectText>
          </FadeInElement>
        </ContainerMedium>
        <ContainerLarge>
          <FadeInElement scroller={containerRef}>
            <MockUpMBAContainer>
              <MockupMBAirScreen src={Image2} />
              <MockupMBAir src={MockupMBAirImage} />
            </MockUpMBAContainer>
          </FadeInElement>
        </ContainerLarge>
        <ContainerSmall>
          <FadeInElement scroller={containerRef}>
            <ProjectText>
              The project, carried out with the participation of{" "}
              <a href="https://khanh-robert.fr/" target="_blank">
                Khanh Robert <ArrowExternal />
              </a>{" "}
              (3D artist) and{" "}
              <a href="https://www.leodurand.com/" target="_blank">
                Léo Durand <ArrowExternal />
              </a>{" "}
              (UI/UX design), called upon all of our shared skills in 3D,
              interface design, as well as front-end development.
            </ProjectText>
          </FadeInElement>
        </ContainerSmall>
        <ContainerLarge>
          <FullScreenElement scroller={containerRef}>
            <FullScreenImage src={Image3} style={{ marginBottom: "-10px" }} />
          </FullScreenElement>
          <DoubleColumns>
            <FadeInElement scroller={containerRef}>
              <img src={Image4} />
            </FadeInElement>
            <FadeInElement scroller={containerRef}>
              <img src={Image5} />
            </FadeInElement>
          </DoubleColumns>
        </ContainerLarge>
        <ContainerSmall style={{ display: "flex", justifyContent: "center" }}>
          <VisitSiteButton href="http://le-bow-vosgien.fr" />
        </ContainerSmall>
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
