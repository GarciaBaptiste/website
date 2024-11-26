import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { HighQualityProvider } from "./components/HighQualityContext";

import "../public/App.css";
import GlobalFonts from "./fonts/fonts";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  TopPageButton,
  CloseButton,
  MasonryWrapper,
  PageMask,
  Modal,
  ContactForm,
  ContactButton,
} from "./components/LayoutAssets";
import { ProjectCard, PresentationCard, FooterCard } from "./components/Cards";

import { ProjectPage as PageBowVosgien } from "./components/projects/PP_bowvosgien";
import { ProjectPage as PageLogilabFr } from "./components/projects/PP_logilabfr";
import { ProjectPage as PageSwep } from "./components/projects/PP_swep";
import { ProjectPage as PageCubicWebOrg } from "./components/projects/PP_cubicweborg";
import { ProjectPage as PageFranceArchives } from "./components/projects/PP_francearchives";
import { ProjectPage as PageNapoleonica } from "./components/projects/PP_napoleonica";
import { ProjectPage as PageLogilabBusinesscards } from "./components/projects/PP_logilabbusinesscards";
import { ProjectPage as PageStretch } from "./components/projects/PP_stretch";
import { ProjectPage as PageGameOfLife } from "./components/projects/PP_gameoflife";
import { ProjectPage as PageHyperreel } from "./components/projects/PP_hyperreel";
import { ProjectPage as PageBookTales } from "./components/projects/PP_booktales";
import ThumbLeBowVosgien from "./assets/projects/le_bow_vosgien/le_bow_vosgien_mockup.jpg";
import ThumbLeBowVosgienPH from "./assets/projects/le_bow_vosgien/le_bow_vosgien_mockup_placeholder.jpg";
import ThumbLogilabFr from "./assets/projects/logilab_fr/mockup_logilab_fr.jpg";
import ThumbLogilabFrPH from "./assets/projects/logilab_fr/mockup_logilab_fr_placeholder.jpg";
import ThumbSwep from "./assets/projects/swep/mockup_swep.jpg";
import ThumbSwepPH from "./assets/projects/swep/mockup_swep_placeholder.jpg";
import ThumbCubicWeb from "./assets/projects/cubicweb/mockup_cubicweb.jpg";
import ThumbCubicWebPH from "./assets/projects/cubicweb/mockup_cubicweb_placeholder.jpg";
import ThumbFranceArchives from "./assets/projects/francearchives/francearchives_mockup.png";
import ThumbFranceArchivesPH from "./assets/projects/francearchives/francearchives_mockup_placeholder.png";
import ThumbNapoleonica from "./assets/projects/napoleonica/napoleonica_mockup.jpg";
import ThumbNapoleonicaPH from "./assets/projects/napoleonica/napoleonica_mockup_placeholder.jpg";
import ThumbLogilabBusinesscards from "./assets/projects/logilab_businesscards/logilab_businesscards_mockup.jpg";
import ThumbLogilabBusinesscardsPH from "./assets/projects/logilab_businesscards/logilab_businesscards_mockup_placeholder.jpg";
import ThumbStretch from "./assets/projects/stretch/vinyl_mockup1.jpg";
import ThumbStretchPH from "./assets/projects/stretch/vinyl_mockup1_placeholder.jpg";
import ThumbGameOfLife from "./assets/projects/game_of_life/game_of_life_mockup4.jpg";
import ThumbGameOfLifePH from "./assets/projects/game_of_life/game_of_life_mockup4_placeholder.jpg";
import ThumbHyperreel from "./assets/projects/hyperreel/hyperreel_mockup.jpg";
import ThumbHyperreelPH from "./assets/projects/hyperreel/hyperreel_mockup_placeholder.jpg";
import ThumbBookTales from "./assets/projects/book_tales/book_tales_mockup.jpg";
import ThumbBookTalesPH from "./assets/projects/book_tales/book_tales_mockup_placeholder.jpg";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cardsRef = useRef([]);
  const [fullscreenCard, setFullscreenCard] = useState(null);
  const [initialCardStyles, setInitialCardStyles] = useState({});
  const [$scrollBarWidth, setScrollBarWidth] = useState(0);
  const [readyForHighQuality, setReadyForHighQuality] = useState(false);
  const breakpoints = [350, 750, 1100, 1800];
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (fullscreenCard !== null) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${$scrollBarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [fullscreenCard, $scrollBarWidth]);

  const runAnimations = () => {
    const calculateScrollBarWidth = () => {
      const $scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      setScrollBarWidth($scrollBarWidth);
    };

    gsap.set(cardsRef.current, { opacity: 0, y: "5rem", scale: 0.9 });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    timeline.fromTo(
      cardsRef.current.filter(
        (card) =>
          card && card.getBoundingClientRect().top < window.innerHeight * 0.9
      ),
      { opacity: 0, y: "5rem", scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card.getBoundingClientRect().top >= window.innerHeight * 0.9) {
        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            });
          },
        });
      }
    });

    ScrollTrigger.refresh();

    calculateScrollBarWidth();
  };

  useLayoutEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.top = "-3rem";
        setTimeout(() => {
          preloader.remove();
        }, 300);
      }
      setReadyForHighQuality(true);
      runAnimations();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    let resizeTimeout;
    let currentBreakpointIndex = breakpoints.findIndex(
      (breakpoint) => window.innerWidth <= breakpoint
    );

    const handleResize = () => {
      const newBreakpointIndex = breakpoints.findIndex(
        (breakpoint) => window.innerWidth <= breakpoint
      );

      if (newBreakpointIndex !== currentBreakpointIndex) {
        currentBreakpointIndex = newBreakpointIndex;
        ScrollTrigger.refresh();
        runAnimations();
      }
    };

    const debounceResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
      clearTimeout(resizeTimeout);
    };
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
          padding: "8px " + (8 + $scrollBarWidth) + "px 8px 8px",
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
      if (card.children[1]) {
        card.children[1].firstElementChild.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      document.documentElement.classList.remove("fullscreen-page");
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const projectData = [
    {
      title: "Available for hire",
      type: "info",
      description:
        "I am currently available for hire, whether freelance or full-time employment.",
      customContent: (
        <span>
          <br />
          Feel free to{" "}
          <ContactButton onClick={toggleModal}>get in touch</ContactButton>!
        </span>
      ),
    },
    {
      title: "Le Bow Vosgien",
      type: "client",
      description: "art direction + front-end",
      keywords: "realtime 3D — immersive wandering — Blender — Three.JS",
      thumbnail: ThumbLeBowVosgien,
      thumbnail_placeholder: ThumbLeBowVosgienPH,
      projectpage: PageBowVosgien,
    },
    {
      title: "SemWeb.Pro",
      type: "client",
      description: "art direction + front-end",
      keywords: "Timeline — Figma — React + Styled-Components + CSS",
      thumbnail: ThumbSwep,
      thumbnail_placeholder: ThumbSwepPH,
      projectpage: PageSwep,
    },
    {
      title: "Hyperréel",
      type: "personal",
      description: "poster — experiment",
      keywords: "3D render — water physics — Blender (Cycles)",
      thumbnail: ThumbHyperreel,
      thumbnail_placeholder: ThumbHyperreelPH,
      projectpage: PageHyperreel,
    },
    {
      title: "CubicWeb.org",
      type: "client",
      description: "art direction + front-end",
      keywords: "Figma — React — Styled-Components",
      thumbnail: ThumbCubicWeb,
      thumbnail_placeholder: ThumbCubicWebPH,
      projectpage: PageCubicWebOrg,
    },
    {
      title: "Book Tales",
      type: "personal",
      description: "publishing — web-to-print",
      keywords: "exhibition catalog — procedural layout — JS",
      thumbnail: ThumbBookTales,
      thumbnail_placeholder: ThumbBookTalesPH,
      projectpage: PageBookTales,
    },
    {
      title: "Napoleonica",
      type: "client",
      description: "art direction + front-end",
      keywords: "font — black & white — minimalism — archive",
      thumbnail: ThumbNapoleonica,
      thumbnail_placeholder: ThumbNapoleonicaPH,
      projectpage: PageNapoleonica,
    },
    {
      title: "Logilab business cards",
      type: "client",
      description: "graphic design — print",
      thumbnail: ThumbLogilabBusinesscards,
      thumbnail_placeholder: ThumbLogilabBusinesscardsPH,
      projectpage: PageLogilabBusinesscards,
    },
    {
      title: "Logilab",
      type: "client",
      description: "art direction + Figma prototype",
      keywords: "ergonomics — proof of concept — visual indentity",
      thumbnail: ThumbLogilabFr,
      thumbnail_placeholder: ThumbLogilabFrPH,
      projectpage: PageLogilabFr,
    },
    {
      title: "Conway's Game of Life",
      type: "personal",
      description: "experiment",
      thumbnail: ThumbGameOfLife,
      thumbnail_placeholder: ThumbGameOfLifePH,
      projectpage: PageGameOfLife,
    },
    {
      title: "France Archives",
      type: "client",
      description: "UX — UI",
      keywords: "Figma — ergonomics — design system — archive",
      thumbnail: ThumbFranceArchives,
      thumbnail_placeholder: ThumbFranceArchivesPH,
      projectpage: PageFranceArchives,
    },
    {
      title: "Stretch",
      type: "personal",
      description: "graphic design — font",
      thumbnail: ThumbStretch,
      thumbnail_placeholder: ThumbStretchPH,
      projectpage: PageStretch,
    },
  ];

  return (
    <HighQualityProvider value={readyForHighQuality}>
      <GlobalFonts />
      <PageMask id="page-mask" />
      <PresentationCard
        onClick={handleCardClick}
        cardsRef={cardsRef}
        toggleModal={toggleModal}
      />
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
      </MasonryWrapper>
      {readyForHighQuality ? <FooterCard toggleModal={toggleModal} /> : ""}
      {fullscreenCard !== null && (
        <CloseButton
          onClick={handleCloseFullscreen}
          $scrollBarWidth={$scrollBarWidth}
        />
      )}
      <TopPageButton
        $fullscreenCard={fullscreenCard}
        $scrollBarWidth={$scrollBarWidth}
      />
      <Modal show={isModalOpen} onClose={toggleModal}>
        <ContactForm />
      </Modal>
    </HighQualityProvider>
  );
}

export default App;
