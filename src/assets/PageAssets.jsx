import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FadeInElement = ({ children, scroller }) => {
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

  return <div ref={elementRef}>{children}</div>;
};

export const FadeInElementDelay = ({ children, scroller, delay = 0 }) => {
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
    margin-top: -70vh;
  }
`;

export const FadeInMockUp = ({ children, scroller }) => {
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

export const FadeInMockUpAbsolute = ({ children, scroller }) => {
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

export const FullScreenElement = ({ children, scroller }) => {
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

  return <div ref={elementRef}>{children}</div>;
};
