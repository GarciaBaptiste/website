import React from "react";
import styled from "styled-components";

import QMarkImg from "../assets/questionmark.svg";
import {
  ThumbnailProject,
  LowQualityImg,
  ThumbnailImg,
  SmileyFace,
  EmptyNegativeSpace,
  ArrowExternal,
  ContactButton,
} from "./LayoutAssets";

const Card = styled.div`
  position: relative;
  margin: 4px;
  float: left;
  cursor: ${(props) => (props.$projectPage ? "pointer" : "initial")};
`;

const CardContainer = styled.div`
  display: flex;
  gap: var(--margin);
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const PageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  top: 100%;
  left: 0;
  opacity: 0;
  padding: 0 var(--margin);
  pointer-events: all;
  transition: top 0.5s ease, height 0.5s ease, opacity 0.5s 0.15s ease;
`;

const PresentationCardContainer = styled(CardContainer)`
  flex-direction: column;
  transition: gap 0.3s;
  gap: 0;
  pointer-events: all;
  // height: calc(100% - 16px);
  scrollbar-width: none;
`;

const PresentationCardSummary = styled.div`
  display: flex;
  align-items: flex-end;
  transition: padding-right 0.5s ease-in-out;
`;

const PresentationLeft = styled.div`
  flex: 1;
  & > * {
    display: inline;
    font-size: var(--text-big);
  }
`;

const PresentationRight = styled.div`
  display: flex;
  justify-content: end;
`;

const PresentationPageContainer = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease-out, max-height 0.3s ease-out;
  max-height: 0;
  display: flex;
  gap: calc(var(--margin) * 1.5);

  @media (max-width: 900px) {
    flex-direction: column;
  }

  & p {
    font-size: var(--text-big);
  }
`;

const PresentationFirstBloc = styled.div`
  flex: 1;
  max-width: 1010px;

  & a {
    color: var(--grey2);
  }

  & a:hover {
    color: var(--grey1);
  }

  & a:hover > .arrow-external {
    filter: invert(0.7);
  }

  & .arrow-external {
    filter: invert(0.2);
  }
`;

const PresentationSecondBloc = styled.div`
  width: 350px;
  display: flex;
  gap: var(--margin);
  flex-direction: column;

  @media (max-width: 900px) {
    flex-direction: row;
    width: 100%;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SecondBlocFirstHalf = styled.div`
  @media (max-width: 900px) {
    flex: 1;
  }
`;

const SecondBlocSecondHalf = styled.div`
  @media (max-width: 900px) {
    flex: 1;
  }
`;

const About = styled.div`
  display: flex;
  gap: 1rem;
  opacity: 1;
  transition: opacity 0.3s;
`;

const AboutText = styled.p`
  font-weight: normal;
  font-size: 2rem;
  @media (max-width: 670px) {
    display: none;
  }
`;

const QuestionMark = styled.img`
  width: 32px;
  height: 32px;
`;

const ProjectCardWrapper = styled(Card)`
  &:hover ${ThumbnailImg} {
    transform: scale(1.1);
  }
  & ${CardContainer} {
    gap: 0;
    background: ${(props) =>
      props.$projectPage ? "var(--grey3)" : "var(--white)"};
    border-radius: 2rem;
    & p,
    & h2 {
      color: ${(props) =>
        props.$projectPage ? "var(--white)" : "var(--black)"};
    }
  }
`;

const BottomCard = styled.div`
  padding: calc(var(--margin) * 3) var(--margin) var(--margin) var(--margin);
  border-radius: 0 0 1rem 1rem;
  z-index: 100;
  & > * {
    font-size: var(--text-medium);
  }
  @media (max-width: 899px) {
    background: linear-gradient(
      rgba(0, 0, 0, 0),
      ${(props) => (props.$projectPage ? "var(--grey3)" : "rgba(0, 0, 0, 0)")}
        80%
    );
  }
`;

const ProjectCardTextWrapper = styled.div``;

const TopCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--margin) var(--margin) calc(var(--margin) * 3) var(--margin);
  // background: linear-gradient(var(--grey3) 33%, rgba(0, 0, 0, 0));
  border-radius: 1rem 1rem 0 0;
  z-index: 100;
  & h2 {
    font-size: var(--text-basic);
    z-index: 1000;
  }
