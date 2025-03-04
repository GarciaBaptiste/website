import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ButtonText,
  ArrowRightUp,
  LowQualityImg,
} from "../components/LayoutAssets";
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
          duration: 1,
          toggleActions: "play none none reverse",
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

const FadeInElementDelay = ({ children, scroller, delay = 0, style }) => {
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

  return (
    <div style={style} ref={elementRef}>
      {children}
    </div>
  );
};

const FadeInElementAbsoluteWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 7rem;
  @media (max-width: 899px) {
    position: relative;
    top: unset;
    margin-top: -640px;
  }
`;

const FadeInMockUp = ({ children, scroller, $scrollOverflow }) => {
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
                duration: 1,
                ease: "power3.out",
                toggleActions: "play none none reverse",
              },
            }
          );
        } else if (isMobile) {
          gsap.fromTo(
            element,
            {
              marginLeft: "calc(-1 * var(--margin))",
              marginRight: "calc(-1 * var(--margin))",
              display: "flex",
              justifyContent: $scrollOverflow ? "unset" : "center",
              overflowX: $scrollOverflow ? "auto" : "hidden",
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
                duration: 1,
                ease: "power3.out",
                toggleActions: "play none none reverse",
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

export const FullScreenBackground = ({
  children,
  scroller,
  $isSquareOnMobile = false,
  style,
  ratio = "initial",
}) => {
  return (
    <ContainerLarge style={{ aspectRatio: ratio ? ratio : "", ...style }}>
      <FullScreenContainer
        scroller={scroller}
        $isSquareOnMobile={$isSquareOnMobile}
      >
        {children}
      </FullScreenContainer>
    </ContainerLarge>
  );
};

export const MediumBackground = ({ children, ratio, scroller }) => {
  return (
    <ContainerMedium style={{ aspectRatio: ratio ? ratio : "" }}>
      <FadeInElementDelay scroller={scroller}>{children}</FadeInElementDelay>
    </ContainerMedium>
  );
};

export const SmallBackground = ({ children, ratio, scroller, style }) => {
  return (
    <ContainerSmall style={{ aspectRatio: ratio ? ratio : "", ...style }}>
      <FadeInElementDelay
        style={{ width: "100%", height: "100%", display: "flex" }}
        scroller={scroller}
      >
        {children}
      </FadeInElementDelay>
    </ContainerSmall>
  );
};

export const FullScreenImage = ({
  src,
  srcPH = src,
  scroller,
  $isSquareOnMobile,
  $isSrcVideo,
  $keepRatio,
  $afterImage,
}) => {
  return (
    <ContainerLarge $afterImage={$afterImage}>
      <FullScreenContainer
        scroller={scroller}
        $isSquareOnMobile={$isSquareOnMobile}
        $keepRatio={$keepRatio}
      >
        {$isSrcVideo ? (
          <FullScreenVideoWrapper src={src} autoPlay loop muted playsInline />
        ) : srcPH !== src ? (
          <LowQualityImg lowQualitySrc={srcPH} highQualitySrc={src}>
            <FullScreenImageWrapper />
          </LowQualityImg>
        ) : (
          <FullScreenImageWrapper src={src} />
        )}
      </FullScreenContainer>
    </ContainerLarge>
  );
};

const FullScreenContainer = ({
  children,
  scroller,
  $isSquareOnMobile,
  $keepRatio,
}) => {
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
              marginLeft: "calc(-1 * var(--margin))",
              marginRight: "calc(-1 * var(--margin))",
              aspectRatio: $isSquareOnMobile
                ? "1/1"
                : $keepRatio
                ? $keepRatio
                : "initial",
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
    <div ref={elementRef} style={{ background: "var(--white)" }}>
      {children}
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
  margin-top: ${(props) => (props.$afterImage ? "-10rem" : "unset")};
  @media (max-width: 899px) {
    margin-top: ${(props) => (props.$afterImage ? "-5rem" : "unset")};
  }
`;

