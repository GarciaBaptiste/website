import React, { useRef } from "react";
import { ArrowExternal } from "../LayoutAssets";
import {
  ProjectPageWrapper,
  ProjectPageContent,
  FullScreenImage,
  TextMedium,
  TextSmall,
  SmallBackground,
  DoubleColumns,
  MockUpDouble,
  VisitSiteButton,
} from "../../assets/PageAssets";

import Image1 from "../../assets/projects/game_of_life/game_of_life_screen.png";
import Image2 from "../../assets/projects/game_of_life/game_of_life_explanation.png";
import Image3 from "../../assets/projects/le_bow_vosgien/render2.png";
import Image4 from "../../assets/projects/le_bow_vosgien/render5.png";
import Image5 from "../../assets/projects/le_bow_vosgien/render9.png";
import Image6 from "../../assets/projects/le_bow_vosgien/le_bow_vosgien_mobile_00.png";

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <ProjectPageWrapper ref={containerRef}>
      <ProjectPageContent>
        <FullScreenImage
          scroller={containerRef}
          src={Image1}
          $isSquareOnMobile={true}
        />
        <TextSmall scroller={containerRef}>
          The <i>Game of Life</i> is a cellular automaton —&nbsp;now recognized
          as a mathematical simulation game&nbsp;— created by John Horton Conway
          in 1970.
        </TextSmall>
        <TextSmall scroller={containerRef} $afterText={true}>
          The game takes place on a theoretically infinite two-dimensional grid,
          where the squares —&nbsp;referred to as “cells”, analogous to living
          cells&nbsp;— can take on one of two states: “alive” (black) or “dead”
          (white), depending on the state of neighboring cells.
        </TextSmall>
        <TextSmall scroller={containerRef}>
          — If a cell has exactly two live neighbors, it remains in its current
          state in the next step.
          <br />
          — If a cell has exactly three live neighbors, it will be alive in the
          next step.
          <br />— If a cell has fewer than two or more than three live
          neighbors, it will be dead in the next step.
        </TextSmall>
        <FullScreenImage scroller={containerRef} src={Image2} />
        <TextSmall scroller={containerRef}>
          I came across this “zero-player game” during my research for my thesis
          and set myself the challenge of developing my own version of the Game
          of Life in JavaScript:
        </TextSmall>
        <SmallBackground
          scroller={containerRef}
          ratio="10/6"
          style={{ background: "white", borderRadius: "1rem" }}
        >
          <iframe src="http://baptistegarcia.com/game_of_life" width="100%" />
        </SmallBackground>
        <TextSmall scroller={containerRef}>
          In the <i>Game of Life</i>, various structures can emerge over time —
          &nbsp;<i>stable structures</i>, <i>oscillators</i>, <i>spaceships</i>,
          and others. In my demo, users can create a <i>glider</i> (most common{" "}
          <i>spaceship</i>) by clicking, rather than waiting for one to form
          randomly, to observe its impact on other structures. (Try it above!)
        </TextSmall>
      </ProjectPageContent>
    </ProjectPageWrapper>
  );
};
