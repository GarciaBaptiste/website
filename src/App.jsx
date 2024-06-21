import './App.css'
import styled from 'styled-components'
import GlobalFonts from './fonts/fonts'

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
  font-family: 'JetBrains';
  font-size: 1rem;
`

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
`

const HeaderContentLeft = styled(HeaderContent)`
`

const HeaderContentRight = styled(HeaderContent)`
  justify-content: end
`

const FixedMosaic = styled.section`
  position: fixed;
  width: 100%;
  height: calc(100vh - 2rem);
  top: 2rem;
  left: 0;
  pointer-events: none;

  & h1,
  & h2,
  & p {
    font-size: 3rem;
    margin: 0;
  }

  & h1,
  & h2 {
    font-weight: 600;
  }

  & p {
    font-weight: 300;
  }
`

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

  @media (max-width: 3900px){
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 3250px){
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 2600px){
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1950px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1300px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px){
    grid-template-columns: repeat(1, 1fr);
  }

  & h1,
  & h2,
  & p {
    font-size: 3rem;
    margin: 0;
  }

  & h1,
  & h2 {
    font-weight: 600;
  }

  & p {
    font-weight: 300;
  }
`

const CardWrapper = styled.div`
  border-radius: 2rem;
  background: #FFF7EA;
  scroll-snap-align: start;

  @media (max-height: 2800px){
    height: calc((100vh - 2rem) / 4);
  }
  @media (max-height: 2100px){
    height: calc((100vh - 2rem) / 3);
  }
  @media (max-height: 1400px){
    height: calc((100vh - 2rem) / 2);
  }
  @media (max-height: 700px){
    height: calc((100vh - 2rem) / 1);
  }
`

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem;
  width: calc(100% - 6rem);
  height: calc(100% - 6rem);
`

const PresentationCard = styled(CardWrapper)`
  background: lightblue;

  & > ${CardContainer} {
    flex-direction: column;
  }
`

const TOCCard = styled(CardWrapper)`
  position: absolute;
  background: black;
  bottom: -1px;
  right: -1px;
  border-radius: 2rem 2rem 0 2rem;
  
  @media (max-width: 3900px){
    width: calc(100% / 6 + 2px);
  }
  @media (max-width: 3250px){
    width: calc(100% / 5 + 2px);
  }
  @media (max-width: 2600px){
    width: calc(100% / 4 + 2px);
  }
  @media (max-width: 1950px){
    width: calc(100% / 3 + 2px);
  }
  @media (max-width: 1300px){
    width: calc(100% / 2 + 2px);
  }
  @media (max-width: 650px){
    width: calc(100% / 1 + 2px);
  }

  @media (max-height: 2800px){
    height: calc((100vh - 2rem) / 4 + 2px);
  }
  @media (max-height: 2100px){
    height: calc((100vh - 2rem) / 3 + 2px);
  }
  @media (max-height: 1400px){
    height: calc((100vh - 2rem) / 2 + 2px);
  }
  @media (max-height: 700px){
    height: calc((100vh - 2rem) / 1 + 2px);
  }

  & > ${CardContainer} {
    gap: 0;
    flex-direction: column;
    color: var(--white);
    & > h2 {
      font-weight: 500;
      text-align: right;
    }
  }
`

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
            <h1><u>Baptiste Garcia</u>,</h1>
            <h2>Graphic Designer &<br />Creative Developper</h2>
            <p>based in Paris.</p>
          </CardContainer>
        </PresentationCard>
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <FixedMosaic>
          <TOCCard>
            <CardContainer>
              <h2><u>Logilab.fr</u></h2>
              <h2><u>SemWeb.Pro</u></h2>
              <h2><u>Logilab</u></h2>
              <h2><u>CubicWeb.org</u></h2>
              <h2><u>FranceArchives</u></h2>
              <h2><u>Data-BnF</u></h2>
              <h2><u>Napoleonica</u></h2>
              <h2><u>LeBowVosgien</u></h2>
              <h2><u>StretchTypo</u></h2>
              <h2><u>WaterPoster</u></h2>
              <h2><u>LePetitSalon</u></h2>
            </CardContainer>
          </TOCCard>
        </FixedMosaic>
      </ScrollMosaic>
    </>
  )
}

export default App