import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ButtonText, ArrowRightUp } from "../components/LayoutAssets";
import MockUpMBAirImage from "../assets/mockup_mbair.svg";
import MockUpIPhoneImage from "../assets/mockup_iphone.svg";

gsap.registerPlugin(ScrollTrigger);

const ProjectText = ({ children, scroller }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const customScroller = scroller.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: "5rem" },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.parentElement,
          scroller: customScroller,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={elementRef}>
      <ProjectTextWrapper>{children}</ProjectTextWrapper>
    </div>
  );
};

const FadeInElementDelay = ({ children, scroller, delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const customScroller = scroller.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: "5rem" },
      {
        opacity: 1,
        y: 0,
        delay,
        scrollTrigger: {
          trigger: element.parentElement,
          scroller: customScroller,
          start: "top 80%",
          duration: 1,
          ease: "power3.out",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay]);

  return <div ref={elementRef}>{children}</div>;
};

const FadeInElementAbsoluteWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 7rem;
  @media (max-width: 899px) {
    position: relative;
    top: unset;
    margin-top: -670px;
  }
`;

const FadeInMockUp = ({ children, scroller }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const customScroller = scroller.current;
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 900px)",
        isMobile: "(max-width: 899px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        if (isDesktop) {
          gsap.fromTo(
            element,
            { opacity: 0, y: "5rem" },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: element.parentElement,
                scroller: customScroller,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
              },
            }
          );
        } else if (isMobile) {
          gsap.fromTo(
            element,
            {
              marginLeft: "calc(-1 * var(--margin)",
              marginRight: "calc(-1 * var(--margin)",
              display: "flex",
              justifyContent: "center",
              opacity: 0,
              y: "5rem",
            },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: element.parentElement,
                scroller: customScroller,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
              },
            }
          );
        }
      }
    );

    return () => mm.revert();
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

const FadeInMockUpAbsolute = ({ children, scroller }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const customScroller = scroller.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: "5rem" },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.parentElement,
          scroller: customScroller,
          start: "top 30%",
          duration: 1,
          ease: "power3.out",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <FadeInElementAbsoluteWrapper ref={elementRef}>
      {children}
    </FadeInElementAbsoluteWrapper>
  );
};

export const FullScreenImage = ({ src, scroller }) => {
  return (
    <ContainerLarge>
      <FullScreenImageContainer src={src} scroller={scroller} />
    </ContainerLarge>
  );
};

const FullScreenImageContainer = ({ src, scroller }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const customScroller = scroller.current;
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 900px)",
        isMobile: "(max-width: 899px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        if (isDesktop) {
          gsap.fromTo(
            element,
            {
              marginLeft: "-2rem",
              marginRight: "-2rem",
              borderRadius: "0",
              overflow: "hidden",
            },
            {
              marginLeft: "0",
              marginRight: "0",
              borderRadius: "1rem",
              scrollTrigger: {
                trigger: element.parentElement,
                scroller: customScroller,
                start: "top 30%",
                duration: 2,
                ease: "power3.out",
                toggleActions: "play none none reverse",
              },
            }
          );
        } else if (isMobile) {
          gsap.fromTo(
            element,
            {
              marginLeft: "calc(-1 * var(--margin)",
              marginRight: "calc(-1 * var(--margin)",
              borderRadius: "1rem",
              aspectRatio: "1/1",
              display: "flex",
              justifyContent: "center",
              opacity: 0,
              y: "5rem",
              overflow: "hidden",
            },
            {
              opacity: 1,
              y: 0,
              overflow: "hidden",
              scrollTrigger: {
                trigger: element.parentElement,
                scroller: customScroller,
                start: "top 60%",
                duration: 1.5,
                ease: "power2.out",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div ref={elementRef}>
      <FullScreenImageWrapper src={src} />
    </div>
  );
};

export const ProjectPageWrapper = styled.section`
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

