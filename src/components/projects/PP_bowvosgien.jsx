import React, { useRef } from "react";
import styled from "styled-components";
import { ButtonText, ArrowRightUp, ArrowExternal } from "../LayoutAssets";
import {
  FadeInElement,
  FadeInElementDelay,
  FadeInMockUp,
  FadeInMockUpAbsolute,
  FullScreenElement,
} from "../../assets/PageAssets";

import MockupMBAirImage from "../../assets/mockup_mbair.svg";
import MockupIPhoneImage from "../../assets/mockup_iphone.svg";
import Image1 from "../../assets/projects/le_bow_vosgien/render3cut2.png";
import Image2 from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_page_mba.png";
import Image3 from "../../assets/projects/le_bow_vosgien/render2.png";
import Image4 from "../../assets/projects/le_bow_vosgien/render5.png";
import Image5 from "../../assets/projects/le_bow_vosgien/render9.png";
import Image6 from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_mobile_00.png";

const ProjectPageWrapper = styled.section`
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  top: 8px;
  @media (max-width: 899px) {
    width: calc(100% - 16px);
    border-radius: 1rem;
  }
`;

const ProjectPageContent = styled.article`
  width: 100%;
  padding: 6rem calc(var(--margin) + 8px) 5rem var(--margin);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12rem var(--margin);
  @media (max-width: 899px) {
    padding: 5rem var(--margin) 14rem var(--margin);
    gap: 6rem var(--margin);
  }
`;

const ContainerLarge = styled.div`
  position: relative;
  grid-column: 1 / span 4;
`;

const ContainerMedium = styled.div`
  grid-column: 2 / span 3;
  @media (max-width: 899px) {
    grid-column: 1 / span 4;
  }
`;

const ContainerSmall = styled.div`
  grid-column: 2 / span 2;
  @media (max-width: 899px) {
    grid-column: 1 / span 4;
  }
`;

const ProjectText = styled.p`
  font-size: var(--text-big);
  @media (max-width: 899px) {
    font-size: var(--text-basic);
  }
`;

const FullScreenImage = styled.img`
  width: 100%;

  @media (max-width: 899px) {
    width: unset;
    height: 100%;
  }
`;

const DoubleColumns = styled.div`
  display: grid;
  margin-top: var(--margin);
  gap: var(--margin);
  grid-template-columns: repeat(4, 1fr);
  & > div {
    grid-column: span 2;
    @media (max-width: 899px) {
      grid-column: span 4;
    }
  }
  & img {
    border-radius: 1rem;
  }
  @media (max-width: 899px) {
    margin-left: calc(-1 * var(--margin));
    margin-right: calc(-1 * var(--margin));
    margin-top: 8px;
    gap: 8px;
  }
`;

const MockUpMBAContainer = styled.div`
  position: relative;
  aspect-ratio: 1132 / 650;
  max-width: 1132px;
  margin: 0 auto;
  @media (max-width: 899px) {
    flex: 1132px 0 0;
  }
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

const MockUpIPhoneContainer = styled.div`
  position: relative;
  aspect-ratio: 396 / 802;
  max-width: 396px;
  margin: 0 5% 0 auto;
  width: 22%;
  @media (max-width: 899px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const MockupIPhone = styled.img`
  width: 100%;
  position: absolute;
`;

const MockupIPhoneScreen = styled.img`
  position: absolute;
  width: 90%;
  left: 5%;
  top: 2%;
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
`;

const VisitSiteButton = (props) => {
  return (
    <VisitSiteButtonWrapper href={props.href} target="_blank">
      <ButtonText style={{ fontWeight: "400" }}>Visit site</ButtonText>
      <ArrowRightUp />
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
            <FullScreenImage src={Image1} style={{ marginBottom: "-3px" }} />
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
          <FadeInMockUp scroller={containerRef}>
            <MockUpMBAContainer>
              <MockupMBAirScreen src={Image2} />
              <MockupMBAir src={MockupMBAirImage} />
            </MockUpMBAContainer>
          </FadeInMockUp>
          <FadeInMockUpAbsolute scroller={containerRef}>
            <MockUpIPhoneContainer style={{ gridColumn: "4 / span 1" }}>
              <MockupIPhoneScreen src={Image6} />
              <MockupIPhone src={MockupIPhoneImage} />
            </MockUpIPhoneContainer>
          </FadeInMockUpAbsolute>
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
            <FullScreenImage src={Image3} style={{ marginBottom: "-3px" }} />
          </FullScreenElement>
          <DoubleColumns>
            <FadeInElementDelay scroller={containerRef}>
              <img src={Image4} style={{ marginBottom: "-3px" }} />
            </FadeInElementDelay>
            <FadeInElementDelay scroller={containerRef} delay={0.5}>
              <img src={Image5} style={{ marginBottom: "-3px" }} />
            </FadeInElementDelay>
          </DoubleColumns>
        </ContainerLarge>
        <ContainerLarge style={{ display: "flex", justifyContent: "end" }}>
          <VisitSiteButton href="http://le-bow-vosgien.fr" />
        </ContainerLarge>
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
