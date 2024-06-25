import "./App.css";
import styled from "styled-components";
import GlobalFonts from "./fonts/fonts";

const Header = styled.header`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 2rem;
  top: 0;
  left: 0;
  background: black;
  color: var(--white);
  padding: 0 3rem;
  font-family: "JetBrains";
  font-size: var(--text-small);
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

const HeaderContentLeft = styled(HeaderContent)``;

const HeaderContentRight = styled(HeaderContent)`
  justify-content: end;
`;

const FixedMosaic = styled.section`
  position: fixed;
  width: 100%;
  height: calc(100vh - 2rem);
  top: 2rem;
  left: 0;
  pointer-events: none;
  z-index: 100;
`;

const ScrollMosaic = styled.section`
  position: fixed;
  width: 100%;
  height: calc(100vh - 2rem);
  top: 2rem;
  display: grid;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 3900px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 3250px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 2600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1950px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }

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

const CardWrapper = styled.div`
  position: relative;
  border-radius: 2rem;
  background: #fff7ea;
  scroll-snap-align: start;

  @media (max-height: 2800px) {
    height: calc((100vh - 2rem) / 4);
  }
  @media (max-height: 2100px) {
    height: calc((100vh - 2rem) / 3);
  }
  @media (max-height: 1400px) {
    height: calc((100vh - 2rem) / 2);
  }
  @media (max-height: 700px) {
    height: calc((100vh - 2rem) / 1);
  }
`;

const CardBorder = styled.div`
  position: absolute;
  background: var(--white);
`;

const BorderTop = styled(CardBorder)`
  top: -1px;
  left: 8rem;
  height: 1px;
  width: calc(100% - 16rem);
`;

const BorderBottom = styled(CardBorder)`
  bottom: -1px;
  left: 8rem;
  height: 1px;
  width: calc(100% - 16rem);
`;

const BorderLeft = styled(CardBorder)`
  top: 8rem;
  left: -1px;
  height: calc(100% - 16rem);
  width: 1px;
`;

const BorderRight = styled(CardBorder)`
  top: 8rem;
  right: -1px;
  height: calc(100% - 16rem);
  width: 1px;
`;