`;

const ProjectTypeTag = styled.div`
  font-family: "JetBrains";
  font-size: var(--text-small);
  color: var(--white);
  padding: 0.25rem 0.5rem 0.1rem 0.5rem;
  font-weight: 300;
  transition: opacity 0.5s;
  border-radius: 4px;
`;

const ClientTag = () => {
  return (
    <ProjectTypeTag
      style={{
        background: "var(--red)",
      }}
    >
      client
    </ProjectTypeTag>
  );
};

const InfoTag = () => {
  return (
    <ProjectTypeTag
      style={{
        background: "var(--green)",
        color: "var(--black)",
      }}
    >
      info
    </ProjectTypeTag>
  );
};

const PersoTag = () => {
  return (
    <ProjectTypeTag
      style={{
        background: "var(--purple)",
      }}
    >
      personal
    </ProjectTypeTag>
  );
};

const LineBreak = styled.div`
  height: 0.75rem;
`;

const GSAPCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--grey2);
  opacity: 0;
  transform: scale(0.9) translateY(6rem);
  &.transition {
    & ${ProjectTypeTag} {
      opacity: 0;
    }
    & ${About} {
      opacity: 0;
    }
    & ${ThumbnailImg} {
      transition: opacity 0.3s, filter 1s;
      transform: scale(1.1);
      opacity: 0;
      filter: blur(1rem);
    }
  }
  &.fullscreen {
    & > ${PageContainer} {
      height: calc(100dvh - 8px);
      top: 0px;
      padding: 8px;
      opacity: 1;
      cursor: initial;
    }
    & > ${PresentationCardContainer} {
      gap: var(--margin);
      overflow-y: auto;
      cursor: initial;
    }
    & ${PresentationPageContainer} {
      transition: opacity 0.3s ease-out, max-height 0.8s ease-out;
      max-height: 100%;
      opacity: 1;
      cursor: initial;
      @media (max-width: 899px) {
        transition: opacity 0.3s ease-out, max-height 1.2s ease-out;
        max-height: 250%;
      }
    }
  }
`;

const PresentationCardWrapper = styled.div`
  width: calc(100% - 16px);
  height: unset;
  margin: 8px 8px 4px 8px;
  & ${CardContainer} {
    background: var(--holographic);
    background-size: 100vw 100vh;
    padding: var(--margin);
    border-radius: 2rem;
    cursor: pointer;
  }
  & h1,
  & h2,
  & h3,
  & u {
    color: var(--black);
    font-weight: 500;
  }
  & p {
    color: var(--black);
    font-weight: 400;
  }
`;

export const ProjectCard = ({ index, onClick, cardsRef, projectData }) => {
  const Thumbnail = projectData.thumbnail || undefined;
  const ThumbnailPlaceholder = projectData.thumbnail_placeholder || undefined;
  const ProjectPage = projectData.projectpage || undefined;
  const idx = index + 1;

  return (
    <ProjectCardWrapper
      onClick={ProjectPage ? () => onClick(idx) : undefined}
      $projectPage={ProjectPage}
    >
      <GSAPCardWrapper ref={(el) => (cardsRef.current[idx] = el)}>
        <CardContainer>
          <TopCard>
            <h2>{projectData.title}</h2>
            {projectData.type === "personal" ? (
              <PersoTag />
            ) : projectData.type === "client" ? (
              <ClientTag />
            ) : (
              <InfoTag />
            )}
          </TopCard>
          {Thumbnail ? (
            <ThumbnailProject>
              <LowQualityImg
                lowQualitySrc={ThumbnailPlaceholder}
                highQualitySrc={Thumbnail}
              >
                <ThumbnailImg />
              </LowQualityImg>
            </ThumbnailProject>
          ) : (
            <EmptyNegativeSpace />
          )}
          <BottomCard $projectPage={ProjectPage}>
            <ProjectCardTextWrapper>
              <p>
                {projectData.description}
                {projectData.customContent}
              </p>
              <p style={{ color: "var(--grey1)" }}>{projectData.keywords}</p>
            </ProjectCardTextWrapper>
          </BottomCard>
        </CardContainer>
        {ProjectPage ? (
          <PageContainer>
            <ProjectPage />
          </PageContainer>
        ) : (
          ""
        )}
      </GSAPCardWrapper>
    </ProjectCardWrapper>
  );
};

