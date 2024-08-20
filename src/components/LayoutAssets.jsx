import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowImg from "../assets/arrow.svg";

const HeaderWrapper = styled.header`
  display: flex;
  margin: 4px;
  background: var(--color7);
  padding: 0.75rem var(--margin);
  font-family: "JetBrains";
  font-size: var(--text-small);
  border-radius: 1rem;
  z-index: 1;
`;

const HeaderMask = styled.div`
  position: fixed;
  background: white;
  width: 100%;
  height: var(--margin);
  top: 0;
  left: 0;
  z-index: 1;
  display: none;

  @media (max-width: 1300px) {
    display: unset;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > a,
  & > p {
    color: var(--black);
    line-height: 1.5rem;
  }

  & > a:hover {
    color: lightblue;
    cursor: pointer;
  }
`;

const HeaderContentLeft = styled(HeaderContent)``;

const HeaderContentRight = styled(HeaderContent)`
  align-items: flex-end;
`;

export const Header = () => {
  return (
    <>
      <HeaderMask />
      <HeaderWrapper>
        <HeaderContentLeft>
          <a href="#">baptistegarcia.com</a>
        </HeaderContentLeft>
        <HeaderContentRight>
          <a href="#">instagram.com/baptistegarcia</a>
          <a href="#">github.com/baptistegarcia</a>
        </HeaderContentRight>
      </HeaderWrapper>
    </>
  );
};

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
    }, 500);
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

export const FixedMosaic = styled.section`
  position: fixed;
  height: calc(100vh - 8px);
  top: 4px;
  right: 4px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  pointer-events: none;

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
    width: calc(100% - 8px);
  }
`;

export const ScrollMosaic = styled.section`
  position: absolute;
  top: 4px;
  left: 4px;
  padding-bottom: 4px;

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
    width: calc(100% - 8px);
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
    border-radius: 1.5rem;
  }

  @media (max-width: 650px) {
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
  }

  @media (max-width: 450px) {
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
  }
`;
