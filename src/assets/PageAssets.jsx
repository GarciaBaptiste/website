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

const FadeInElementAbsoluteWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 7rem;
`;

export const FadeInElementAbsolute = ({ children, scroller }) => {
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

    ScrollTrigger.refresh();
  }, []);

  return <div ref={elementRef}>{children}</div>;
};
