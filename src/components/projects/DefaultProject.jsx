import React from "react";
import styled from "styled-components";

import { ThumbnailProject } from "../LayoutAssets";

const ThumbnailWrapper = styled(ThumbnailProject)`
  background: #cfefbf;

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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "calc(50% - 1px)",
          height: "100%",
          width: "2px",
          background: "var(--black)",
        }}
      />
      <p
        style={{
          fontFamily: "JetBrains",
          fontSize: "var(--text-medium)",
          flex: 1,
          alignSelf: "center",
          textAlign: "center",
          background: "#CFEFBF",
          zIndex: 1,
          padding: "0.5rem 0",
        }}
      >
        09h00
      </p>
    </ThumbnailWrapper>
  );
};

export const ProjectPage = () => {
  return (
    <div>
      <h3>Project Page</h3>
      <p>Test toto tati tatayoyo.</p>
    </div>
  );
};
