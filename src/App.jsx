import React, { useRef, useEffect, useState } from "react";

import "./App.css";
import styled from "styled-components";
import GlobalFonts from "./fonts/fonts";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {ProjectCard, PresentationCard, TOCCard} from "./components/Cards"

gsap.registerPlugin(ScrollTrigger);

const Header = styled.header`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 2rem;
  top: 0;
  left: 0;
  background: var(--black);
  color: var(--white);
  padding: 0 3rem;
  font-family: "JetBrains";
  font-size: var(--text-small);
  z-index: 1;
  border-bottom: solid 1px var(--black);
  box-sizing: content-box;
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  gap: 3rem;

  & > a,
  & > p {
    color: var(--white);
    line-height: 2rem;
  }

  & > a:hover {
    color: lightblue;
  }
`;

const HeaderContentLeft = styled(HeaderContent)``;

const HeaderContentRight = styled(HeaderContent)`
  justify-content: end;
`;

const FixedMosaic = styled.section`
  position: fixed;
  width: 100%;
  height: calc(100vh - 2rem);
  top: 2rem;
  left: 0;
  pointer-events: none;
  z-index: 100;
`;

const ScrollMosaic = styled.section`
  position: absolute;
  top: 2rem;
  width: 100%;

  & h1,
  & h2,
  & h3,
  & p,
  & ul {
    font-size: var(--text-basic);
    margin: 0;
  }

  & p,
  & ul {
    font-weight: 300;
  }

  & ul {
    padding: 0;
    list-style: none;
    color: var(--grey1);
  }
`;

const ThumbnailProject = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1.5rem;
  position: relative;
  display: flex;

  @media (max-width: 900px) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 650px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 450px) {
    width: 3rem;
    height: 3rem;
  }
`;

const WrapperThumbnailProject1 = styled(ThumbnailProject)`
  background: #cfefbf;

  @media (max-width: 900px) {
    p {
      display: none;
    }
  }

  @media (max-width: 650px) {
    p {
      display: initial;
    }
  }

  @media (max-width: 450px) {
    p {
      display: none;
    }
  }
`;

const ThumbnailProject1 = () => {
  return (
    <WrapperThumbnailProject1>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "calc(50% - 1px)",
          height: "100%",
          width: "2px",
          background: "var(--black)",
        }}
      />
      <p
        style={{
          fontFamily: "JetBrains",
          fontSize: "var(--text-medium)",
          flex: 1,
          alignSelf: "center",
          textAlign: "center",
          background: "#CFEFBF",
          zIndex: 1,
          padding: "0.5rem 0",
        }}
      >
        09h00
      </p>
    </WrapperThumbnailProject1>
  );
};

const WrapperThumbnailProject2 = styled(ThumbnailProject)`
  background: #0400ce;

  @media (max-width: 900px) {
    p {
      display: none;
    }
  }

  @media (max-width: 650px) {
    p {
      display: initial;
    }
  }

  @media (max-width: 450px) {
    p {
      display: none;
    }
  }
`;

const ThumbnailProject2 = () => {
  return (
    <WrapperThumbnailProject2>
      <p
        style={{
          color: "white",
          fontSize: "2rem",
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        19
      </p>
    </WrapperThumbnailProject2>
  );
};

const WrapperThumbnailProject3 = styled(ThumbnailProject)`
  background: #ff8c19;
`;

const ThumbnailProject3 = () => {
  return <WrapperThumbnailProject3 />;
};

const WrapperThumbnailProject4 = styled(ThumbnailProject)`
  background: #834531;
`;

const ThumbnailProject4 = () => {
  return <WrapperThumbnailProject4 />;
};

const TopPageButtonWrapper = styled.button`
  bottom: ${props => (props.$show ? '3rem' : '-5rem')};
  position: absolute;
  z-index: 1000;
  right: 3rem;
  cursor: pointer;
  pointer-events: all;
  color: var(--black);
  border-color: var(--black);
  background: var(--white);
  text-decoration: underline;
  text-decoration-thickness: from-font;
  box-shadow: 0 0 1rem var(--black);
  transition: box-shadow .2s, bottom .3s;
  &:hover {
    box-shadow: 0 0 2rem var(--white);
  }
`

const CloseButton = styled.button`
position: fixed;
top: 1rem;
right: 1rem;
z-index: 1001;
background: var(--black);
color: var(--white);
border: none;
padding: 0.5rem 1rem;
cursor: pointer;
`;

const TopPageButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.documentElement;
    scrollContainer.style.scrollSnapType = 'none';

    window.scrollTo({ top: 24, behavior: 'smooth' });
    
    setTimeout(() => {
      scrollContainer.style.scrollSnapType = '';
    }, 500);
  };

  return (
    <TopPageButtonWrapper $show={showButton} onClick={scrollToTop} onTouchStart={scrollToTop}>haut de page</TopPageButtonWrapper>
  )
}

function App() {
  const cardsRef = useRef([]);
  const [fullscreenCard, setFullscreenCard] = useState(null)
  const [initialCardStyles, setInitialCardStyles] = useState({})

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
    setFullscreenCard(index)
    const card = cardsRef.current[index]
    const cardRect = card.getBoundingClientRect()
    setInitialCardStyles({
      top: cardRect.top,
      left: cardRect.left,
      width: cardRect.width,
      height: cardRect.height,
    })

    gsap.timeline()
    .to(card, {
      rotationY: 180,
      duration: 0.5,
      ease: "power3.inOut",
    })
    .to(card, {
      position: "fixed",
      top: cardRect.top,
      left: cardRect.left,
      width: cardRect.width,
      height: cardRect.height,
      zIndex: 1000,
      duration: 0,
    }, 0)
    .to(card, {
      top: "2rem",
      left: 0,
      width: "100vw",
      height: "100vh",
      duration: 0.5,
      ease: "power3.inOut",
    }, "-=0.25")
  }

  const handleCloseFullscreen = () => {
    if(fullscreenCard !== null) {
      const card = cardsRef.current[fullscreenCard]

      gsap.timeline()
      .to(card, {
        top: initialCardStyles.top,
        left: initialCardStyles.left,
        width: initialCardStyles.width,
        height: initialCardStyles.height,
        duration: 0.5,
        ease: "power3.inOut",
      })
      .to(card, {
        rotationY: 0,
        duration: 0.5,
        ease: "power3.inOut",
      }, "-=0.25")
      .to(card, {
        position: "",
        top: "",
        left: "",
        width: "",
        height: "",
        zIndex: "",
        duration: 0,
      })

      setFullscreenCard(null)
    }
  }

  const projectData = [
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: ThumbnailProject1,
    },
    {
      title: "Logilab",
      subtitle: "calendar",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: ThumbnailProject2,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: ThumbnailProject3,
    },
    {
      title: "CubicWeb.org",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: ThumbnailProject4,
    },
    {
      title: "Logilab.fr",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: ThumbnailProject1,
    },
    {
      title: "SemWeb.Pro",
      subtitle: "website",
      description: "design + front-end",
      keywords: ["Timeline", "Figma", "React", "Styled-Components"],
      thumbnail: ThumbnailProject2,
    },
  ]

  return (
    <>
      <GlobalFonts />
      <Header>
        <HeaderContentLeft>
          <a href="#">baptistegarcia.com</a>
        </HeaderContentLeft>
      </Header>
      <ScrollMosaic>
        <PresentationCard />
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            onClick={handleCardClick}
            cardsRef={cardsRef}
            projectData={project} />
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
