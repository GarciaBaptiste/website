import './App.css'
import styled from 'styled-components'
import GlobalFonts from './fonts/fonts'

const Container = styled.div`
  display: grid;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
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
`

const CardWrapper = styled.div`
  border-radius: 25px;
  background: #FFF7EA;
  scroll-snap-align: start;

  @media (max-height: 2800px){
    height: calc(100vh / 4);
  }
  @media (max-height: 2100px){
    height: calc(100vh / 3);
  }
  @media (max-height: 1400px){
    height: calc(100vh / 2);
  }
  @media (max-height: 700px){
    height: calc(100vh / 1);
  }
`

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem;
  width: 100%;
  height: 100%;
`

const PresentationCard = styled(CardWrapper)`
  background: lightblue;

  & > ${CardContainer} {
    flex-direction: column;
  }
`

function App() {
  return (
    <>
      <GlobalFonts />
      <Container>
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
      </Container>
    </>
  )
}

export default App