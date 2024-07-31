import React, { useRef, useState } from "react";

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

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(cardsRef.current, { opacity: 0, scale: 0.9, y: "6rem" });

    ScrollTrigger.batch(cardsRef.current, {
      start: "top 75%",
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
    setInitialCardStyles({
      top: cardRect.top,
      left: cardRect.left,
      width: cardRect.width,
      height: cardRect.height,
    });

    document.documentElement.style.overflow = "hidden";

    gsap
      .timeline()
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
        top: "2rem",
        left: 0,
        width: "100vw",
        height: "calc(100vh - 2rem)",
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
  ];

  return (
    <>
      <GlobalFonts />
      <Header />
      <ScrollMosaic>
        <PresentationCard />
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            onClick={handleCardClick}
            cardsRef={cardsRef}
            projectData={project}
          />
        ))}
        <FixedMosaic>
          <TOCCard />
          <TopPageButton />
        </FixedMosaic>
      </ScrollMosaic>
      {fullscreenCard !== null && (
        <CloseButton onClick={handleCloseFullscreen}>Close</CloseButton>
      )}
    </>
  );
}

export default App;
