import React, { forwardRef, useRef, useEffect, useState } from "react";

import "./App.css";
import styled from "styled-components";
import GlobalFonts from "./fonts/fonts";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = styled.header`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 2rem;
  top: 0;
  left: 0;
  background: var(--black);
  color: var(--white);
  padding: 0 3rem;
  font-family: "JetBrains";
  font-size: var(--text-small);
  z-index: 1;
  border-bottom: solid 1px var(--black);
  box-sizing: content-box;
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  gap: 3rem;

  & > a,
  & > p {
    color: var(--white);
    line-height: 2rem;
  }

  & > a:hover {
    color: lightblue;
  }
`;

const HeaderContentLeft = styled(HeaderContent)``;

const HeaderContentRight = styled(HeaderContent)`
  justify-content: end;
`;

const FixedMosaic = styled.section`
  position: fixed;
  width: 100%;
  height: calc(100dvh - 2rem);
  top: 2rem;
  left: 0;
  pointer-events: none;
  z-index: 100;
`;

const ScrollMosaic = styled.section`
  position: absolute;
  top: 2rem;
  width: 100%;
  display: grid;

  @media (max-width: 3900px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 3250px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 2600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1950px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }

  & h1,
  & h2,
  & h3,
  & p,
  & ul {
    font-size: var(--text-basic);
    margin: 0;
  }

  & p,
  & ul {
    font-weight: 300;
  }

  & ul {
    padding: 0;
    list-style: none;
    color: var(--grey1);
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 1.5rem;
  scroll-snap-align: start;
  transition: height .3s;
  padding-top: 2rem;

  @media (max-height: 2800px) {
    height: calc((100dvh - 2rem) / 4);
  }
  @media (max-height: 2100px) {
    height: calc((100dvh - 2rem) / 3);
  }
  @media (max-height: 1400px) {
    height: calc((100dvh - 2rem) / 2);
  }
  @media (max-height: 700px) {
    height: calc((100dvh - 2rem) / 1);
  }
`;

const CardCorner = styled.div`
  position: absolute;
  width: 6rem;
  height: 6rem;
  border-color: var(--black);
  border-width: 1px;
`;

const CornerTopLeft = styled(CardCorner)`
  top: 0;
  left: 0;
  border-top-style: solid;
  border-left-style: solid;
  border-bottom-style: none;
  border-right-style: none;
  border-radius: calc(1.5rem - 2px) 0 0 0;
`;

const CornerTopRight = styled(CardCorner)`
  top: 0;
  right: 0;
  border-top-style: solid;
  border-left-style: none;
  border-bottom-style: none;
  border-right-style: solid;
  border-radius: 0 calc(1.5rem - 2px) 0 0;
`;

const CornerBottomLeft = styled(CardCorner)`
  bottom: 0;
  left: 0;
  border-top-style: none;
  border-left-style: solid;
  border-bottom-style: solid;
  border-right-style: none;
  border-radius: 0 0 0 calc(1.5rem - 2px);
`;

const CornerBottomRight = styled(CardCorner)`
  bottom: 0;
  right: 0;
  border-top-style: none;
  border-left-style: none;
  border-bottom-style: solid;
  border-right-style: solid;
  border-radius: 0 0 calc(1.5rem - 2px) 0;
`;

const CardContainerWrapper = forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <CornerTopLeft />
      <CornerTopRight />
      <CornerBottomLeft />
      <CornerBottomRight />
      {props.children}
    </div>
  )
});

const CardContainer = styled(CardContainerWrapper)`
  display: flex;
  margin: 3rem;
  gap: 3rem;
  width: calc(100% - 6rem);
  height: calc(100% - 6rem);
`;

const GSAPCardWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  background: var(--white);
`;

const PresentationCard = styled(Card)`
  & ${GSAPCardWrapper} {
  background: lightblue;
  }
`;

const PresentationCardContainer = styled(CardContainer)`
  flex-direction: column;
  gap: 0;
`;

const ProjectCard = styled(Card)``;

const ThumbnailProject = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1.5rem;
  position: relative;
  display: flex;

  @media (max-width: 900px) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 650px) {
    width: 10rem;
    height: 10rem;
  }
`;

