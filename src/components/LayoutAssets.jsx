import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  cloneElement,
} from "react";
import { HighQualityContext } from "./HighQualityContext";
import styled from "styled-components";
import ArrowImg from "../assets/arrow.svg";
import Smiley from "../assets/smiley.svg";

export const LazyVideo = ({ src, ...props }) => {
  const videoRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(videoRef.current);
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={isLoaded ? src : undefined}
      preload="metadata"
      {...props}
    />
  );
};

export const LowQualityImg = ({ lowQualitySrc, highQualitySrc, children }) => {
  const readyForHighQuality = useContext(HighQualityContext);
  const [src, setSrc] = useState(lowQualitySrc);
  const [isHighQualityLoaded, setIsHighQualityLoaded] = useState(false);

  useEffect(() => {
    if (readyForHighQuality) {
      const img = new Image();
      img.src = highQualitySrc;
      img.onload = () => {
        setIsHighQualityLoaded(true);
        setSrc(highQualitySrc);
      };
    }
  }, [readyForHighQuality, highQualitySrc]);

  return cloneElement(children, {
    src,
    style: { filter: isHighQualityLoaded ? "none" : "blur(3px)" },
  });
};

export const BasicButton = styled.button`
  cursor: pointer;
  background: var(--white);
  color: var(--black);
  border: none;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  border-radius: 2rem;
  transition: background 0.2s;
  pointer-events: all;

  &:hover {
    background: white;
  }
`;

export const ButtonText = styled.p`
  color: var(--black);
  font-size: 2rem;
  line-height: 2rem;
  padding-left: 0.5rem;
`;

const ArrowUp = () => {
  return <img src={ArrowImg} style={{ width: "2rem", height: "2rem" }} />;
};

const ArrowLeft = () => {
  return (
    <img
      src={ArrowImg}
      style={{ transform: "rotate(-90deg)", width: "2rem", height: "2rem" }}
    />
  );
};

export const ArrowRightUp = () => {
  return (
    <img
      src={ArrowImg}
      style={{ transform: "rotate(45deg)", width: "2rem", height: "2rem" }}
    />
  );
};

export const ArrowExternal = () => {
  return (
    <img
      className="arrow-external"
      src={ArrowImg}
      style={{ transform: "rotate(45deg)", width: "2rem", height: "2rem" }}
    />
  );
};

const TopPageButtonWrapper = styled(BasicButton)`
  bottom: ${(props) => (props.$show ? "var(--margin)" : "-5rem")};
  position: fixed;
  z-index: 100;
  right: var(--margin);
  transition: bottom 0.3s;
  background: var(--white);
  pointer-events: all;

  & > ${ButtonText} {
    color: var(--black);
  }

  &:hover {
    background: white;
  }

  @media (max-width: 899px) {
    & > ${ButtonText} {
      display: none;
    }
  }
`;

export const TopPageButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.documentElement;
    scrollContainer.style.scrollSnapType = "none";

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      scrollContainer.style.scrollSnapType = "";
    }, 1200);
  };

  return (
    <TopPageButtonWrapper
      $show={showButton}
      onClick={scrollToTop}
      onTouchStart={scrollToTop}
      className="noSelect"
    >
      <ButtonText>Top</ButtonText>
      <ArrowUp />
    </TopPageButtonWrapper>
  );
};

export const CloseButtonWrapper = styled(BasicButton)`
  position: fixed;
  top: calc(var(--margin) + 8px);
  right: calc(var(--margin) + ${(props) => props.scrollBarWidth}px);
  z-index: 1001;

  &:hover {
    background: white;
  }

  @media (max-width: 650px) {
    & > ${ButtonText} {
      display: none;
    }
  }
`;

export const CloseButton = (props) => {
  return (
    <CloseButtonWrapper
      onClick={props.onClick}
      scrollBarWidth={props.scrollBarWidth}
    >
      <ButtonText>Back</ButtonText>
      <ArrowLeft />
    </CloseButtonWrapper>
  );
};

export const ThumbnailProject = styled.div`
  border-radius: 1rem;
  position: relative;
  display: flex;
  margin: calc(-2 * var(--margin)) var(--margin);
  overflow: hidden;
  z-index: 200;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  object-fit: cover;
  transform-origin: center;
  transform: scale(1);
  transition: transform 0.5s ease, opacity 0.3s 0.3s, filter 2s;
`;

export const MasonryWrapper = styled.section`
  display: flex;
  width: calc(100% - 8px);
  margin: 0 4px;
  padding-bottom: 4px;
`;

export const PageMask = styled.div`
  position: fixed;
  width: 100vw;
  height: 100dvh;
  z-index: 1;
  background: var(--grey2);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s 0.2s;
`;

const SmileyFaceWrapper = styled.img`
  display: inline;
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
`;

export const SmileyFace = () => {
  return <SmileyFaceWrapper src={Smiley} />;
};
