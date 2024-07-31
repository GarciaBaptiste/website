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
`

export const ProjectPage = () => {
  return (
    <>
      <div style={{ width: "100%", paddingBottom: "5rem" }}>
        <div style={{ position: "relative", height: "90vh" }}>
          <img
            src={MockupMBAir}
            style={{
              height: "80vh",
              marginTop: "5vh",
              position: "absolute",
              width: "100%",
            }}
          />
          <iframe
            src="http://le-bow-vosgien.fr/"
            style={{
              border: "none",
              position: "absolute",
              height: "68vh",
              width: "108.4vh",
              top: "9.4vh",
              left: "calc(50% - (108.4vh/2))",
            }}
          ></iframe>
        </div>
          <TextBloc>
            <p>Le projet consiste à développer un site web en 3D destiné à un scénographe, mettant en avant la puissance de la narration à travers le déplacement dans l'espace.</p>
          </TextBloc>
          <TextBloc>
            <p>Ce site innovant permettra aux visiteurs d'explorer des scénographies immersives et interactives, où chaque mouvement dévoile de nouvelles perspectives et éléments narratifs.</p>
          </TextBloc>
      </div>
    </>
  );
};
