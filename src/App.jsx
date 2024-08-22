import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import GlobalFonts from "./fonts/fonts";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Header,
  TopPageButton,
  ScrollMosaic,
  FixedMosaic,
  CloseButton,
} from "./components/LayoutAssets";
import { ProjectCard, PresentationCard, TOCCard } from "./components/Cards";

import {
  Thumbnail as DefaultThumbnail,
  ProjectPage as DefaultProjectPage,
} from "./components/projects/DefaultProject";

import {
  Thumbnail as ThumbBowVosgien,
  ProjectPage as PageBowVosgien,
} from "./components/projects/PP_bowvosgien";

gsap.registerPlugin(ScrollTrigger);

// const WrapperThumbnailProject2 = styled(ThumbnailProject)`
//   background: #0400ce;

//   @media (max-width: 900px) {
//     p {
//       display: none;
//     }
//   }

//   @media (max-width: 650px) {
//     p {
//       display: initial;
//     }
//   }

//   @media (max-width: 450px) {
//     p {
//       display: none;
//     }
//   }
// `;

// const ThumbnailProject2 = () => {
//   return (
//     <WrapperThumbnailProject2>
//       <p
//         style={{
//           color: "white",
//           fontSize: "2rem",
//           position: "absolute",
//           top: "1rem",
//           right: "1rem",
//         }}
//       >
//         19
//       </p>
//     </WrapperThumbnailProject2>
//   );
// };

// const WrapperThumbnailProject3 = styled(ThumbnailProject)`
//   background: #ff8c19;
// `;

// const ThumbnailProject3 = () => {
//   return <WrapperThumbnailProject3 />;
// };

// const WrapperThumbnailProject4 = styled(ThumbnailProject)`
//   background: #834531;
// `;

// const ThumbnailProject4 = () => {
//   return <WrapperThumbnailProject4 />;
// };

function App() {
  const cardsRef = useRef([]);
  const [fullscreenCard, setFullscreenCard] = useState(null);
  const [initialCardStyles, setInitialCardStyles] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(cardsRef.current, { opacity: 0, scale: 0.9, y: "6rem" });

    ScrollTrigger.batch(cardsRef.current, {
      start: "top 98%",
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
  }, []);

  const handleCardClick = (index) => {
    setFullscreenCard(index);
    const card = cardsRef.current[index];
    const cardRect = card.getBoundingClientRect();
    const wrapper = card.parentElement;
    const wrapperHeight = wrapper.getBoundingClientRect().height;
    const cardContainer = card.children[0];
    const cardContainerHeight = cardContainer.getBoundingClientRect().height;
    setInitialCardStyles({
      top: cardRect.top,
      left: cardRect.left,
      width: cardRect.width,
      height: cardRect.height,
    });

    document.documentElement.style.overflow = "hidden";
    card.classList.add("transition");

    const timeline = gsap.timeline();

    timeline.to(cardContainer, {
      height: cardContainerHeight,
      duration: 0,
    });

    if (window.innerWidth < 650 || index === 0) {
      timeline.to(wrapper, {
        height: wrapperHeight,
        duration: 0,
      });
    }

    timeline
      .to(
        card,
        {
          position: "fixed",
          top: cardRect.top,
          left: cardRect.left,
          width: cardRect.width,
          height: cardRect.height,
          zIndex: 1000,
          duration: 0,
        },
        0
      )
      .to(card, {
        top: "8px",
        left: "8px",
        width: "calc(100vw - 16px)",
        height: "calc(100dvh - 16px)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          card.classList.add("fullscreen");
        },
      });
  };

  const handleCloseFullscreen = () => {
    if (fullscreenCard !== null) {
      const card = cardsRef.current[fullscreenCard];
      const wrapper = card.parentElement;
      const cardContainer = card.children[0];
      card.classList.remove("transition");
      card.classList.remove("fullscreen");

      gsap
        .timeline()
        .to(card, {
          top: initialCardStyles.top,
          left: initialCardStyles.left,
          width: initialCardStyles.width,
          height: initialCardStyles.height,
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
        })
        .to(cardContainer, {
          height: "",
        });

      setFullscreenCard(null);
      document.documentElement.style.overflow = "";
    }
  };

  const projectData = [
    {
      title: "Le Bow Vosgien",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["real-time 3D", "Figma", "ThreeJS", "Storytelling"],
      thumbnail: ThumbBowVosgien,
      projectpage: PageBowVosgien,
    },
    {
      title: "Logilab",
      subtitle: "calendar",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
    {
      title: "CubicWeb.org",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
    {
      title: "Logilab.fr",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
    {
      title: "Le Bow Vosgien",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["real-time 3D", "Figma", "ThreeJS", "Storytelling"],
      thumbnail: ThumbBowVosgien,
      projectpage: PageBowVosgien,
    },
    {
      title: "Logilab",
      subtitle: "calendar",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
    {
      title: "CubicWeb.org",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
    {
      title: "Logilab.fr",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: DefaultThumbnail,
      projectpage: DefaultProjectPage,
    },
  ];

  return (
    <>
      <GlobalFonts />
      <ScrollMosaic>
        <PresentationCard onClick={handleCardClick} cardsRef={cardsRef} />
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            onClick={handleCardClick}
            cardsRef={cardsRef}
            projectData={project}
          />
        ))}
      </ScrollMosaic>
      <FixedMosaic>
        <Header />
        <TOCCard />
        <TopPageButton />
      </FixedMosaic>
      {fullscreenCard !== null && (
        <CloseButton onClick={handleCloseFullscreen} />
      )}
    </>
  );
}

export default App;
