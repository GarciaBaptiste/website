import React, { useEffect, useState } from "react";
import styled from "styled-components";

import QMarkImg from "../assets/questionmark.svg";

const Card = styled.div`
  position: relative;
  margin: 4px;
  border-radius: 1rem;
  scroll-snap-align: start;
  transition: height 0.3s;
  float: left;

  @media (max-height: 2400px) {
    height: calc((100vh - 8px) / 4 - 8px);
  }
  @media (max-height: 1700px) {
    height: calc((100vh - 8px) / 3 - 8px);
  }
  @media (max-height: 1000px) {
    height: calc((100vh - 8px) / 2 - 8px);
  }

  @media (max-width: 3900px) {
    width: calc(100% / 5 - 8px);
  }
  @media (max-width: 3250px) {
    width: calc(100% / 4 - 8px);
  }
  @media (max-width: 2600px) {
    width: calc(100% / 3 - 8px);
  }
  @media (max-width: 1950px) {
    width: calc(100% / 2 - 8px);
  }
  @media (max-width: 1300px) {
    width: calc(100% - 8px);
    height: unset;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  height: 100%;

  @media (max-width: 1300px) {
    margin: 0;
  }
`;

const ProjectPageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  top: 100%;
  left: 0;
  opacity: 0;
  padding: 0 3rem;
  border-radius: 1rem;
  transition: top 0.5s ease, height 0.5s ease, opacity 0.5s ease;
`;

const GSAPCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 3rem;
  border-radius: 1rem;
  background: var(--white);
  transform-style: preserve-3d;
  &.fullscreen {
    overflow-y: auto;
    & > ${ProjectPageContainer} {
      height: 100%;
      overflow: auto;
      top: 0;
      padding: 3rem;
      opacity: 1;
    }
  }
`;

const PresentationCardWrapper = styled(Card)`
  & ${GSAPCardWrapper} {
    background: var(--holographic);
    background-size: 200%;
  }
`;

const PresentationCardContainer = styled(CardContainer)`
  flex-direction: column;
  gap: 3rem;
`;

const PresentationTop = styled.div`
  flex: 1;
`;

const PresentationBottom = styled.div`
  display: flex;
  justify-content: end;
`;

const About = styled.div`
  display: flex;
  gap: 1rem;
`;

const AboutText = styled.p`
  font-weight: normal;
  font-size: 2rem;
`;

const QuestionMark = styled.img``;

const ProjectCardWrapper = styled(Card)``;

const GradientMask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 5rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    var(--white) 100%
  );

  @media (max-width: 1300px) {
    display: none;
  }
`;

const RightCard = ({ children }) => {
  return (
    <RightCardWrapper>
      {children}
      <GradientMask />
    </RightCardWrapper>
  );
};

const RightCardWrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  gap: 3rem;
  height: calc(100% + 3rem - 1px);
  overflow: hidden;
`;

const ProjectCardTextWrapper = styled.div``;

const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const ProjectTypeTag = styled.div`
  font-family: "JetBrains";
  font-size: var(--text-small);
  color: var(--white);
  padding: 0.25rem 0.5rem 0.1rem 0.5rem;
  font-weight: 300;
`;

const ProjectTypeSTag = styled(ProjectTypeTag)`
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  position: absolute;
  margin: 0.75rem;
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

const ClientSTag = () => {
  return (
    <div>
      <ProjectTypeSTag
        style={{
          background: "var(--red)",
        }}
      >
        c
      </ProjectTypeSTag>
    </div>
  );
};

const PersoSTag = () => {
  return (
    <div>
      <ProjectTypeSTag
        style={{
          background: "var(--purple)",
        }}
      >
        p
      </ProjectTypeSTag>
    </div>
  );
};

const ResponsiveClientTag = () => {
  const [isLargeTag, setIsLargeTag] = useState(
    window.innerWidth >= 900 ||
      (window.innerWidth <= 650 && window.innerWidth >= 450)
  );
  const handleResize = () => {
    setIsLargeTag(
      window.innerWidth >= 900 ||
        (window.innerWidth <= 650 && window.innerWidth >= 450)
    );
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return isLargeTag ? (
    <ClientTag />
  ) : (
    <ProjectTypeSTag
      style={{
        borderColor: "var(--red)",
        color: "var(--red)",
        margin: 0,
        position: "relative",
      }}
    >
      c
    </ProjectTypeSTag>
  );
};

const ResponsivePersoTag = () => {
  const [isLargeTag, setIsLargeTag] = useState(
    window.innerWidth >= 900 ||
      (window.innerWidth <= 650 && window.innerWidth >= 450)
  );
  const handleResize = () => {
    setIsLargeTag(
      window.innerWidth >= 900 ||
        (window.innerWidth <= 650 && window.innerWidth >= 450)
    );
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLargeTag ? (
    <PersoTag />
  ) : (
    <ProjectTypeSTag
      style={{
        borderColor: "var(--purple)",
        color: "var(--purple)",
        margin: 0,
        position: "relative",
      }}
    >
      p
    </ProjectTypeSTag>
  );
};

const LineBreak = styled.div`
  height: 0.75rem;
