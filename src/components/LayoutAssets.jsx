import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  cloneElement,
} from "react";
import { useForm, ValidationError } from "@formspree/react";
import { HighQualityContext } from "./HighQualityContext";
import styled, { css, keyframes } from "styled-components";
import ArrowImg from "../assets/arrow.svg";
import Smiley from "../assets/smiley.svg";
import MailImg from "../assets/mail.svg";
import CloseImg from "../assets/close.svg";

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
  height: 4rem;
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

export const ArrowExternal = ({ style }) => {
  return (
    <img
      className="arrow-external"
      src={ArrowImg}
      style={{
        transform: "rotate(45deg)",
        width: "2rem",
        height: "2rem",
        ...style,
      }}
    />
  );
};

const TopPageButtonWrapper = styled(BasicButton)`
  bottom: ${(props) =>
    props.$show ? "calc(var(--margin) - 1rem + 8px)" : "-5rem"};
  right: ${(props) =>
    props.$fullscreenCard
      ? "calc(var(--margin) + 8px + " + props.$scrollBarWidth + "px)"
      : "calc(var(--margin) + 8px)"};
  position: fixed;
  z-index: 100;
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
    right: calc(var(--margin) - 1rem + 8px);
  }
`;

export const TopPageButton = (props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TopPageButtonWrapper
      $show={showButton}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      onTouchStart={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="noSelect"
      $fullscreenCard={props.$fullscreenCard}
      $scrollBarWidth={props.$scrollBarWidth}
    >
      <ButtonText>Top</ButtonText>
      <ArrowUp />
    </TopPageButtonWrapper>
  );
};

export const CloseButtonWrapper = styled(BasicButton)`
  position: fixed;
  top: calc(var(--margin) - 1rem + 8px);
  right: calc(var(--margin) + 8px + ${(props) => props.$scrollBarWidth}px);
  z-index: 1001;

  &:hover {
    background: white;
  }

  @media (max-width: 650px) {
    & > ${ButtonText} {
      display: none;
    }
  }

  @media (max-width: 899px) {
    right: calc(var(--margin) - 1rem + 8px);
  }
`;

export const CloseButton = (props) => {
  return (
    <CloseButtonWrapper
      onClick={props.onClick}
      $scrollBarWidth={props.$scrollBarWidth}
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
  top: 0;
  left: 0;
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

export const EmptyNegativeSpace = styled.div`
  margin: -5rem 0;
  @media (max-width: 899px) {
    margin: -4rem 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 99999;
  padding: 8px;
  justify-content: center;
  align-items: baseline;

  opacity: 0;
  visibility: hidden;
  transition: visibility 0s linear 0.3s;

  ${({ $show }) =>
    $show &&
    css`
      animation: ${fadeIn} 0.3s forwards;
      opacity: 1;
      visibility: visible;
      transition: none;
    `}

  ${({ $show }) =>
    !$show &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}
`;

const ModalContent = styled.div`
  background: var(--white);
  padding: var(--margin);
  border-radius: 1rem;
  flex: calc((100% - (2 * 8px)) / 3) 0 0;
  min-width: 500px;
  position: relative;
  margin-top: 25vh;
  @media (max-width: 516px) {
    flex: 100% 0 0;
    min-width: unset;
  }
`;

const ModalCloseButton = styled.button`
  background: var(--black);
  border: none;
  cursor: pointer;
  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
  border: solid 2px var(--white);
  width: 3rem;
  height: 3rem;
  padding: 0;
  border-radius: 2rem;
  color: var(--white);
  font-size: 2rem;
  line-height: 2rem;
  z-index: 9999;
  &:hover {
    background: var(--red);
  }

  & img {
    width: 1rem;
    height: 1rem;
    margin: calc(1rem - 2px);
  }
`;

export const Modal = ({ $show, onClose, children }) => {
  return (
    <ModalBackdrop $show={$show} onClick={onClose} id="modal-container">
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose}>
          <img src={CloseImg} />
        </ModalCloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  height: 4rem;
  padding: 14px 1.25rem;
  border-radius: 2rem;
  border: none;
  background: var(--grey0);
  font-family: "Inter", sans-serif;
  font-size: var(--text-writing);
  font-weight: 300;
  color: var(--black);
  margin-bottom: calc(var(--margin) / 2);
  &::placeholder {
    color: var(--grey1);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
`;

const TextArea = styled.textarea`
  min-height: 4rem;
  padding: 14px 3.75rem 14px 1.25rem;
  border-radius: 2rem;
  border: none;
  background: var(--grey0);
  font-family: "Inter", sans-serif;
  font-size: var(--text-writing);
  font-weight: 300;
  color: var(--black);
  resize: none;
  overflow: hidden;
  &::placeholder {
    color: var(--grey1);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: var(--blue);
  color: var(--white);
  border: none;
  width: calc(4rem - 8px);
  height: calc(4rem - 8px);
  border-radius: 2rem;
  cursor: pointer;
  padding: 0;

  &:hover {
    background: var(--darkblue);
  }

  & img {
    width: 2rem;
    height: 2rem;
    margin-left: -3px;
    margin-bottom: -5px;
  }
`;

const SuccessText = styled.p`
  color: var(--black);
`;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleTextAreaResize = (e) => {
    const textArea = e.target;
    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (e.target.name === "message") {
      handleTextAreaResize(e);
    }
  };

  const [state, handleSubmit] = useForm("mvgowglp");
  if (state.succeeded) {
    return <SuccessText>Email sent, thank you!</SuccessText>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <TextArea
        id="message"
        name="message"
        placeholder="Your message…"
        value={formData.message}
        onChange={handleChange}
        rows="1"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <SubmitButton type="submit" disabled={state.submitting}>
        <img src={MailImg} />
      </SubmitButton>
    </Form>
  );
};

export const ContactButton = styled.button`
  border: none;
  cursor: pointer;
  color: var(--grey2);
  background: none;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  padding: 0;
  letter-spacing: inherit;
  text-decoration: underline;
  text-decoration-thickness: from-font;

  &:hover {
    color: var(--grey1);
  }
`;