export const ProjectPageContent = styled.article`
  width: 100%;
  margin: auto;
  max-width: 1800px;
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

const ProjectTextWrapper = styled.p`
  font-size: var(--text-big);
  @media (max-width: 899px) {
    font-size: var(--text-basic);
  }
`;

const FullScreenImageWrapper = styled.img`
  width: 100%;

  @media (max-width: 899px) {
    width: unset;
    height: 100%;
  }
`;

const DoubleColumnsWrapper = styled.div`
  grid-column: span 4;
  display: grid;
  margin-top: ${(props) =>
    props.$afterImage ? "calc(-11rem + 8px)" : "var(--margin)"};
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
    margin-top: ${(props) => (props.$afterImage ? "calc(-5rem - 4px)" : "8px")};
    gap: 8px;
  }
`;

export const DoubleColumns = ({ children, scroller, $afterImage }) => {
  return (
    <DoubleColumnsWrapper $afterImage={$afterImage}>
      {children.map((element, index) => (
        <FadeInElementDelay key={index} scroller={scroller} delay={0.5 * index}>
          {element}
        </FadeInElementDelay>
      ))}
    </DoubleColumnsWrapper>
  );
};

const MockUpMBAirContainer = styled.div`
  position: relative;
  aspect-ratio: 1132 / 650;
  max-width: 1132px;
  margin: 0 auto;
  @media (max-width: 899px) {
    flex: 1132px 0 0;
  }
`;

const MockUpFrame = styled.img`
  width: 100%;
  position: absolute;
`;

const MockUpMBAirScreen = styled.img`
  position: absolute;
  width: 77.8%;
  left: 11.1%;
  top: 5.5%;
`;

const MockUpIPhoneContainer = styled.div`
  position: relative;
  aspect-ratio: 396 / 802;
  max-width: 300px;
  margin: 0 auto 0 auto;
  width: 22%;
  transform: translateX(150%);
  @media (max-width: 899px) {
    width: 100%;
    margin: 0 auto;
    transform: unset;
  }
`;

const MockUpIPhoneScreen = styled.img`
  position: absolute;
  width: 90%;
  left: 5%;
  top: 2%;
`;

export const MockUpDouble = ({ scroller, screenMBAir, screenIPhone }) => {
  return (
    <ContainerLarge>
      <FadeInMockUp scroller={scroller}>
        <MockUpMBAirContainer>
          <MockUpMBAirScreen src={screenMBAir} />
          <MockUpFrame src={MockUpMBAirImage} />
        </MockUpMBAirContainer>
      </FadeInMockUp>
      <FadeInMockUpAbsolute scroller={scroller}>
        <MockUpIPhoneContainer style={{ gridColumn: "4 / span 1" }}>
          <MockUpIPhoneScreen src={screenIPhone} />
          <MockUpFrame src={MockUpIPhoneImage} />
        </MockUpIPhoneContainer>
      </FadeInMockUpAbsolute>
    </ContainerLarge>
  );
};

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

const VisitSiteButtonContainer = (props) => {
  return (
    <VisitSiteButtonWrapper href={props.href} target="_blank">
      <ButtonText style={{ fontWeight: "400" }}>Visit site</ButtonText>
      <ArrowRightUp />
    </VisitSiteButtonWrapper>
  );
};

export const VisitSiteButton = (props) => {
  return (
    <ContainerLarge style={{ display: "flex", justifyContent: "end" }}>
      <VisitSiteButtonContainer href={props.href} />
    </ContainerLarge>
  );
};

export const TextMedium = ({ children, scroller }) => {
  return (
    <ContainerMedium>
      <ProjectText scroller={scroller}>{children}</ProjectText>
    </ContainerMedium>
  );
};

export const TextSmall = ({ children, scroller }) => {
  return (
    <ContainerSmall>
      <ProjectText scroller={scroller}>{children}</ProjectText>
    </ContainerSmall>
  );
};