`;

const TOCCardWrapper = styled(Card)`
  background: var(--black);
  border-radius: 1rem;
  overflow-y: auto;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  margin: 4px;
  padding: 3rem;
  flex: 1;
  scroll-snap-align: none;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 650px), (max-width: 1300px) and (max-height: 700px) {
    display: none;
  }

  & ${CardContainer} {
    display: table;
    height: unset;
    color: var(--white);
    pointer-events: all;
    min-width: 35rem;
  }

  & ${ProjectTypeSTag} {
    top: 0.5rem;
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
  }
  & > div {
    display: table-cell;
    width: 3rem;
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
  width: 3rem;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), var(--black));
  right: 0;
  top: 0;
`;

export const ProjectCard = ({ index, onClick, cardsRef, projectData }) => {
  const Thumbnail = projectData.thumbnail;
  const ProjectPage = projectData.projectpage;

  return (
    <ProjectCardWrapper onClick={() => onClick(index)}>
      <GSAPCardWrapper ref={(el) => (cardsRef.current[index] = el)}>
        <CardContainer>
          <LeftCard>
            <Thumbnail />
            <ResponsiveClientTag />
          </LeftCard>
          <RightCard>
            <ProjectCardTextWrapper>
              <h2>
                <u>{projectData.title}</u>
              </h2>
              <LineBreak />
              <h3>{projectData.subtitle}</h3>
              <p>{projectData.description}</p>
              <ul>
                {projectData.keywords.map((keyword, idx) => (
                  <li key={idx}>{keyword}</li>
                ))}
              </ul>
            </ProjectCardTextWrapper>
          </RightCard>
        </CardContainer>
        <ProjectPageContainer>
          <ProjectPage />
        </ProjectPageContainer>
      </GSAPCardWrapper>
    </ProjectCardWrapper>
  );
};

export const PresentationCard = () => {
  return (
    <PresentationCardWrapper>
      <GSAPCardWrapper>
        <PresentationCardContainer>
          <PresentationTop>
            <h1>
              <u>Baptiste Garcia</u>,
            </h1>
            <LineBreak />
            <h2>
              Graphic Designer &<br />
              Creative Developper
            </h2>
            <LineBreak />
            <p>based in Paris.</p>
          </PresentationTop>
          <PresentationBottom>
            <About>
              <AboutText>About</AboutText>
              <QuestionMark src={QMarkImg} />
            </About>
          </PresentationBottom>
        </PresentationCardContainer>
      </GSAPCardWrapper>
    </PresentationCardWrapper>
  );
};

export const TOCCard = () => {
  return (
    <TOCCardWrapper>
      <CardContainer>
        <TOCLine>
          <h2>
            <u>Logilab.fr</u>
          </h2>
          <ClientSTag />
          <h3>website</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>SemWeb.Pro</u>
          </h2>
          <PersoSTag />
          <h3>website</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>Logilab</u>
          </h2>
          <ClientSTag />
          <h3>calendar</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>CubicWeb.org</u>
          </h2>
          <ClientSTag />
          <h3>website</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>FranceArchives</u>
          </h2>
          <PersoSTag />
          <h3>website</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>Data-BnF</u>
          </h2>
          <PersoSTag />
          <h3>website</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>Napoleonica</u>
          </h2>
          <ClientSTag />
          <h3>website</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>LeBowVosgien</u>
          </h2>
          <PersoSTag />
          <h3>website</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>StretchTypo</u>
          </h2>
          <ClientSTag />
          <h3>typo</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>WaterPoster</u>
          </h2>
          <PersoSTag />
          <h3>video</h3>
        </TOCLine>
        <TOCLine>
          <h2>
            <u>LePetitSalon</u>
          </h2>
          <PersoSTag />
          <h3>catalog</h3>
        </TOCLine>
      </CardContainer>
      <TOCMask />
    </TOCCardWrapper>
  );
};
