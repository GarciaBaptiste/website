import React, { forwardRef, useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  border-radius: 1.5rem;
  scroll-snap-align: start;
  transition: height 0.3s;
  padding-top: 2rem;
  float: left;

  @media (max-height: 2800px) {
    height: calc((100vh - 2rem) / 4);
  }
  @media (max-height: 2100px) {
    height: calc((100vh - 2rem) / 3);
  }
  @media (max-height: 1400px) {
    height: calc((100vh - 2rem) / 2);
  }
  @media (max-height: 700px) {
    height: calc((100vh - 2rem) / 1);
  }
  @media (max-width: 450px) and (max-height: 800px) and (orientation: portrait) {
    height: calc((100vh - 2rem) / 1.5);
  }

  @media (max-width: 3900px) {
    width: calc(100% / 6);
  }
  @media (max-width: 3250px) {
    width: calc(100% / 5);
  }
  @media (max-width: 2600px) {
    width: calc(100% / 4);
  }
  @media (max-width: 1950px) {
    width: calc(100% / 3);
  }
  @media (max-width: 1300px) {
    width: calc(100% / 2);
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  margin: 3rem;
  gap: 3rem;
  width: calc(100% - 6rem);
  height: calc(100% - 6rem);
`;

const VersoContainer = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background: var(--white);
  padding: 3rem;
  transform: rotateY(180deg) translateZ(1px);
  backface-visibility: hidden;
  border-radius: 1.5rem;
`;

const GSAPCardWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  background: var(--white);
  transform-style: preserve-3d;
`;

const PresentationCardWrapper = styled(Card)`
  & ${GSAPCardWrapper} {
    background: var(--holographic);
    background-size: 200%;
  }
`;

const PresentationCardContainer = styled(CardContainer)`
  flex-direction: column;
  gap: 0;
`;

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
  height: 100%;
  align-items: start;
`;

const ProjectTypeTag = styled.div`
  font-size: var(--text-medium);
  padding: 0.5rem 1.5rem;
  border: solid 1px;
  border-radius: 2rem;
  font-weight: 300;
`;

const ProjectTypeSTag = styled(ProjectTypeTag)`
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.2rem;
  position: absolute;
  margin: 0 0.75rem;
`;

const ClientTag = () => {
  return (
    <ProjectTypeTag style={{ borderColor: "var(--red)", color: "var(--red)" }}>
      client
    </ProjectTypeTag>
  );
};

const PersoTag = () => {
  return (
    <ProjectTypeTag
      style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
    >
      perso
    </ProjectTypeTag>
  );
};

const ClientSTag = () => {
  return (
    <div>
      <ProjectTypeSTag
        style={{ borderColor: "var(--red)", color: "var(--red)" }}
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
        style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
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
  position: absolute;
  background: var(--black);
  bottom: -1px;
  right: -1px;
  border-radius: 1.5rem 1.5rem 0 1.5rem;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 650px), (max-width: 1300px) and (max-height: 700px) {
    display: none;
  }

  @media (max-width: 3900px) {
    width: calc(100% / 6 + 2px);
  }
  @media (max-width: 3250px) {
    width: calc(100% / 5 + 2px);
  }
  @media (max-width: 2600px) {
    width: calc(100% / 4 + 2px);
  }
  @media (max-width: 1950px) {
    width: calc(100% / 3 + 2px);
  }
  @media (max-width: 1300px) {
    width: calc(100% / 2 + 2px);
  }
  @media (max-width: 650px) {
    width: calc(100% / 1 + 2px);
  }

  @media (max-height: 2800px) {
    height: calc((100vh - 2rem) / 4 + 2px);
  }
  @media (max-height: 2100px) {
    height: calc((100vh - 2rem) / 3 + 2px);
  }
  @media (max-height: 1400px) {
    height: calc((100vh - 2rem) / 2 + 2px);
  }
  @media (max-height: 700px) {
    height: calc((100vh - 2rem) / 1 + 2px);
  }

  & > ${CardContainer} {
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
    width: 4rem;
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
  const Thumbnail = projectData.thumbnail
  const ProjectPage = projectData.projectpage

  return (
    <ProjectCardWrapper onClick={() => onClick(index)}>
      <GSAPCardWrapper ref={(el) => (cardsRef.current[index] = el)}>
        <VersoContainer>
          <ProjectPage />
        </VersoContainer>
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
      </GSAPCardWrapper>
    </ProjectCardWrapper>
  );
};

export const PresentationCard = () => {
  return (
    <PresentationCardWrapper>
      <GSAPCardWrapper>
        <PresentationCardContainer>
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
