import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowImg from "../assets/arrow.svg";

const HeaderWrapper = styled.header`
  position: fixed;
  // display: flex;
  display: none;
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

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <a href="#">baptistegarcia.com</a>
      </HeaderContent>
    </HeaderWrapper>
  );
};

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

const TopPageButtonWrapper = styled.button`
  bottom: ${(props) => (props.$show ? "3rem" : "-5rem")};
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
  transition: box-shadow 0.2s, bottom 0.3s;
  &:hover {
    box-shadow: 0 0 2rem var(--white);
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
    }, 500);
  };

  return (
    <TopPageButtonWrapper
      $show={showButton}
      onClick={scrollToTop}
      onTouchStart={scrollToTop}
    >
      haut de page
    </TopPageButtonWrapper>
  );
};

export const CloseButtonWrapper = styled.button`
  position: fixed;
  top: calc(3rem + 8px);
  right: calc(3rem + 8px);
  z-index: 1001;
  color: var(--black);
  border: none;
  padding: 1rem 1rem 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  border-radius: 2rem;
  background: var(--white);

  &:hover {
    background: white;
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

export const FixedMosaic = styled.section`
  position: fixed;
  height: calc(100vh - 8px);
  top: 4px;
  right: 4px;
  pointer-events: none;
  z-index: 100;
  display: flex;

  @media (max-width: 3900px) {
    width: calc((100% - 8px) / 6);
  }
  @media (max-width: 3250px) {
    width: calc((100% - 8px) / 5);
  }
  @media (max-width: 2600px) {
    width: calc((100% - 8px) / 4);
  }
  @media (max-width: 1950px) {
    width: calc((100% - 8px) / 3);
  }
  @media (max-width: 1300px) {
    width: calc((100% - 8px) / 2);
  }
`;

export const ScrollMosaic = styled.section`
  position: absolute;
  top: 4px;
  left: 4px;

  @media (max-width: 3900px) {
    width: calc((100% - 8px) / 6 * 5);
  }
  @media (max-width: 3250px) {
    width: calc((100% - 8px) / 5 * 4);
  }
  @media (max-width: 2600px) {
    width: calc((100% - 8px) / 4 * 3);
  }
  @media (max-width: 1950px) {
    width: calc((100% - 8px) / 3 * 2);
  }
  @media (max-width: 1300px) {
    width: calc((100% - 8px) / 2);
  }

  & ul {
    color: var(--grey1);
  }
`;

export const ThumbnailProject = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
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