const ContainerLargeMockUpDouble = styled(ContainerLarge)`
  @media (max-width: 899px) {
    min-height: 650px;
  }
`;

const ContainerMedium = styled.div`
  grid-column: 2 / span 3;
  @media (max-width: 899px) {
    grid-column: 1 / span 4;
  }
`;

const ContainerSmall = styled.div`
  grid-column: 2 / span 2;
  margin-top: ${(props) =>
    props.$afterText ? "calc(-11rem + 8px)" : "var(--margin)"};
  @media (max-width: 899px) {
    grid-column: 1 / span 4;
    margin-top: ${(props) => (props.$afterText ? "calc(-5rem - 4px)" : "8px")};
  }
  & img,
  & video {
    border-radius: 1rem;
    width: 100%;
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

const FullScreenVideoWrapper = styled.video`
  margin-bottom: -3px;
  @media (min-width: 900px) {
    width: 100%;
  }
`;

const SimpleColumnWrapper = styled.div`
  grid-column: span 4;
  display: grid;
  margin-top: ${(props) =>
    props.$afterImage ? "calc(-11rem + 8px)" : "var(--margin)"};
  gap: var(--margin);
  grid-template-columns: repeat(4, 1fr);
  & > div {
    grid-column: ${(props) => (props.$centered ? "2 / span 2" : "1 / span 2")};
    @media (max-width: 899px) {
      grid-column: span 4;
    }
  }
  & img,
  & video {
    @media (min-width: 900px) {
      border-radius: 1rem;
    }
    width: 100%;
  }
  @media (max-width: 899px) {
    margin-left: calc(-1 * var(--margin));
    margin-right: calc(-1 * var(--margin));
    margin-top: ${(props) => (props.$afterImage ? "calc(-5rem - 4px)" : "8px")};
    gap: 8px;
  }
`;

const DoubleColumnsWrapper = styled.div`
  grid-column: span 4;
  display: grid;
  margin-top: ${(props) =>
    props.$afterImage ? "calc(-11rem + 8px)" : "var(--margin)"};
  gap: var(--margin);
  grid-template-columns: repeat(4, 1fr);
  & > div:nth-child(1) {
    grid-column: ${(props) => (props.$centered ? "2 / span 1" : "1 / span 2")};
    @media (max-width: 899px) {
      grid-column: span 4;
    }
  }
  & > div:nth-child(2) {
    grid-column: ${(props) => (props.$centered ? "3 / span 1" : "3 / span 2")};
    @media (max-width: 899px) {
      grid-column: span 4;
    }
  }
  & img,
  & video {
    @media (min-width: 900px) {
      border-radius: 1rem;
    }
    width: 100%;
  }
  @media (max-width: 899px) {
    margin-left: calc(-1 * var(--margin));
    margin-right: calc(-1 * var(--margin));
    margin-top: ${(props) => (props.$afterImage ? "calc(-5rem - 4px)" : "8px")};
    gap: 8px;
  }
`;

const OffsetDoubleColumnsWrapper = styled(DoubleColumnsWrapper)`
  grid-template-columns: repeat(8, 1fr);
  & > div:nth-child(1) {
    grid-column: 2 / span 2;
    @media (max-width: 899px) {
      grid-column: span 8;
    }
  }
  & > div:nth-child(2) {
    grid-column: 4 / span 4;
    @media (max-width: 899px) {
      grid-column: span 8;
    }
  }
`;

export const SimpleColumn = ({
  children,
  scroller,
  $afterImage = false,
  $centered = false,
}) => {
  return (
    <SimpleColumnWrapper $afterImage={$afterImage} $centered={$centered}>
      <FadeInElementDelay scroller={scroller}>{children}</FadeInElementDelay>
    </SimpleColumnWrapper>
  );
};

export const DoubleColumns = ({
  children,
  scroller,
  $afterImage = false,
  $centered = false,
  $offset = false,
}) => {
  const Wrapper = $offset ? OffsetDoubleColumnsWrapper : DoubleColumnsWrapper;

  return (
    <Wrapper $afterImage={$afterImage} $centered={$centered}>
      {children.map((element, index) => (
        <FadeInElementDelay key={index} scroller={scroller} delay={0.5 * index}>
          {element}
        </FadeInElementDelay>
      ))}
    </Wrapper>
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

const MockUpMBAirScreenVideo = styled.video`
  position: absolute;
  width: 77.8%;
  left: 11.1%;
  top: 5.5%;
