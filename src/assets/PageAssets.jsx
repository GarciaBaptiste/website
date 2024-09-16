import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FadeInElement = ({ children, scroller }) => {
  console.log("fadein")
  const elementRef = useRef(null);

  useGSAP(() => {
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
      markers: true,
    });

    ScrollTrigger.refresh();
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export const FullScreenElement = ({ children }) => {
  const elementRef = useRef(null);

  useGSAP(() => {
    const element = elementRef.current;
    const container = element.parentElement.parentElement.parentElement;
    const tl = gsap.timeline();
    tl.set(element, {
      width: "calc(100% + 4rem)",
      marginLeft: "-2rem",
      borderRadius: "0",
      overflow: "hidden",
    });

    ScrollTrigger.batch(element, {
      trigger: element.parentElement,
      scroller: container,
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
