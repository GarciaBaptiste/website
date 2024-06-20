import './App.css'
import styled from 'styled-components'

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

const Card = styled.div`
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

function App() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default App