import React, { useEffect, useState } from "react";
import styled from "styled-components";

import QMarkImg from "../assets/questionmark.svg";

const Card = styled.div`
  position: relative;
  margin: 4px;
  border-radius: 1rem;
  scroll-snap-align: start;
  float: left;

  @media (max-height: 2400px) and (min-width: 1301px) {
    height: calc((100vh - 8px) / 4 - 8px);
  }
  @media (max-height: 1700px) and (min-width: 1301px) {
    height: calc((100vh - 8px) / 3 - 8px);
  }
  @media (max-height: 1000px) and (min-width: 1301px) {
    height: calc((100vh - 8px) / 2 - 8px);
  }
  @media (max-height: 600px) and (min-width: 1301px) {
    height: calc((100vh - 8px) / 1.5 - 8px);
  }

  @media (max-height: 2400px) and (max-width: 1300px) {
    height: calc(((100vh - (5rem + 2px)) / 4) + 5rem - 8px);
  }
  @media (max-height: 1700px) and (max-width: 1300px) {
    height: calc(((100vh - (5rem + 2px)) / 3) + 5rem - 9px);
  }
  @media (max-height: 1000px) and (max-width: 1300px) {
    height: calc(((100vh - (5rem + 2px)) / 2) + 5rem - 10px);
  }
  @media (max-height: 600px) and (max-width: 1300px) {
    height: calc((100vh - 8px) / 1.5 - 8px);
  }
  @media (max-height: 500px) and (max-width: 1300px) {
    height: calc((100vh - 8px) - 8px);
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
    padding-top: calc(5rem + 2px);
    margin-top: calc(-5rem + 2px);
    &:first-child,
    &:nth-child(2) {
      margin-top: 4px;
    }
  }
  @media (max-width: 650px) {
    width: calc(100% - 8px);
    height: unset;
    margin-top: calc(-5rem + 2px);
    &:first-child {
      margin-top: 4px;
    }
    &:nth-child(2) {
      margin-top: calc(-5rem + 2px);
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: var(--margin);
  width: 100%;
  height: 100%;

  @media (max-width: 650px) {
    margin: 0;
    height: unset;
  }
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
  transition: top 0.5s ease, height 0.5s ease, opacity 0.5s ease;
`;

const PresentationCardContainer = styled(CardContainer)`
  flex-direction: column;
  gap: 0;
`;

const PresentationTop = styled.div`
  flex: 1;
`;

const PresentationBottom = styled.div`
  display: flex;
  justify-content: end;
`;

const PresentationPageContainer = styled.div`
  opacity: 0;
  transition: 0.3s;
  height: 0;
  max-width: 970px;
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

const QuestionMark = styled.img``;

const ProjectCardWrapper = styled(Card)``;

const GradientMask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 5rem;
  transition: opacity 0.5s;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    var(--white) 100%
  );

  @media (max-width: 650px) {
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
  gap: var(--margin);
  height: calc(100% + var(--margin) - 1px);
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
  transition: opacity 0.5s;
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

  return isLargeTag ? <ClientTag /> : <ClientSTag />;
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

  return isLargeTag ? <PersoTag /> : <PersoSTag />;
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
  padding: var(--margin);
  flex: 1;
  scroll-snap-align: none;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1300px) {
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

const GSAPCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: var(--margin);
  border-radius: 1rem;
  background: var(--white);
  transform-style: preserve-3d;
  &.transition {
    & > ${CardContainer} {
      height: unset;
    }
    & ${GradientMask}, & ${ProjectTypeTag} {
      opacity: 0;
    }
    & ${About} {
      opacity: 0;
    }
  }
  &.fullscreen {
    overflow-y: auto;
    & > ${PageContainer} {
      height: 100%;
      overflow: auto;
      top: 0;
      padding: var(--margin);
      opacity: 1;
      @media (max-width: 1300px) {
        position: relative;
        height: unset;
      }
    }
    & ${PresentationPageContainer} {
      height: unset;
      opacity: 1;
      padding-bottom: var(--margin);
    }
  }
`;

const PresentationCardWrapper = styled(Card)`
  & ${GSAPCardWrapper} {
    background: var(--holographic);
    background-size: 200%;
  }
`;

export const ProjectCard = ({ index, onClick, cardsRef, projectData }) => {
  const Thumbnail = projectData.thumbnail;
  const ProjectPage = projectData.projectpage;
  const idx = index + 1;

  return (
    <ProjectCardWrapper onClick={() => onClick(idx)}>
      <GSAPCardWrapper ref={(el) => (cardsRef.current[idx] = el)}>
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
          <PresentationPageContainer>
            <div>
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
            </div>
          </PresentationPageContainer>
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