export const PresentationCard = ({ onClick, cardsRef, toggleModal }) => {
  return (
    <PresentationCardWrapper onClick={() => onClick(0)}>
      <GSAPCardWrapper ref={(el) => (cardsRef.current[0] = el)}>
        <PresentationCardContainer>
          <PresentationCardSummary>
            <PresentationLeft>
              <h1>Baptiste Garcia, </h1>
              <h2>
                Graphic Designer &<br />
                Creative Developper{" "}
              </h2>
              <p>based in Paris.</p>
            </PresentationLeft>
            <PresentationRight>
              <About>
                <AboutText>About</AboutText>
                <QuestionMark src={QMarkImg} />
              </About>
            </PresentationRight>
          </PresentationCardSummary>
          <PresentationPageContainer>
            <PresentationFirstBloc>
              <p>
                Passionate about design, my experiences have taught me to put
                technique at the service of aesthetics, originality, and
                ergonomics.
              </p>
              <LineBreak />
              <p>
                Today, I use my skills and expertise to serve a diverse range of
                clients by crafting unique visual identities and implementing
                softwares and websites.
              </p>
              <LineBreak />
              <p>
                Feel free to browse through all my projects here and on my{" "}
                <a href="https://instagram.com/bapt.garcia" target="_blank">
                  Instagram <ArrowExternal />
                </a>
                , if you are interested in techniques, you can take a look at my{" "}
                <a href="https://github.com/GarciaBaptiste" target="_blank">
                  Github repositories <ArrowExternal />
                </a>
                .
              </p>
              <p>
                You can also contact me by{" "}
                <ContactButton onClick={toggleModal}>Email</ContactButton>.
              </p>
            </PresentationFirstBloc>
            <PresentationSecondBloc>
              <SecondBlocFirstHalf>
                <h3>Expertise</h3>
                <LineBreak />
                <p>Art direction</p>
                <p>Front-end (React, CSS)</p>
                <p>WebGL</p>
              </SecondBlocFirstHalf>
              <SecondBlocSecondHalf>
                <h3>Softwares</h3>
                <LineBreak />
                <p>Figma</p>
                <p>Photoshop / Illustrator</p>
                <p>Blender / Cycles</p>
              </SecondBlocSecondHalf>
            </PresentationSecondBloc>
          </PresentationPageContainer>
        </PresentationCardContainer>
      </GSAPCardWrapper>
    </PresentationCardWrapper>
  );
};

export const FooterCard = ({ toggleModal }) => {
  return (
    <FooterCardWrapper
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      onTouchStart={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <p>See you soon!&nbsp;&nbsp;&nbsp;</p>
      <SmileyFace />
      <p>/&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <ContactButton
        onClick={toggleModal}
        style={{ fontSize: "var(--text-medium)" }}
      >
        Email
      </ContactButton>
    </FooterCardWrapper>
  );
};

const FooterCardWrapper = styled.footer`
  width: calc(100% - ((var(--margin) + 8px) * 2));
  height: 4rem;
  margin: 0 calc(var(--margin) + 8px) calc(var(--margin) - 1rem + 8px)
    calc(var(--margin) + 8px);
  background: var(--white);
  border-radius: 2rem;
  padding: 1rem 2rem;
  cursor: pointer;

  & * {
    color: var(--black);
    font-weight: 400;
    display: inline;
  }

  @media (max-width: 899px) {
    width: calc(100% - ((var(--margin) - 1rem + 8px) * 2));
    margin: 0 calc(var(--margin) - 1rem + 8px) calc(var(--margin) - 1rem + 8px)
      calc(var(--margin) - 1rem + 8px);
  }
`;
