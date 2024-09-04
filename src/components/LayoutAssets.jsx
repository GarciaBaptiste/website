import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowImg from "../assets/arrow.svg";

const BasicButton = styled.button`
  cursor: pointer;
  background: var(--white);
  color: var(--black);
  border: none;
  padding: 1rem 1rem 1rem 1.5rem;
  display: flex;
  gap: 1rem;
  border-radius: 2rem;
  transition: background 0.2s;
  pointer-events: all;

  &:hover {
    background: white;
  }

  @media (max-width: 650px) {
    padding: 1rem;
  }
`;

const ButtonText = styled.p`
  color: var(--black);
  font-size: 2rem;
  line-height: 2rem;
  text-decoration: underline;
`;

const ArrowUp = () => {
  return <img src={ArrowImg} />;
};

const ArrowLeft = () => {
  return <img src={ArrowImg} style={{ transform: "rotate(-90deg)" }} />;
};

const TopPageButtonWrapper = styled(BasicButton)`
  bottom: ${(props) => (props.$show ? "var(--margin)" : "-5rem")};
  position: absolute;
  z-index: 1000;
  right: var(--margin);
  transition: bottom 0.3s;
  background: none;
  pointer-events: all;

  & > ${ButtonText} {
    color: var(--white);
  }

  & > img {
    @media (min-width: 1301px) {
      filter: invert(1);
    }
  }

  &:hover {
    background: grey;
  }

  @media (max-width: 1300px) {
    background: var(--white);

    & > ${ButtonText} {
      color: var(--black);
    }

    &:hover {
      background: white;
    }
  }

  @media (max-width: 650px) {
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
      <ButtonText>Haut</ButtonText>
      <ArrowUp />
    </TopPageButtonWrapper>
  );
};

export const CloseButtonWrapper = styled(BasicButton)`
  position: fixed;
  top: calc(var(--margin) + 8px);
  right: calc(var(--margin) + 8px);
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
    <CloseButtonWrapper onClick={props.onClick}>
      <ButtonText>Accueil</ButtonText>
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
  transition: transform 0.5s ease, opacity 0.3s 0.3s, filter 1s;
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
  transition: opacity 0.3s;
`;