const Card = ({ children }) => {
  return (
    <CardWrapper style={{ border: "solid 1px black" }}>
      <BorderTop />
      <BorderBottom />
      <BorderLeft />
      <BorderRight />
      {children}
    </CardWrapper>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  width: calc(100% - 6rem);
  height: calc(100% - 6rem);
`;

const PresentationCard = styled(CardWrapper)`
  background: lightblue;

  & > ${CardContainer} {
    flex-direction: column;
  }
`;

const ThumbnailProject = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  position: relative;
  display: flex;
`;

const WrapperThumbnailProject1 = styled(ThumbnailProject)`
  background: #cfefbf;
`;

const ThumbnailProject1 = () => {
  return (
    <WrapperThumbnailProject1>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "calc(50% - 1px)",
          height: "100%",
          width: "2px",
          background: "black",
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
    </WrapperThumbnailProject1>
  );
};

const ProjectCard = styled(Card)`
  & > ${CardContainer} {
    flex-direction: column;
  }
`;

const TopCard = styled.div`
  display: flex;
  flex: 1;
  gap: 3rem;
`;

const ProjectCardTextWrapper = styled.div``;

const BottomCard = styled.div`
  align-self: baseline;
`;

const ProjectTypeTag = styled.div`
  font-size: var(--text-medium);
  padding: 0.5rem 1.5rem;
  border: solid 1px;
  border-radius: 2rem;
  font-weight: 300;
`;

const ProjectTypeSTag = styled(ProjectTypeTag)`
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.2rem;
  position: absolute;
  top: 0.5rem;
  margin: 0 0.75rem;
`;

const ClientTag = () => {
  return (
    <ProjectTypeTag style={{ borderColor: "var(--red)", color: "var(--red)" }}>
      client
    </ProjectTypeTag>
  );
};

const PersoTag = () => {
  return (
    <ProjectTypeTag
      style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
    >
      perso
    </ProjectTypeTag>
  );
};

const ClientSTag = () => {
  return (
    <div>
      <ProjectTypeSTag
        style={{ borderColor: "var(--red)", color: "var(--red)" }}
      >
        c
      </ProjectTypeSTag>
    </div>
  );
};

const PersoSTag = () => {
  return (
    <div>
      <ProjectTypeSTag
        style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
      >
        p
      </ProjectTypeSTag>
    </div>
  );
};

const LineBreak = styled.div`
  height: 0.75rem;
`;

const TOCCard = styled(CardWrapper)`
  position: absolute;
  background: black;
  bottom: -1px;
  right: -1px;
  border-radius: 2rem 2rem 0 2rem;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 3900px) {
    width: calc(100% / 6 + 2px);
  }
  @media (max-width: 3250px) {
    width: calc(100% / 5 + 2px);
  }
  @media (max-width: 2600px) {
    width: calc(100% / 4 + 2px);
  }
  @media (max-width: 1950px) {
    width: calc(100% / 3 + 2px);
  }
  @media (max-width: 1300px) {
    width: calc(100% / 2 + 2px);
  }
  @media (max-width: 650px) {
    width: calc(100% / 1 + 2px);
  }

  @media (max-height: 2800px) {
    height: calc((100vh - 2rem) / 4 + 2px);
  }
  @media (max-height: 2100px) {
    height: calc((100vh - 2rem) / 3 + 2px);
  }
  @media (max-height: 1400px) {
    height: calc((100vh - 2rem) / 2 + 2px);
  }
  @media (max-height: 700px) {
    height: calc((100vh - 2rem) / 1 + 2px);
  }

  & > ${CardContainer} {
    display: table;
    height: unset;
    color: var(--white);
    pointer-events: all;
  }
`;

const TOCLine = styled.a`
  display: table-row;
  cursor: pointer;
  &:hover {
    & > h2,
    & > h3 {
      font-style: italic;
    }
  }
  & > h2 {
    font-weight: 300;
    text-align: right;
    letter-spacing: initial;
    display: table-cell;
  }
  & > div {
    display: table-cell;
    width: 4rem;
    position: relative;
  }
  & > h3 {
    font-weight: 300;
    letter-spacing: initial;
    display: table-cell;
  }
`;

function App() {
  return (
    <>
      <GlobalFonts />
      <Header>
        <HeaderContentLeft>
          <a href="#">baptistegarcia.com</a>
        </HeaderContentLeft>
        <HeaderContentRight>
          <a href="#">hello@baptistegarcia.com</a>
          <a href="#">06 34 57 45 77</a>
          <p>PARIS</p>
        </HeaderContentRight>
      </Header>
      <ScrollMosaic>
        <PresentationCard>
          <CardContainer>
            <h1>
              <u>Baptiste Garcia</u>,
            </h1>
            <LineBreak />
            <h2>
              Graphic Designer &<br />
              Creative Developper
            </h2>
            <LineBreak />
            <p>based in Paris.</p>
          </CardContainer>
        </PresentationCard>
        <ProjectCard>
          <CardContainer>
            <TopCard>
              <ThumbnailProject1 />
              <ProjectCardTextWrapper>
                <h2>
                  <u>SemWeb.Pro</u>
                </h2>
                <LineBreak />
                <h3>website</h3>
                <p>
                  design +<br />
                  front-end
                </p>
                <ul>
                  <li>Timeline</li>
                  <li>Figma</li>
                  <li>React</li>
                  <li>Styled-Components</li>
                </ul>
              </ProjectCardTextWrapper>
            </TopCard>
            <BottomCard>
              <ClientTag />
            </BottomCard>
          </CardContainer>
        </ProjectCard>
        <ProjectCard>
          <CardContainer>
            <TopCard>
              <ThumbnailProject1 />
              <ProjectCardTextWrapper>
                <h2>
                  <u>SemWeb.Pro</u>
                </h2>
                <LineBreak />
                <h3>website</h3>
                <p>
                  design +<br />
                  front-end
                </p>
                <ul>
                  <li>Timeline</li>
                  <li>Figma</li>
                  <li>React</li>
                  <li>Styled-Components</li>
                </ul>
              </ProjectCardTextWrapper>
            </TopCard>
            <BottomCard>
              <ClientTag />
            </BottomCard>
          </CardContainer>
        </ProjectCard>
        <ProjectCard>
          <CardContainer>
            <TopCard>
              <ThumbnailProject1 />
              <ProjectCardTextWrapper>
                <h2>
                  <u>SemWeb.Pro</u>
                </h2>
                <LineBreak />
                <h3>website</h3>
                <p>
                  design +<br />
                  front-end
                </p>
                <ul>
                  <li>Timeline</li>
                  <li>Figma</li>
                  <li>React</li>
                  <li>Styled-Components</li>
                </ul>
              </ProjectCardTextWrapper>
            </TopCard>
            <BottomCard>
              <ClientTag />
            </BottomCard>
          </CardContainer>
        </ProjectCard>
        <ProjectCard>
          <CardContainer>
            <TopCard>
              <ThumbnailProject1 />
              <ProjectCardTextWrapper>
                <h2>
                  <u>SemWeb.Pro</u>
                </h2>
                <LineBreak />
                <h3>website</h3>
                <p>
                  design +<br />
                  front-end
                </p>
                <ul>
                  <li>Timeline</li>
                  <li>Figma</li>
                  <li>React</li>
                  <li>Styled-Components</li>
                </ul>
              </ProjectCardTextWrapper>
            </TopCard>
            <BottomCard>
              <ClientTag />
            </BottomCard>
          </CardContainer>
        </ProjectCard>
        <ProjectCard>
          <CardContainer>
            <TopCard>
              <ThumbnailProject1 />
              <ProjectCardTextWrapper>
                <h2>
                  <u>SemWeb.Pro</u>
                </h2>
                <LineBreak />
                <h3>website</h3>
                <p>
                  design +<br />
                  front-end
                </p>
                <ul>
                  <li>Timeline</li>
                  <li>Figma</li>
                  <li>React</li>
                  <li>Styled-Components</li>
                </ul>
              </ProjectCardTextWrapper>
            </TopCard>
            <BottomCard>
              <ClientTag />
            </BottomCard>
          </CardContainer>
        </ProjectCard>
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <FixedMosaic>
          <TOCCard>
            <CardContainer>
              <TOCLine>
                <h2>
                  <u>Logilab.fr</u>
                </h2>
                <ClientSTag />
                <h3>website</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>SemWeb.Pro</u>
                </h2>
                <PersoSTag />
                <h3>website</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>Logilab</u>
                </h2>
                <ClientSTag />
                <h3>calendar</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>CubicWeb.org</u>
                </h2>
                <ClientSTag />
                <h3>website</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>FranceArchives</u>
                </h2>
                <PersoSTag />
                <h3>website</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>Data-BnF</u>
                </h2>
                <PersoSTag />
                <h3>website</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>Napoleonica</u>
                </h2>
                <ClientSTag />
                <h3>website</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>LeBowVosgien</u>
                </h2>
                <PersoSTag />
                <h3>website</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>StretchTypo</u>
                </h2>
                <ClientSTag />
                <h3>typo</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>WaterPoster</u>
                </h2>
                <PersoSTag />
                <h3>video</h3>
              </TOCLine>
              <TOCLine>
                <h2>
                  <u>LePetitSalon</u>
                </h2>
                <PersoSTag />
                <h3>catalog</h3>
              </TOCLine>
            </CardContainer>
          </TOCCard>
        </FixedMosaic>
      </ScrollMosaic>
    </>
  );
}

export default App;
