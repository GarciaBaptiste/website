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
    const tl = gsap.timeline();
    tl.set(element, { opacity: 0, y: "5rem" });

    ScrollTrigger.batch(element, {
      trigger: element.parentElement,
      scroller: customScroller,
      start: "top 80%",
      onEnter: (batch) => {
        tl.to(batch, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        });
      },
      toggleActions: "play none none none",
    });

    ScrollTrigger.refresh();
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
    const tl = gsap.timeline();
    tl.set(element, { opacity: 0, y: "5rem" });

    ScrollTrigger.batch(element, {
      trigger: element.parentElement,
      scroller: customScroller,
      start: "top 80%",
      onEnter: (batch) => {
        tl.to(batch, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        });
      },
      toggleActions: "play none none none",
    });

    ScrollTrigger.refresh();
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
    const tl = gsap.timeline();
    tl.set(element, {
      width: "calc(100% + 4rem)",
      marginLeft: "-2rem",
      borderRadius: "0",
      overflow: "hidden",
    });

    ScrollTrigger.batch(element, {
      trigger: element.parentElement,
      scroller: customScroller,
      start: "top 30%",
      onEnter: (batch) => {
        tl.to(batch, {
          width: "100%",
          marginLeft: "0",
          borderRadius: "1rem",
          duration: 2,
          ease: "power3.out",
        });
      },
      toggleActions: "play none none none",
    });

    ScrollTrigger.refresh();
  }, []);

  return <div ref={elementRef}>{children}</div>;
};
