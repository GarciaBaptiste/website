import React from "react";
import styled from "styled-components";

import MockupMBAir from "../../assets/mockup_mbair.svg";

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
      <div style={{ width: "100%", paddingBottom: "5rem" }}>
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
