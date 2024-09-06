import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ children }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    const splitText = textRef.current;
    const container = splitText.parentElement.parentElement.parentElement;
    const tl = gsap.timeline();
    tl.set(splitText, { opacity: 0, y: "1rem" });

    ScrollTrigger.batch(splitText, {
      trigger: splitText.parentElement,
      scroller: container,
      start: "top 80%",
      onEnter: (batch) => {
        tl.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.2,
        });
      },
      toggleActions: "play none none none",
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <p className="animate-text" ref={textRef}>
      {children}
    </p>
  );
};

export default SplitText;