const WrapperThumbnailProject1 = styled(ThumbnailProject)`
  background: #cfefbf;

  @media (max-width: 900px) {
    p {
      display: none;
    }
  }

  @media (max-width: 650px) {
    p {
      display: initial;
    }
  }
`;

const ThumbnailProject1 = () => {
  return (
    <WrapperThumbnailProject1>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "calc(50% - 1px)",
          height: "100%",
          width: "2px",
          background: "var(--black)",
        }}
      />
      <p
        style={{
          fontFamily: "JetBrains",
          fontSize: "var(--text-medium)",
          flex: 1,
          alignSelf: "center",
          textAlign: "center",
          background: "#CFEFBF",
          zIndex: 1,
          padding: "0.5rem 0",
        }}
      >
        09h00
      </p>
    </WrapperThumbnailProject1>
  );
};

const WrapperThumbnailProject2 = styled(ThumbnailProject)`
  background: #0400ce;

  @media (max-width: 900px) {
    p {
      display: none;
    }
  }

  @media (max-width: 650px) {
    p {
      display: initial;
    }
  }
`;

const ThumbnailProject2 = () => {
  return (
    <WrapperThumbnailProject2>
      <p
        style={{
          color: "white",
          fontSize: "2rem",
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        19
      </p>
    </WrapperThumbnailProject2>
  );
};

const WrapperThumbnailProject3 = styled(ThumbnailProject)`
  background: #ff8c19;
`;

const ThumbnailProject3 = () => {
  return <WrapperThumbnailProject3 />;
};

const WrapperThumbnailProject4 = styled(ThumbnailProject)`
  background: #834531;
`;

const ThumbnailProject4 = () => {
  return <WrapperThumbnailProject4 />;
};

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
  top: 0.5rem;
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
  const [isLargeTag, setIsLargeTag] = useState(window.innerWidth >= 900 || window.innerWidth <= 650)
  const handleResize = () => {
    setIsLargeTag(window.innerWidth >= 900 || window.innerWidth <= 650)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return isLargeTag ? <ClientTag /> : <ProjectTypeSTag style={{ borderColor: "var(--red)", color: "var(--red)", margin: 0, position: "relative" }}>c</ProjectTypeSTag>
}

const ResponsivePersoTag = () => {
  const [isLargeTag, setIsLargeTag] = useState(window.innerWidth >= 900 || window.innerWidth <= 650)
  const handleResize = () => {
    setIsLargeTag(window.innerWidth >= 900 || window.innerWidth <= 650)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isLargeTag ? <PersoTag /> : <ProjectTypeSTag style={{ borderColor: "var(--purple)", color: "var(--purple)", margin: 0, position: "relative" }}>p</ProjectTypeSTag>
}

const LineBreak = styled.div`
  height: 0.75rem;
`;

const TOCCard = styled(Card)`
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

  @media (max-width: 650px) {
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
    height: calc((100dvh - 2rem) / 4 + 2px);
  }
  @media (max-height: 2100px) {
    height: calc((100dvh - 2rem) / 3 + 2px);
  }
  @media (max-height: 1400px) {
    height: calc((100dvh - 2rem) / 2 + 2px);
  }
  @media (max-height: 700px) {
    height: calc((100dvh - 2rem) / 1 + 2px);
  }

  & > ${CardContainer} {
    display: table;
    height: unset;
    color: var(--white);
    pointer-events: all;
    min-width: 35rem;
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

function App() {
  const cardsRef = useRef([]);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.set(cardsRef.current, { opacity: 0, scale: 0.9, y: "6rem" });

    ScrollTrigger.batch(cardsRef.current, {
      start: "top 75%",
      onEnter: (batch) => {
        tl.to(batch, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.1,
        });
      },
      toggleActions: "play none none none",
    });
  }, []);

  useEffect(() => {
    cardsRef.current.forEach((item) => {
      const handleMouseMove = (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        const rotateX = (deltaY / centerY) * 20;
        const rotateY = -(deltaX / centerX) * 20;

        gsap.to(item, {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 0.5,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(item, { rotationX: 0, rotationY: 0, duration: 0.5 });
      };

      item.addEventListener("mousemove", handleMouseMove);
      item.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        item.removeEventListener("mousemove", handleMouseMove);
        item.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  });

  return (
    <>
      <GlobalFonts />
      <Header>
        <HeaderContentLeft>
          <a href="#">baptistegarcia.com</a>
        </HeaderContentLeft>
      </Header>
      <ScrollMosaic>
        <PresentationCard>
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
        </PresentationCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[0] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject1 />
                <ResponsiveClientTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>SemWeb.Pro</u>
                  </h2>
                  <LineBreak />
                  <h3>website</h3>
                  <p>
                    design +<br />
                    front-end
                  </p>
                  <ul>
                    <li>Timeline</li>
                    <li>Figma</li>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[1] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject2 />
                <ResponsivePersoTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>Logilab</u>
                  </h2>
                  <LineBreak />
                  <h3>calendar</h3>
                  <p>UX + UI</p>
                  <ul>
                    <li>Figma</li>
                    <li>Prototype</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[2] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject3 />
                <ResponsiveClientTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>Logilab.fr</u>
                  </h2>
                  <LineBreak />
                  <h3>website</h3>
                  <p>
                    design +<br />
                    front-end
                  </p>
                  <ul>
                    <li>Figma</li>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[3] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject4 />
                <ResponsivePersoTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>CubicWeb.org</u>
                  </h2>
                  <LineBreak />
                  <h3>website</h3>
                  <p>
                    design +<br />
                    front-end
                  </p>
                  <ul>
                    <li>Figma</li>
                    <li>Prototype</li>
                    <li>POC</li>
                    <li>React +</li>
                    <li>Styled Components</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[4] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject3 />
                <ResponsiveClientTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>Logilab.fr</u>
                  </h2>
                  <LineBreak />
                  <h3>website</h3>
                  <p>
                    design +<br />
                    front-end
                  </p>
                  <ul>
                    <li>Figma</li>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[5] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject1 />
                <ResponsiveClientTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>SemWeb.Pro</u>
                  </h2>
                  <LineBreak />
                  <h3>website</h3>
                  <p>
                    design +<br />
                    front-end
                  </p>
                  <ul>
                    <li>Timeline</li>
                    <li>Figma</li>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[6] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject2 />
                <ResponsivePersoTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>Logilab</u>
                  </h2>
                  <LineBreak />
                  <h3>calendar</h3>
                  <p>UX + UI</p>
                  <ul>
                    <li>Figma</li>
                    <li>Prototype</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[7] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject1 />
                <ResponsiveClientTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>SemWeb.Pro</u>
                  </h2>
                  <LineBreak />
                  <h3>website</h3>
                  <p>
                    design +<br />
                    front-end
                  </p>
                  <ul>
                    <li>Timeline</li>
                    <li>Figma</li>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[8] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject1 />
                <ResponsiveClientTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>SemWeb.Pro</u>
                  </h2>
                  <LineBreak />
                  <h3>website</h3>
                  <p>
                    design +<br />
                    front-end
                  </p>
                  <ul>
                    <li>Timeline</li>
                    <li>Figma</li>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[9] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject1 />
                <ResponsiveClientTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>SemWeb.Pro</u>
                  </h2>
                  <LineBreak />
                  <h3>website</h3>
                  <p>
                    design +<br />
                    front-end
                  </p>
                  <ul>
                    <li>Timeline</li>
                    <li>Figma</li>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <ProjectCard>
          <GSAPCardWrapper ref={(el) => (cardsRef.current[10] = el)}>
            <CardContainer>
              <LeftCard>
                <ThumbnailProject1 />
                <ResponsiveClientTag />
              </LeftCard>
              <RightCard>
                <ProjectCardTextWrapper>
                  <h2>
                    <u>SemWeb.Pro</u>
                  </h2>
                  <LineBreak />
                  <h3>website</h3>
                  <p>
                    design +<br />
                    front-end
                  </p>
                  <ul>
                    <li>Timeline</li>
                    <li>Figma</li>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </ProjectCardTextWrapper>
              </RightCard>
            </CardContainer>
          </GSAPCardWrapper>
        </ProjectCard>
        <FixedMosaic>
          <TOCCard>
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
          </TOCCard>
        </FixedMosaic>
      </ScrollMosaic>
    </>
  );
}

export default App;
