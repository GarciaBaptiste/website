import React from "react";
import styled from "styled-components";

import QMarkImg from "../assets/questionmark.svg";
import { ThumbnailProject, ThumbnailImg } from "./LayoutAssets";

const Card = styled.div`
  position: relative;
  margin: 4px;
  float: left;
  cursor: pointer;
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
  border-radius: 1rem;
  pointer-events: all;
  transition: top 0.5s ease, height 0.5s ease, opacity 0.5s ease;
`;

const PresentationCardContainer = styled(CardContainer)`
  flex-direction: column;
  transition: gap 0.3s;
  gap: 0;
`;

const PresentationCardSummary = styled.div`
  display: flex;
  align-items: flex-end;
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
  transition: 0.3s;
  height: 0;
  display: flex;
  gap: calc(var(--margin) * 1.5);

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const PresentationFirstBloc = styled.div`
  flex: 1;
  max-width: 970px;
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
    background: var(--grey3);
    border-radius: 1rem;
  }
`;

const BottomCard = styled.div`
  padding: var(--margin);
  background: var(--grey3);
  border-radius: 0 0 1rem 1rem;
  & > * {
    font-size: var(--text-medium);
  }
`;

const ProjectCardTextWrapper = styled.div``;

const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--margin);
  background: linear-gradient(var(--grey3), rgba(0, 0, 0, 0));
  border-radius: 1rem 1rem 0 0;
  z-index: 100;
  & h2 {
    font-size: var(--text-basic);
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

const ProjectTypeSTag = styled(ProjectTypeTag)`
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
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

const PersoTag = () => {
  return (
    <ProjectTypeTag
      style={{
        background: "var(--purple)",
      }}
    >
      perso
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
    overflow-y: auto;
    & > ${PageContainer} {
      height: calc(100dvh - 16px);
      overflow: auto;
      top: 8px;
      padding: 8px;
      opacity: 1;
      cursor: initial;
    }
    & > ${PresentationCardContainer} {
      gap: var(--margin);
    }
    & ${PresentationPageContainer} {
      height: unset;
      opacity: 1;
      padding-bottom: var(--margin);
    }
  }
`;

const TOCCardWrapper = styled(Card)`
  border-radius: 1rem;
  overflow: hidden;
  height: calc(100vh - 16px);
  margin: 4px;
  position: sticky;
  top: 8px;

  @media (max-width: 1300px) {
    display: none;
  }

  & ${GSAPCardWrapper} {
    background: black;
  }

  & ${CardContainer} {
    display: table;
    height: unset;
    color: var(--white);
    pointer-events: all;
    padding: var(--margin);
    border-radius: 1rem;
  }

  & ${ProjectTypeSTag} {
    top: 0.5rem;
    position: absolute;
    margin: 0.75rem;
  }
`;

const TOCLine = styled.a`
  display: table-row;
  cursor: pointer;
  &:hover {
    & > h2,
    & > h3 {
      font-style: italic;
    }
  }
  & > h2 {
    font-weight: 300;
    text-align: right;
    letter-spacing: initial;
    display: table-cell;
    & > u {
      margin-right: 1rem;
    }
  }
  & > div {
    display: table-cell;
    width: var(--margin);
    position: relative;
  }
  & > h3 {
    font-weight: 300;
    letter-spacing: initial;
    display: table-cell;
  }
`;

const TOCMask = styled.div`
  position: absolute;
  width: var(--margin);
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), var(--black));
  right: 0;
  top: 0;
`;

const PresentationCardWrapper = styled(Card)`
  width: calc(100% - 16px);
  height: unset;
  margin: 8px 8px 4px 8px;
  & ${CardContainer} {
    background: var(--holographic);
    background-size: 200%;
    padding: var(--margin);
    border-radius: 1rem;
  }
  & h1,
  & h2,
  & p,
  & u {
    color: var(--black);
    font-weight: 500;
  }
`;

export const ProjectCard = ({ index, onClick, cardsRef, projectData }) => {
  const Thumbnail = projectData.thumbnail;
  const ProjectPage = projectData.projectpage;
  const idx = index + 2;

  return (
    <ProjectCardWrapper onClick={() => onClick(idx)}>
      <GSAPCardWrapper ref={(el) => (cardsRef.current[idx] = el)}>
        <CardContainer>
          <TopCard>
            <h2>
              <u>{projectData.title}</u>
            </h2>
            <ClientTag />
          </TopCard>
          <ThumbnailProject>
            <ThumbnailImg src={Thumbnail} />
          </ThumbnailProject>
          <BottomCard>
            <ProjectCardTextWrapper>
              <p>{projectData.description}</p>
              <p style={{ color: "var(--grey1)" }}>{projectData.keywords}</p>
            </ProjectCardTextWrapper>
          </BottomCard>
        </CardContainer>
        <PageContainer>
          <ProjectPage />
        </PageContainer>
      </GSAPCardWrapper>
    </ProjectCardWrapper>
  );
};

export const PresentationCard = ({ onClick, cardsRef }) => {
  return (
    <PresentationCardWrapper onClick={() => onClick(0)}>
      <GSAPCardWrapper ref={(el) => (cardsRef.current[0] = el)}>
        <PresentationCardContainer>
          <PresentationCardSummary>
            <PresentationLeft>
              <h1>
                <u>Baptiste Garcia</u>,{" "}
              </h1>
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
                Feel free to browse through all my projects here and on my
                instagram, if you are interested in techniques, you can take a
                look at my Github repositories.
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

export const TOCCard = ({ cardsRef }) => {
  return (
    <TOCCardWrapper>
      <GSAPCardWrapper ref={(el) => (cardsRef.current[1] = el)}>
        <CardContainer>
          <TOCLine>
            <h2>
              <u>Logilab.fr</u>
            </h2>
            <h3>website</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>SemWeb.Pro</u>
            </h2>
            <h3>website</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>Logilab</u>
            </h2>
            <h3>calendar</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>CubicWeb.org</u>
            </h2>
            <h3>website</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>FranceArchives</u>
            </h2>
            <h3>website</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>Data-BnF</u>
            </h2>
            <h3>website</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>Napoleonica</u>
            </h2>
            <h3>website</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>LeBowVosgien</u>
            </h2>
            <h3>website</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>StretchTypo</u>
            </h2>
            <h3>typo</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>WaterPoster</u>
            </h2>
            <h3>video</h3>
          </TOCLine>
          <TOCLine>
            <h2>
              <u>LePetitSalon</u>
            </h2>
            <h3>catalog</h3>
          </TOCLine>
        </CardContainer>
      </GSAPCardWrapper>
    </TOCCardWrapper>
  );
};
