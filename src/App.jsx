import React, { useRef, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./App.css";
import GlobalFonts from "./fonts/fonts";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  TopPageButton,
  CloseButton,
  MasonryWrapper,
  PageMask,
} from "./components/LayoutAssets";
import { ProjectCard, PresentationCard, TOCCard } from "./components/Cards";

import { ProjectPage as DefaultProjectPage } from "./components/projects/DefaultProject";
import { ProjectPage as PageBowVosgien } from "./components/projects/PP_bowvosgien";
import ThumbLeBowVosgien from "./assets/projects/le_bow_vosgien/mockup_le_bow_vosgien5.jpg";
import ThumbLogilabFr from "./assets/projects/logilab_fr/mockup_logilab_fr.jpg";
import ThumbDefault1 from "./assets/mockup_macbook.png";
import ThumbDefault2 from "./assets/mockup_iphone.png";
import ThumbDefault3 from "./assets/mockup_imac.png";
import ThumbDefault4 from "./assets/mockup_ipad.png";

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

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(cardsRef.current, { opacity: 0, scale: 0.9, y: "6rem" });

    ScrollTrigger.batch(cardsRef.current, {
      start: "top 80%",
      onEnter: (batch) => {
        tl.to(batch, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
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

      document.documentElement.classList.add("fullscreen-page");
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
          padding:
            "8px " + (8 + (index === 0 ? 0 : scrollBarWidth)) + "px 8px 8px",
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: () => {
            card.classList.add("fullscreen");
          },
        });
    }

    ScrollTrigger.refresh();

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
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
      document.documentElement.classList.remove("fullscreen-page");
    }
  };

  const projectData = [
    {
      title: "Le Bow Vosgien",
      type: "client",
      description: "Art direction + Front-end",
      keywords: "Realtime 3D — Immersive wandering — Blender — Three.JS",
      thumbnail: ThumbLeBowVosgien,
      projectpage: PageBowVosgien,
    },
    {
      title: "Logilab",
      type: "client",
      description: "design + front-end",
      keywords: "Timeline — Figma — React",
      thumbnail: ThumbLogilabFr,
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      type: "perso",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components + CSS",
      thumbnail: ThumbDefault4,
      projectpage: DefaultProjectPage,
    },
    {
      title: "CubicWeb.org",
      type: "perso",
      description: "design + front-end",
      keywords: "Figma — React — Styled-Components",
      thumbnail: ThumbDefault1,
      projectpage: DefaultProjectPage,
    },
    {
      title: "Logilab.fr",
      type: "perso",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components",
      thumbnail: ThumbDefault2,
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      type: "perso",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components",
      thumbnail: ThumbDefault4,
      projectpage: DefaultProjectPage,
    },
    {
      title: "Le Bow Vosgien",
      type: "perso",
      description: "design + front-end",
      keywords: "real-time 3D — Figma — ThreeJS — Storytelling",
      thumbnail: ThumbDefault3,
      projectpage: PageBowVosgien,
    },
    {
      title: "Logilab",
      type: "perso",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components",
      thumbnail: ThumbDefault2,
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      type: "perso",
      description: "design + front-end",
      keywords: "Timeline — Figma — React + Styled-Components + CSS",
      thumbnail: ThumbDefault1,
      projectpage: DefaultProjectPage,
    },
    {
      title: "CubicWeb.org",
      type: "perso",
      description: "design + front-end",
      keywords: "Figma — React + Styled-Components + CSS",
      thumbnail: ThumbDefault3,
      projectpage: DefaultProjectPage,
    },
    {
      title: "Logilab.fr",
      type: "perso",
      description: "design + front-end",
      keywords: "Figma — React + Styled-Components + CSS",
      thumbnail: ThumbDefault4,
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      type: "perso",
      description: "design + front-end",
      keywords: "Figma — React + Styled-Components + CSS",
      thumbnail: ThumbDefault1,
      projectpage: DefaultProjectPage,
    },
  ];

  return (
    <>
      <GlobalFonts />
      <PageMask id="page-mask" />
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
      <TopPageButton />
    </>
  );
}

export default App;
