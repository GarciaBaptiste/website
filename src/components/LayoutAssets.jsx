import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
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

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <a href="#">baptistegarcia.com</a>
      </HeaderContent>
    </HeaderWrapper>
  );
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

    window.scrollTo({ top: 24, behavior: "smooth" });

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

export const CloseButton = styled.button`
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

export const FixedMosaic = styled.section`
  position: fixed;
  width: 100%;
  height: calc(100vh - 2rem);
  top: 2rem;
  left: 0;
  pointer-events: none;
  z-index: 100;
`;

export const ScrollMosaic = styled.section`
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

export const ThumbnailProject = styled.div`
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