`;

const LazyMockUpMBAirScreenVideo = ({ src, ...props }) => {
  const videoRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(videoRef.current);
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <MockUpMBAirScreenVideo
      ref={videoRef}
      src={isLoaded ? src : undefined}
      preload="metadata"
      {...props}
    />
  );
};

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

export const MockUpMBAir = ({
  scroller,
  screenMBAir,
  screenMBAirPH = screenMBAir,
  mBAirVideo = false,
  $scrollOverflow = false,
}) => {
  return (
    <ContainerLarge>
      <FadeInMockUp scroller={scroller} $scrollOverflow={$scrollOverflow}>
        <MockUpMBAirContainer>
          {mBAirVideo ? (
            <MockUpMBAirScreenVideo
              src={screenMBAir}
              autoPlay
              loop
              muted
              playsInline
            ></MockUpMBAirScreenVideo>
          ) : screenMBAirPH !== screenMBAir ? (
            <LowQualityImg
              lowQualitySrc={screenMBAirPH}
              highQualitySrc={screenMBAir}
            >
              <MockUpMBAirScreen />
            </LowQualityImg>
          ) : (
            <MockUpMBAirScreen src={screenMBAir} />
          )}
          <MockUpFrame src={MockUpMBAirImage} />
        </MockUpMBAirContainer>
      </FadeInMockUp>
    </ContainerLarge>
  );
};

export const MockUpDouble = ({
  scroller,
  screenMBAir,
  screenMBAirPH = screenMBAir,
  screenIPhone,
  screenIPhonePH = screenIPhone,
  mBAirVideo = false,
}) => {
  return (
    <ContainerLargeMockUpDouble>
      <FadeInMockUp scroller={scroller}>
        <MockUpMBAirContainer>
          {mBAirVideo ? (
            <LazyMockUpMBAirScreenVideo
              src={screenMBAir}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : screenMBAirPH !== screenMBAir ? (
            <LowQualityImg
              lowQualitySrc={screenMBAirPH}
              highQualitySrc={screenMBAir}
            >
              <MockUpMBAirScreen />
            </LowQualityImg>
          ) : (
            <MockUpMBAirScreen src={screenMBAir} />
          )}
          <MockUpFrame src={MockUpMBAirImage} />
        </MockUpMBAirContainer>
      </FadeInMockUp>
      <FadeInMockUpAbsolute scroller={scroller}>
        <MockUpIPhoneContainer style={{ gridColumn: "4 / span 1" }}>
          {screenIPhonePH !== screenIPhone ? (
            <LowQualityImg
              lowQualitySrc={screenIPhonePH}
              highQualitySrc={screenIPhone}
            >
              <MockUpIPhoneScreen />
            </LowQualityImg>
          ) : (
            <MockUpIPhoneScreen src={screenIPhone} />
          )}

          <MockUpFrame src={MockUpIPhoneImage} />
        </MockUpIPhoneContainer>
      </FadeInMockUpAbsolute>
    </ContainerLargeMockUpDouble>
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
      <ButtonText style={{ fontWeight: "400" }}>Visit website</ButtonText>
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

export const TextSmall = ({ children, scroller, style, $afterText }) => {
  return (
    <ContainerSmall style={style} $afterText={$afterText}>
      <ProjectText scroller={scroller}>{children}</ProjectText>
    </ContainerSmall>
  );
};

export const Empty = styled.div`
  height: 8rem;
  grid-column: span 4;
  @media (max-width: 899px) {
    height: 0rem;
  }
`;
