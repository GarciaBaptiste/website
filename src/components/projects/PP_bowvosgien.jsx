import React from "react";
import styled from "styled-components";

import { ThumbnailProject } from "../LayoutAssets";

import MockupMBAir from "../../assets/mockup_mbair.svg";

const ThumbnailWrapper = styled(ThumbnailProject)`
  background: linear-gradient(to top, #d9d9d9, white);

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

export const Thumbnail = () => {
  return (
    <ThumbnailWrapper>
      <p
        style={{
          fontSize: "var(--text-basic)",
          fontWeight: 600,
          flex: 1,
          alignSelf: "center",
          textAlign: "center",
          zIndex: 1,
          padding: "0.5rem 0",
        }}
      >
        LBV
      </p>
    </ThumbnailWrapper>
  );
};

const TextBloc = styled.div`
  margin-top: 5rem;
  width: 66%;
  margin-left: 33%;
  &:nth-last-child(1) {
    padding-bottom: 5rem;
  }
`;

export const ProjectPage = () => {
  return (
    <>
      <div
        className="foreground"
        style={{ width: "100%", paddingBottom: "5rem" }}
      >
        <div style={{ position: "relative", height: "90vh" }}>
          <img
            className="foreground"
            src={MockupMBAir}
            style={{
              height: "80vh",
              marginTop: "5vh",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
        <TextBloc>
          <p>
            Le projet consiste à développer un site web en 3D destiné à un
            scénographe, mettant en avant la puissance de la narration à travers
            le déplacement dans l'espace.
          </p>
        </TextBloc>
        <TextBloc>
          <p>
            Ce site innovant permettra aux visiteurs d'explorer des
            scénographies immersives et interactives, où chaque mouvement
            dévoile de nouvelles perspectives et éléments narratifs.
          </p>
        </TextBloc>
        <TextBloc>
          <p>
            Le projet consiste à développer un site web en 3D destiné à un
            scénographe, mettant en avant la puissance de la narration à travers
            le déplacement dans l'espace.
          </p>
        </TextBloc>
        <TextBloc>
          <p>
            Ce site innovant permettra aux visiteurs d'explorer des
            scénographies immersives et interactives, où chaque mouvement
            dévoile de nouvelles perspectives et éléments narratifs.
          </p>
        </TextBloc>
        <div style={{ position: "relative", height: "90vh" }}>
          <img
            className="foreground"
            src={MockupMBAir}
            style={{
              height: "80vh",
              marginTop: "5vh",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
        <TextBloc>
          <p>
            Le projet consiste à développer un site web en 3D destiné à un
            scénographe, mettant en avant la puissance de la narration à travers
            le déplacement dans l'espace.
          </p>
        </TextBloc>
        <TextBloc>
          <p>
            Ce site innovant permettra aux visiteurs d'explorer des
            scénographies immersives et interactives, où chaque mouvement
            dévoile de nouvelles perspectives et éléments narratifs.
          </p>
        </TextBloc>
        <div style={{ position: "relative", height: "90vh" }}>
          <img
            className="foreground"
            src={MockupMBAir}
            style={{
              height: "80vh",
              marginTop: "5vh",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};
