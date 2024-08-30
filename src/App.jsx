import React, { useRef, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./App.css";
import GlobalFonts from "./fonts/fonts";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  TopPageButton,
  CloseButton,
  MasonryWrapper,
} from "./components/LayoutAssets";
import { ProjectCard, PresentationCard, TOCCard } from "./components/Cards";

import { ProjectPage as DefaultProjectPage } from "./components/projects/DefaultProject";

import { ProjectPage as PageBowVosgien } from "./components/projects/PP_bowvosgien";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cardsRef = useRef([]);
  const [fullscreenCard, setFullscreenCard] = useState(null);
  const [initialCardStyles, setInitialCardStyles] = useState({});
  const [scrollBarWidth, setScrollBarWidth] = useState(0);

  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    setScrollBarWidth(scrollBarWidth);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (fullscreenCard !== null) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [fullscreenCard, scrollBarWidth]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(cardsRef.current, { opacity: 0, scale: 0.9, y: "6rem" });

    ScrollTrigger.batch(cardsRef.current, {
      start: "top bottom",
      onEnter: (batch) => {
        tl.to(batch, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          delay: 0.2,
          ease: "power3.out",
          stagger: 0.1,
        });
      },
      toggleActions: "play none none none",
    });

    ScrollTrigger.refresh();
  }, []);

  const handleCardClick = (index) => {
    if (fullscreenCard === null) {
      setFullscreenCard(index);
      const card = cardsRef.current[index];
      const cardRect = card.getBoundingClientRect();
      const wrapper = card.parentElement;
      const wrapperHeight = wrapper.getBoundingClientRect().height;
      setInitialCardStyles({
        top: cardRect.top,
        left: cardRect.left,
        width: cardRect.width,
        height: cardRect.height,
      });

      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.pointerEvents = "none";
      card.classList.add("transition");

      const timeline = gsap.timeline();

      timeline.to(wrapper, {
        height: wrapperHeight,
        duration: 0,
      });

      timeline
        .to(
          card,
          {
            position: "fixed",
            top: cardRect.top,
            left: cardRect.left,
            width: cardRect.width,
            height: cardRect.height,
            padding: 0,
            zIndex: 1000,
            duration: 0,
          },
          0
        )
        .to(card, {
          top: "0",
          left: "0",
          width: "100vw",
          height: "100dvh",
          padding: "8px " + (8 + scrollBarWidth) + "px 8px 8px",
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: () => {
            card.classList.add("fullscreen");
          },
        });
    }
  };

  const handleCloseFullscreen = () => {
    if (fullscreenCard !== null) {
      const card = cardsRef.current[fullscreenCard];
      const wrapper = card.parentElement;
      card.classList.remove("transition");
      card.classList.remove("fullscreen");

      gsap
        .timeline()
        .to(card, {
          top: initialCardStyles.top,
          left: initialCardStyles.left,
          width: initialCardStyles.width,
          height: initialCardStyles.height,
          padding: "0",
          duration: 0.5,
          ease: "power3.inOut",
        })
        .to(card, {
          position: "",
          top: "",
          left: "",
          width: "",
          height: "",
          zIndex: "",
          duration: 0,
        })
        .to(wrapper, {
          height: "",
        });

      setFullscreenCard(null);
      document.documentElement.style.overflow = "";
      document.documentElement.style.pointerEvents = "";
    }
  };

  const projectData = [
    {
      title: "Le Bow Vosgien",
      subtitle: "website",
      description: "design + front-end",
      keywords: "real-time 3D — Figma — ThreeJS — Storytelling",
      thumbnail: "../src/assets/mockup_macbook.png",
      projectpage: PageBowVosgien,
    },
    {
      title: "Logilab",
      subtitle: "calendar",
      description: "design + front-end",
      keywords: "Timeline — Figma — React",
      thumbnail: "../src/assets/mockup_imac.png",
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components + CSS",
      thumbnail: "../src/assets/mockup_ipad.png",
      projectpage: DefaultProjectPage,
    },
    {
      title: "CubicWeb.org",
      subtitle: "website",
      description: "design + front-end",
      keywords: "Figma — React — Styled-Components",
      thumbnail: "../src/assets/mockup_macbook.png",
      projectpage: DefaultProjectPage,
    },
    {
      title: "Logilab.fr",
      subtitle: "website",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components",
      thumbnail: "../src/assets/mockup_iphone.png",
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components",
      thumbnail: "../src/assets/mockup_ipad.png",
      projectpage: DefaultProjectPage,
    },
    {
      title: "Le Bow Vosgien",
      subtitle: "website",
      description: "design + front-end",
      keywords: "real-time 3D — Figma — ThreeJS — Storytelling",
      thumbnail: "../src/assets/mockup_imac.png",
      projectpage: PageBowVosgien,
    },
    {
      title: "Logilab",
      subtitle: "calendar",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components",
      thumbnail: "../src/assets/mockup_iphone.png",
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components + CSS",
      thumbnail: "../src/assets/mockup_macbook.png",
      projectpage: DefaultProjectPage,
    },
    {
      title: "CubicWeb.org",
      subtitle: "website",
      description: "design + front-end",
      keywords: "Figma — React + Styled-Components + CSS",
      thumbnail: "../src/assets/mockup_imac.png",
      projectpage: DefaultProjectPage,
    },
    {
      title: "Logilab.fr",
      subtitle: "website",
      description: "design + front-end",
      keywords: "Figma — React + Styled-Components + CSS",
      thumbnail: "../src/assets/mockup_ipad.png",
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: "Figma — React + Styled-Components + CSS",
      thumbnail: "../src/assets/mockup_macbook.png",
      projectpage: DefaultProjectPage,
    },
  ];

  return (
    <>
      <GlobalFonts />
      <PresentationCard onClick={handleCardClick} cardsRef={cardsRef} />
      <MasonryWrapper>
        <ResponsiveMasonry
          style={{ flex: 1 }}
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3, 1800: 4 }}
        >
          <Masonry>
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                onClick={handleCardClick}
                cardsRef={cardsRef}
                projectData={project}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <TOCCard cardsRef={cardsRef} />
      </MasonryWrapper>
      {fullscreenCard !== null && (
        <CloseButton onClick={handleCloseFullscreen} />
      )}
    </>
  );
}

export default App;
